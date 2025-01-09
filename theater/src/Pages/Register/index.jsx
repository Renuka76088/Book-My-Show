import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'

function Register() {
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: checkoutSchema,
      onSubmit: (values, action) => {
        console.log(values);
        // console.log(process.env.BASEURL)
        const options = {
          method: 'POST',
          url: "http://localhost:8000/api/v1/auth/register",
          headers: {
            'content-type': 'application/json',

          },
          data: values
        };
        const PostData = async () => {
          try {
            const response = await axios
              .request(options)
              .then(function (response) {
                // console.log(response.data);
                toast.success(response.data.message, { theme: "dark", position: "top-center" })
                // router.push("/profile")
                console.log(response,'main response')
                action.resetForm();

              })
              .catch(function (error) {
                console.log(error);
                toast.error(error.response.data.message, { theme: "dark", position: "top-center" })

              });
          } catch (error) {
            console.log(errors)
          }
        };
        PostData()
      }
    });
  return (
    <div>  <div className="container">

    <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
            
            <div className="row">
                <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div className="col-lg-7">
                    <div className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                        </div>
                        <form className="user" onSubmit={handleSubmit}>
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                        placeholder="First Name"
                                         
                    name='firstname'
                    
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                     />
                
                {errors.firstname && touched.firstname ? (
                  <p className='form-error text-danger'>{errors.firstname}</p>
                ) : null}
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control form-control-user" id="exampleLastName"
                                        placeholder="Last Name"
                                         
                    name='surname'
                    
                    value={values.surname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                  />
                
                {errors.surname && touched.surname ? (
                  <p className='form-error text-danger'>{errors.surname}</p>
                ) : null}
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                    placeholder="Email Address"
                                    
                    name='email'
                    
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                    />
                </div>
                {errors.email && touched.email ? (
                  <p className='form-error text-danger'>{errors.email}</p>
                ) : null}
                        
                            <div className="form-group row">
                                <div className="col-sm-12 mb-3 mb-sm-0">
                                    <input type="password" className="form-control form-control-user"
                                         placeholder="Password"
                                          
                    name='password'
                    id='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                   />
                </div>
                {errors.password && touched.password ? (
                  <p className='form-error text-danger'>{errors.password}</p>
                ) : null}
                                
                                
                            </div>
                            <input type='submit' className="btn btn-primary btn-user btn-block"  value=" Register Account"/>
                               
                            
                            <hr/>
                            <a  className="btn btn-google btn-user btn-block">
                                <i className="fab fa-google fa-fw"></i> Register with Google
                            </a>
                            <a  className="btn btn-facebook btn-user btn-block">
                                <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                            </a>
                        </form>
                        <hr/>
                        <div className="text-center">
                            <Link className="small" to="/Forgot-Password">Forgot Password?</Link>
                        </div>
                        <div className="text-center">
                            <Link className="small" to="/">Already have an account? Login!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div></div>
  )
}
const checkoutSchema = yup.object().shape({
    firstname: yup.string().required("Please enter firstname"),
    surname: yup.string().required("Please enter surname"),
    email: yup.string().required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
  })
  const initialValues = {
    firstname: "",
    surname: "",
    email: "",
    password: ""
  }

export default Register
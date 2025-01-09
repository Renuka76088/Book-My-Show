import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'

function Login() {

    const navigateTo = useNavigate();
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: checkoutSchema,
            onSubmit: (values, action) => {
                console.log(values);
                // console.log(process.env.BASEURL)
                const options = {
                    method: 'POST',
                    url: "http://localhost:8000/api/v1/auth/login",
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
                                console.log(response, 'main response')
                                localStorage.setItem("token",response.data.token)
                                localStorage.setItem("username",response.data.userData.firstname)
                                navigateTo("/Dashboard");
                                action.resetForm();

                            })
                            .catch(function (error) {
                                console.log(error.response.data.message);
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
      <div className="container"> 

    
    <div className="row justify-content-center">

        <div className="col-xl-10 col-lg-12 col-md-9">

            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    
                    <div className="row">
                        <div className="col-lg-6 d-none d-lg-block bg-login-image">

                        </div>
                        <div className="col-lg-6">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                </div>
                                <form className="user"  onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-user"
                                           
                                        
                                        name='email'
                                        id='email'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      
                                        placeholder='abc@gmail.com' />
                                         {errors.email && touched.email ? (
                                    <p className='form-error text-danger'>{errors.email}</p>
                                ) : null}
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control form-control-user"
                                             placeholder="Password"
                                               name='password'
                                        id='password'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      
                                         />
                                         {errors.email && touched.password ? (
                                    <p className='form-error text-danger'>{errors.password}</p>
                                ) : null}
                                           
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox small">
                                            <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                            <label className="custom-control-label" for="customCheck">Remember
                                                Me</label>
                                        </div>
                                    </div>
                                  
                                    <input type='submit' className="btn btn-primary btn-user btn-block" value="Login"/>
                                   
                                    <hr/>
                                    <a href="index.html" className="btn btn-google btn-user btn-block">
                                        <i className="fab fa-google fa-fw"></i> Login with Google
                                    </a>
                                    <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                        <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                    </a>
                                </form>
                                <hr/>
                                <div className="text-center">
                                    <Link className="small" to="/Forgot-Password">Forgot Password?</Link>
                                </div>
                                <div className="text-center">
                                    <Link className="small" to="/register">Create an Account!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>

  )
}
const checkoutSchema = yup.object().shape({
  email: yup.string().required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
})
const initialValues = {
  email: "",
  password: ""
}


export default Login
import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import './Signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Signup() {
  // const handleFormSubmit = (values, action) => {
  //   console.log(values,'form values')
  //   const PostData = async () => {
  //     try {
  //       const response = await axios.post(url, values)
  //         .then(function (response) {
  //           toast.success(response.data.message, { theme: "dark", position: "top-center" })
  //         })
  //         .catch(function (error) {
  //           console.log(error)
  //           toast.error(error.response.data.message,
  //             { theme: "dark", position: "top-center" })
  //         })
  //     } catch (error) {
  //       console.log(error)
  //     }

  //   }
  //   // PostData()
  //   action.restform()

  // }
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
    <>


      <div className='auth'>
        <div>
          <div className='container  nav justify-content-center mt-4'>
            <div className='rop'>

              <form onSubmit={handleSubmit}>
                <h4 className='size text-danger fomo'><img width={40} src="https://cdn.brandfetch.io/id4J58sqa_/w/400/h/400/theme/dark/icon.png?k=id64Mup7ac&t=1674733842492" alt="" />Welcome to book-my-show </h4>
                <p className='fomo'>Register your account</p>

                <div>
                  <label className="form-label">firstname</label>
                  <input type="text"
                    name='firstname'
                    id='firstname'
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    placeholder='Name' />
                </div>
                {errors.firstname && touched.firstname ? (
                  <p className='form-error'>{errors.firstname}</p>
                ) : null}
                <div>
                  <label className="form-label">surname</label>
                  <input type="text"
                    name='surname'
                    id='surname'
                    value={values.surname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    placeholder='Name' />
                </div>
                {errors.surname && touched.surname ? (
                  <p className='form-error'>{errors.surname}</p>
                ) : null}
                <div className="inputBx">
                  <label className="form-label">Email address</label>
                  <input type="text"
                    name='email'
                    id='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    placeholder='abc@gmail.com' />
                </div>
                {errors.email && touched.email ? (
                  <p className='form-error'>{errors.email}</p>
                ) : null}
                <div className="inputBx">
                  <label htmlFor="exampleInputPassword1"

                    className="form-label">Password</label>
                  <input
                    name='password'
                    id='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    type='password'
                    placeholder='password' />
                </div>
                {errors.password && touched.password ? (
                  <p className='form-error'>{errors.password}</p>
                ) : null}
                {/* <div className="inputBx">
                      <label htmlFor="exampleInputPassword1" className="form-label">Confirm your Password</label>
                      <input type="password" name='current-password' className="form-control" placeholder='characters' />
                    </div> */}
                <div className='mt-3 inputBx'>
                  <input type='submit' style={{ width: '30%' }} className="J btn btn-danger text-light rounded-pill shadow CoCo " value="Signup" />
                </div>
                {/* <div className='mt-3'>
                      <p> Create account with
                        <FontAwesomeIcon icon={faFacebook} className='m-2 sci' bounce style={{ color: "#74C0FC", }} />
                        <FontAwesomeIcon icon={faLinkedin} className='m-2 sci' bounce style={{ color: "#74C0FC", }} />
                        <FontAwesomeIcon icon={faGoogle} className='m-2 sci' bounce style={{ color: "#FFD43B", }} />
                      </p>

                    </div> */}

              </form>

            </div>
          </div>
        </div>
      </div>




    </>
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


export default Signup
import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import './Signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from "react-router-dom";


function Signin() {
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
                                navigateTo("/user/profile");
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
                                <p className='fomo'>Login your account</p>


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
                                <Link to="/Forgot-password">
                                
                                <p className='nav justify-content-end'>forgot password</p>
                                
                                </Link>
                                {/* <div className="inputBx">
                      <label htmlFor="exampleInputPassword1" className="form-label">Confirm your Password</label>
                      <input type="password" name='current-password' className="form-control" placeholder='characters' />
                    </div> */}
                                <div className='mt-3 inputBx'>
                                    <input type='submit' style={{ width: '30%' }} className="J btn btn-danger text-light rounded-pill shadow CoCo " value="Signin" />
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
    email: yup.string().required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
})
const initialValues = {
    email: "",
    password: ""
}




export default Signin
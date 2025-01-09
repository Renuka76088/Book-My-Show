import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useSearchParams } from 'react-router-dom'

function ChangePassword() {
    const [userId, setuserId] = useState()
    const [queryParameters] = useSearchParams()
    // check token valid or not
    const token = queryParameters.get("token")
    const [tokenStatus, setTokenStatus] = useState(true)

    const options = {
        method: 'GET',
        url: `http://localhost:8000/api/v1/auth/reset-password?token=${token}`,
        headers: {
            'content-type': 'application/json',

        }
    };

    
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: checkoutSchema,
            onSubmit: (values, action) => {
                values.userId = userId
                console.log(values);
                // console.log(process.env.BASEURL)
                const options = {
                    method: 'POST',
                    url: "http://localhost:8000/api/v1/auth/update-password",
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
        <div className="container">


            <div className="row justify-content-center">

                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">

                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-2">Change Your Password?</h1>
                                            <p className="mb-4">We get it, stuff happens. Just enter your email address below
                                                and we'll send you a link to reset your password!</p>
                                        </div>
                                        <form className="user" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input className="form-control form-control-user"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter Old Password..."

                                                    name='OldPassword'
                                                    id='OldPassword'
                                                    value={values.OldPassword}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}

                                                    type='password'
                                                />

                                                {errors.newPassword && touched.OldPassword ? (
                                                    <p className='form-error text-danger'>{errors.OldPassword}</p>
                                                ) : null}
                                                <input className="form-control form-control-user mt-3"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter New Password..."

                                                    name='newPassword'
                                                    id='newPassword'
                                                    value={values.newPassword}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    type='password'

                                                />
                                            </div>
                                            {errors.newPassword && touched.newPassword ? (
                                                <p className='form-error text-danger'>{errors.newPassword}</p>
                                            ) : null}

                                            <input type='submit' className="btn btn-primary btn-user btn-block" value="Change your password" />


                                        </form>
                                        <hr />
                                        <div className="text-center">

                                            <Link className="small" to="/register">Create an Account!</Link>
                                        </div>
                                        <div className="text-center">
                                            <Link className="small" to="/">Already have an account? Login!</Link>
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

    OldPassword: yup.string().required("Please Enter your Old Password..."),
    newPassword: yup.string().required("Please Enter your new Password..."),
   
})
const initialValues = {
   OldPassword: "",
    newPassword: "",
    
}

export default ChangePassword
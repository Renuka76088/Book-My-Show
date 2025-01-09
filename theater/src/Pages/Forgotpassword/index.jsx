import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
function ForgotPassword() {
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
        initialValues: initialValues,
        validationSchema: checkoutSchema,
        onSubmit: (values, action) => {
            console.log(values);
            // console.log(process.env.BASEURL)
            const options = {
                method: 'POST',
                url: "http://localhost:8000/api/v1/auth/forgot-password",
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
                                    <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                    <p className="mb-4">We get it, stuff happens. Just enter your email address below
                                        and we'll send you a link to reset your password!</p>
                                </div>
                                <form className="user" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-user"
                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                            placeholder="Enter Email Address..."
                                             
                                    name='email'
                                    
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    
                                    />
                            </div>
                            {errors.email && touched.email ? (
                                <p className='form-error text-danger'>{errors.email}</p>
                            ) : null}

                            <button className='btn btn-primary btn-user btn-block'>Send Link</button>
                                    
                                   
                                </form>
                                <hr/>
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
    email: yup.string().required("Please enter your email"),
    
    })
    const initialValues = {
    email: "",
    
    }
    
    
    
  

export default ForgotPassword
import React, {useEffect, useState} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import './Signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import {useSearchParams} from 'react-router-dom'


function Resetpassword() {
    const [userId,setuserId]=useState()
    const [queryParameters] = useSearchParams()
    // check token valid or not
    const token = queryParameters.get("token")
    const [tokenStatus,setTokenStatus] = useState(true)

    const options = {
        method: 'GET',
        url: `http://localhost:8000/api/v1/auth/reset-password?token=${token}`,
        headers: {
            'content-type': 'application/json',

        }
    };

    useEffect(() => {
        console.log("running useeffect")
        const checkToken = async () => {
            try {
                const response = await axios
                    .request(options)
                    .then(function (response) {
                        // console.log(response.data);
                        toast.success(response.data.message, { theme: "dark", position: "top-center" })
                        // router.push("/profile")
                        console.log(response.data, 'main response')
                        setTokenStatus(true)
                        setuserId(response.data.userId)
    
                    })
                    .catch(function (error) {
                        console.log(error);
                        toast.error(error.response.data.message, { theme: "dark", position: "top-center" })
                        setTokenStatus(false)
                    });
            } catch (error) {
                console.log(errors)
            }
        };
        checkToken()
      },[]);
   
   
    
    

    // update password
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: checkoutSchema,
            onSubmit: (values, action) => {
                values.userId=userId
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
        <>


            <div className='auth'>
                <div>
                    <div className='container  nav justify-content-center mt-4'>
                        {tokenStatus ? <div className='rop'>

                            <form onSubmit={handleSubmit}>
                                <h4 className='size text-danger fomo'><img width={40} src="https://cdn.brandfetch.io/id4J58sqa_/w/400/h/400/theme/dark/icon.png?k=id64Mup7ac&t=1674733842492" alt="" />Welcome to book-my-show </h4>
                                <p className='fomo'>Reset-password</p>


                               
                                <div className="inputBx">
                                    <label htmlFor="exampleInputPassword1"

                                        className="form-label">Enter new password</label>
                                    <input
                                        name='newPassword'
                                        id='newPassword'
                                        value={values.newPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="form-control"
                                        type='password'
                                        placeholder='password' />
                                </div>
                                {errors.newPassword && touched.newPassword ? (
                                    <p className='form-error'>{errors.newPassword}</p>
                                ) : null}
                                <div className="inputBx">
                                    <label htmlFor="exampleInputPassword1"

                                        className="form-label">Re-nter new password</label>
                                    <input
                                        name='confirmNewPassword'
                                        id='confirmNewPassword'
                                        value={values.confirmNewPassword}
                                        onChange={handleChange} 
                                        onBlur={handleBlur}
                                        className="form-control"
                                        type='password'
                                        placeholder='Confirm password'
                                       />
                                </div>
                                {errors.confirmNewPassword && touched.confirmNewPassword ? (
                                    <p className='form-error'>{errors.confirmNewPassword}</p>
                                ) : null}
                                
                              
                             
                                <div className='mt-3 inputBx'>
                                    <input type='submit' style={{ width: '50%' }} className="J btn btn-danger text-light rounded-pill shadow CoCo " value="Reset your password" />
                                </div>
                               

                            </form>

                        </div>: <div className='alert alert-danger'>Token not found</div>}
                    </div> 
                </div>
            </div>
 



        </>
    )
}
const checkoutSchema = yup.object().shape({
    
    newPassword: yup.string().required("Please enter your password"),
    confirmNewPassword:yup.string().required("Please enter your new password"),
    confirmNewPassword: yup.string().oneOf([yup.ref('newPassword')], 'Passwords must match')
})
const initialValues = {
    userId:"",
    newPassword: "",
    confirmNewPassword:""
}



export default Resetpassword
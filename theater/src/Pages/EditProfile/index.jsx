import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCamera, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'

function EditProfile() {
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
    <div className="container bootstrap snippets bootdey">
            <div className="row">
                <div className="profile-nav col-md-3">
                    <div className="panel">
                        <div className="user-heading round">
                            <a href="#">
                            <FontAwesomeIcon icon={faCamera} className='text-secondary' style={{height:'50px',width:'50px'}} />
                            </a>
                            <h1>Camila Smith</h1>
                            <p>deydey@theEmail.com</p>
                        </div>

                       
                    </div>
                </div>
                <div className="profile-info col-md-9">
                    <div className="panel">
                       
                    </div>
                    <div className="panel">
                     
                        <div className="panel-body bio-graph-info">
                            <h1>Edit Profile</h1>
                            <div className="row">
                                <form  className="user"  onSubmit={handleSubmit}>
                                <div className="bio-row">
                                    <label >Theater Name</label>
                                     <input class="form-control" type="text"
                                       name='TheaterName'
                                       id='TheaterName'
                                       value={values.TheaterName}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                     
                                       placeholder='Theater Name' />
                                        {errors.TheaterName && touched.TheaterName ? (
                                   <p className='form-error text-danger'>{errors.TheaterName}</p>
                               ) : null} 
                                </div>
                               
                                <div className="bio-row">
                                    <label>Pincode</label>
                                     <input class="form-control" type="text"
                                       name='Pincode'
                                       id='Pincode'
                                       value={values.Pincode}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                     
                                       placeholder='Pincode' />
                                        {errors.Pincode && touched.Pincode ? (
                                   <p className='form-error text-danger'>{errors.Pincode}</p>
                               ) : null} 
                                </div>
                                <div className="bio-row">
                                    <label>Contact Number</label>
                                     <input class="form-control" type="text" 
                                      name='ContactNumber'
                                      id='ContactNumber'
                                      value={values.ContactNumber}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    
                                      placeholder='Contact Number' />
                                       {errors.ContactNumber && touched.ContactNumber ? (
                                  <p className='form-error text-danger'>{errors.ContactNumber}</p>
                              ) : null} 
                                     
                                </div>
                                <div className="bio-row">
                                    <label >Location</label>
                                     <input class="form-control" type="text"
                                      name='Location'
                                      id='Location'
                                      value={values.Location}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    
                                      placeholder='Location' />
                                       {errors.Location && touched.Location ? (
                                  <p className='form-error text-danger'>{errors.Location}</p>
                              ) : null} 
                                </div>
                                <div className="bio-row">
                                    <label>Email</label>
                                     <input class="form-control" type="email" 
                                      name='Email'
                                      id='Location'
                                      value={values.Email}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    
                                      placeholder='abc@gmail.com' />
                                       {errors.Email && touched.Email ? (
                                  <p className='form-error text-danger'>{errors.Email}</p>
                              ) : null} 
                                </div>
                                <div className="bio-row">
                                    <label>Address</label>
                                     <textarea class="form-control" aria-label="With textarea"
                                      name='Address'
                                      id='Address'
                                      value={values.Address}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    
                                      placeholder='Address' />
                                       {errors.Address && touched.Address ? (
                                  <p className='form-error text-danger'>{errors.Address}</p>
                              ) : null}
                                </div>
                                <div className="bio-row">


                                <input type='submit' className="btn btn-primary btn-user btn-block" value="Update Profile"/>
                                  
                                
                                </div>
                               </form>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
  )
}
const checkoutSchema = yup.object().shape({
  TheaterName: yup.string().required("Please enter your TheaterName"),
  Address: yup.string().required("Please enter your Address"),
  Pincode: yup.string().required("Please enter your Pincode"),
  ContactNumber: yup.string().required("Please enter your ContactNumber"),
  Location: yup.string().required("Please enter your Location"),
  Email: yup.string().required("Please enter your email"),
  
})
const initialValues = {
    TheaterName: "",
    Address: "",
    Pincode: "",
    ContactNumber: "",
    Location: "",
    Email: ""
  
}

export default  EditProfile
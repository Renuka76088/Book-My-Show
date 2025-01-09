import React from 'react'
import './AddShows.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import profilepic from "/img/user-icon.png"

function AddShows() {
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
          url: "http://localhost:8000/api/v1/show/AddShows",
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
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("username", response.data.userData.firstname)
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
  const handleRadioButtons = e => formik.values.Agetype = e.target.value
  return (
    <div className="container bootstrap snippets bootdey">
      <div className="row">
        <div className="profile-nav col-md-3">
          <div className="panel">
            <div className="user-heading round">
              <a href="#">
              <label class="upload-box mt-4">
    <img src={profilepic} alt="image" />
    <input type="file" accept="image/*" class="sr-only" />
</label>
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
              <h1>ADD SHOW</h1>
              <div className="row">
                <form className="user" onSubmit={handleSubmit}>
                  <div className="bio-row">
                    <select
                      className='form-control'
                      name='Showtype'
                      id='Showtype'
                      value={values.Showtype}
                      onChange={handleChange}
                      onBlur={handleBlur}

                    >

                      <option value="">Choose Type</option>
                      <option value="Movie">Movie</option>
                      <option value="Play">Play</option>
                      <option value="Event">Event</option></select>

                    {errors.Showtype && touched.Showtype ? (
                      <p className='form-error text-danger'>{errors.Showtype}</p>
                    ) : null}
                  </div>

                  <div className="bio-row">
                    <label>Show Name</label>
                    <input class="form-control" type="text"
                      name='ShowName'
                      id='ShowName'
                      value={values.ShowName}
                      onChange={handleChange}
                      onBlur={handleBlur}

                      placeholder='ShowName' />
                    {errors.ShowName && touched.ShowName ? (
                      <p className='form-error text-danger'>{errors.ShowName}</p>
                    ) : null}
                  </div>
                  <div className="bio-row">
                    <label>Duration</label>
                    <input class="form-control" type="text"
                      name='Duration'
                      id='Duration'
                      value={values.Duration}
                      onChange={handleChange}
                      onBlur={handleBlur}

                      placeholder='Duration' />
                    {errors.Duration && touched.Duration ? (
                      <p className='form-error text-danger'>{errors.Duration}</p>
                    ) : null}

                  </div>
                  <div className="bio-row">
                    <label>Cast</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                      name='Cast'

                      value={values.Cast}
                      onChange={handleChange}
                      onBlur={handleBlur}

                      placeholder='Cast'></textarea>


                    {errors.Cast && touched.Cast ? (
                      <p className='form-error text-danger'>{errors.Cast}</p>
                    ) : null}
                  </div>
                  <div className="bio-row">
                    <label>Release Date</label>
                    <input class="form-control" type="date"
                      name='ReleaseDate'
                      id='ReleaseDate'
                      value={values.ReleaseDate}
                      onChange={handleChange}
                      onBlur={handleBlur}

                      placeholder='Release Date' />
                    {errors.ReleaseDate && touched.ReleaseDate ? (
                      <p className='form-error text-danger'>{errors.ReleaseDate}</p>
                    ) : null}
                  </div>
                  <div className="bio-row">
                    <label>Show Timing</label>
                    <textarea class="form-control" aria-label="With textarea"
                      name='ShowTiming'
                      id='ShowTiming'
                      value={values.ShowTiming}
                      onChange={handleChange}
                      onBlur={handleBlur}

                      placeholder='Show Timing' />
                    {errors.ShowTiming && touched.ShowTiming ? (
                      <p className='form-error text-danger'>{errors.ShowTiming}</p>
                    ) : null}
                  </div>
                  <div className="bio-row">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="Movietype" id="Movietype"


                        value={values.Movietype}
                        onChange={handleChange}
                        onBlur={handleBlur}

                      />
                      {errors.Movietype && touched.Movietype ? (
                        <p className='form-error text-danger'>{errors.Movietype}</p>
                      ) : null}
                      <label class="form-check-label" for="flexRadioDefault1">
                        2D
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="Movietype" id="Movietype"
                        value={values.Movietype}
                        onChange={handleChange}
                        onBlur={handleBlur}

                      />
                      {errors.Movietype && touched.Movietype ? (
                        <p className='form-error text-danger'>{errors.Movietype}</p>
                      ) : null}
                      <label class="form-check-label" for="flexRadioDefault2">
                        3D
                      </label>
                    </div>
                  </div>
                  <div className="bio-row">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="Agetype" id="0"


                        value={values.Agetype}
                        onChange={e => handleRadioButtons(e)}
                        onBlur={handleBlur}

                      />
                      {errors.Agetype && touched.Agetype ? (
                        <p className='form-error text-danger'>{errors.Agetype}</p>
                      ) : null}
                      <label class="form-check-label" for="flexRadioDefault1">
                        UA
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="Agetype" id="1"
                        value={values.Agetype}
                        onChange={e => handleRadioButtons(e)}
                        onBlur={handleBlur}

                      />
                      {errors.Agetype && touched.Agetype ? (
                        <p className='form-error text-danger'>{errors.Agetype}</p>
                      ) : null}
                      <label class="form-check-label" for="flexRadioDefault2">
                        A
                      </label>
                    </div>
                  </div>
                  <div className="bio-row">


                    {/* <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter Price Range
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#"><input type="checkbox" />Rs 0-200</a></li>
                        <li><a class="dropdown-item" href="#"><input type="checkbox" />Rs 201-300</a></li>
                        <li><a class="dropdown-item" href="#"><input type="checkbox" />Rs 301-400</a></li>

                      </ul>
                    </li> */}
                     <div class="dropdown">
  <button className="dropbtn mr-2 d-none d-lg-inline text-gray-600 small">movie available in languages 
                    </button>
  
  <div class="dropdown-content">
    <a href="#"><input type="checkbox" />Malyalam</a>
    <a href="#"><input type="checkbox" />Telgu</a>
    <a href="#"><input type="checkbox" />Hindi</a>
    <a href="#"><input type="checkbox" />English</a>
    <a href="#"><input type="checkbox" />Kannada</a>
    <a href="#"><input type="checkbox" />Arabic</a>
    <a href="#"><input type="checkbox" />Bengali</a>
    <a href="#"><input type="checkbox" />Spanish</a>
    <a href="#"><input type="checkbox" />Bhojpuri</a>
    <a href="#"><input type="checkbox" />Odia</a>
    
  </div>
</div>
                  </div>
                  <div className="bio-row">


                    <input type='submit' className="btn btn-primary btn-user btn-block" value="Update Profile" />


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
  Showtype: yup.string().required("Please enter your  Showtype "),
  ShowName: yup.string().required("Please enter your ShowName"),
  Duration: yup.string().required("Please enter your Duration"),
  Cast: yup.string().required("Please enter your Cast"),
  ReleaseDate: yup.string().required("Please enter your ReleaseDate"),
  ShowTiming: yup.string().required("Please enter your ShowTiming"),
  Movietype: yup.string().required("Please enter your Movietype"),
  Agetype: yup.string().required("Please enter your Agetype"),
  // Agetype: yup.boolean().required().oneOf([], 'Selecting the agetype field is required'),



})
const initialValues = {
  Showtype: "",
  ShowName: "",
  Duration: "",
  Cast: "",
  ReleaseDate: "",
  ShowTiming: "",
  Movietype: "",
  Agetype: ""

}

export default AddShows
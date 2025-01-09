import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGoogle, faApple, faFirstOrderAlt } from '@fortawesome/free-brands-svg-icons';

import './Pageheader.css'
import { faBagShopping, faBars, faBell, faEnvelope, faGear, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import axios from 'axios'
import { toast } from 'react-toastify'

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Link } from "react-router-dom";

function Pageheader() {
  const options = {
    method: 'POST',
    url: "http://localhost:8000/api/v1/auth/logout",
    headers: {
      'content-type': 'application/json',

    },
  };
  // const navigateTo = useNavigate();
  const logout = async () => {
    try {
      const response = await axios
        .request(options)
        .then(function (response) {
          // console.log(response.data);
          toast.success(response.data.message, { theme: "dark", position: "top-center" })
          console.log(response, 'main response')
          localStorage.removeItem("token")
          this.props.history.push("/signin");

        })
        .catch(function (error) {
          console.log(error);
          toast.error(error.response.data.message, { theme: "dark", position: "top-center" })

        });
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/"><img width={130} src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" alt="" /></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="#"><input type="text" placeholder='Search for Movies, Events, Plays, Sports, and Activities' style={{ width: '600px' }} /></Link>
                  </li>


                </ul>

              </div>

            </nav>
          </div>
          <div className="col-md-4 nav justify-content-end">
          
            <div className="d-flex py-4">
              <label className="nav-item dropdown ">


                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                  Bengaluru
                </button>

                <div>
                  <div className="modal fade p-5  " id="exampleModal1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                    <div className="modal-dialog modal-xl"  >
                      <div className="modal-content hup" style={{ height: '400px' }}>

                        <div className="modal-body ">
                          <input type='text' placeholder='Search for your city' className='search' />
                          <div className='d-inline-flex mt-4'><FontAwesomeIcon icon={faLocationCrosshairs} className='text-danger d-inline-flex mt-1' /><p className='text-danger ms-3'>Detect my location</p></div>
                          <hr />
                          <p className='nav justify-content-center '>Popular Cities</p>


                          <div className='container joi' >
                            <div className='row'>
                              <div className='col-md-6   col-lg-1 ms-3'>

                                <img className='d-inline-flex' src="https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png" alt="" />
                                <p>Mumbai</p>

                              </div>
                              <div className='col-md-6    col-lg-1 ms-3'>

                                <img className='d-inline-flex' src="https://in.bmscdn.com/m6/images/common-modules/regions/ncr-selected.png" alt="" />
                                <p>DelhiNCR</p>
                              </div>
                              <div className='col-md-6   col-lg-1 ms-3'>

                                <img className='d-inline-flex' src="https://in.bmscdn.com/m6/images/common-modules/regions/bang-selected.png" alt="" />
                                <p>Bengaluru</p>
                              </div>
                              <div className='col-md-6   col-lg-1 ms-3'>

                                <img className='d-inline-flex' src="https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png" alt="" />
                                <p>Hydrabad</p>
                              </div>
                              <div className='col-md-6 col-lg-1 ms-3'>

                                <img className='d-inline-flex' src="https://in.bmscdn.com/m6/images/common-modules/regions/chd.png" alt="" />
                                <p>Chandigarh</p>
                              </div>
                              <div className='col-md-6   col-lg-1 ms-3'>

                                <img className='d-inline-flex' src="https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png" alt="" />
                                <p>Ahmedabad</p>
                              </div>
                              <div className='col-md-6   col-lg-1 ms-3'>

                                <img className='d-inline-flex' src="https://in.bmscdn.com/m6/images/common-modules/regions/chen.png" alt="" />
                                <p className='ms-3'>Chennai</p>
                              </div>
                              <div className='col-md-6   col-lg-1 ms-3'>

                                <img className='d-inline-flex' src="https://in.bmscdn.com/m6/images/common-modules/regions/pune.png" alt="" />
                                <p className='ms-3'>Pune</p>
                              </div>
                              <div className='col-md-6    col-lg-1  ms-3'>

                                <img className='d-inline-flex ' src="https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png" alt="" />
                                <p className='ms-3'>Kolkata</p>
                              </div>
                              <div className='col-md-6   col-lg-1 ms-3'>

                                <img className='d-inline-flex ' src="https://in.bmscdn.com/m6/images/common-modules/regions/koch.png" alt="" />
                                <p className='ms-3'>Kochi</p>
                              </div>
                              <div className='text-danger nav justify-content-center mt-4 ms-2'>
                                <p>View all Cities</p>

                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </label>
              <label className="nav-item">


                {localStorage.getItem("token") ?
                  <></> :
                  <button type="button" className="btn btn-danger text-light ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Sign up
                  </button>
                }
                <div width={300}>
                  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header ">
                          <h5 className="p-5 ms-4 nav justify-content-center "></h5>
                          <h5 className="modal-title ms-5" id="exampleModalLabel">Get Started</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body nav justify-content-center ">
                          <button className='buoi mb-3  '> <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png " width={20} alt="" /> Continue with Google</button>
                          <Link to="/Signup">
                            <button className='buoi mb-3'>  <FontAwesomeIcon icon={faEnvelope} /> Continue with Email</button>
                          </Link>
                          <button className='buoi mb-3'> <FontAwesomeIcon icon={faApple} /> Continue with Apple</button>
                          <button className='buoi1 mb-3'> OR</button>
                          <div className='p-2 mb-5 '>
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png" style={{ height: '20px', width: '20px' }} alt="" /><p className='d-inline-flex'>+91</p><input type='text' className='bor' placeholder='Continue with mobile number' style={{ height: '30px', width: '250px' }} />
                          </div>

                        </div>
                        <div className="modal-footer nav justify-content-center">
                          <p>I agree to the Terms & Conditions & Privacy Policy</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



              </label>
              <button className="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <FontAwesomeIcon icon={faBars} className='ms-3' size='xl' /></button>

              <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                  {/* <h4 className='fomo' id="offcanvasRightLabel">Hey!</h4> */}
                  <h4 className='fomo' id="offcanvasRightLabel">Hello,Renuka..</h4>

                </div>

                <div className="offcanvas-body ">
                  <div className='klh'>
                    <img width={40} className='d-inline-flex' src="https://in.bmscdn.com/webin/movies/superstar/rewards_login.png" alt="" />
                    <p className='d-inline-flex ms-3'>Unlock special offers <br /> & great benefits</p>
                    {localStorage.getItem("token") ?
                      <button className='btn btn-danger' onClick={logout} style={{ height: '40px', width: '130px' }}>Logout</button> :

                      <Link to="/Signin">
                        <button className='btn btn-danger' style={{ height: '40px', width: '130px' }}>Login/Register</button>

                      </Link>
                    }


                  </div>
                  <FontAwesomeIcon icon={faBell} className='mt-2 d-inline-flex' /><p className='d-inline-flex ms-5'>Notification</p>
                  <hr />
                  <img width={20} src="https://assets-in.bmscdn.com/members/common/icons/purchasehistory.png" alt="" /><p className='d-inline-flex ms-5 text-secondary'>Your orders</p>
                  <p className='text-secondary'>View all your bookings & purchases</p><hr />
                  <img className='d-inline-flex' src="https://img.icons8.com/?size=100&id=106502&format=png" width={20} alt="" /><p className='d-inline-flex ms-4 text-secondary'>Stream Library</p>
                  <p className='mb-4 text-secondary'>Rented & Purchased Movies</p><hr />
                  <img width={20} src="https://assets-in.bmscdn.com/members/common/icons/playcreditcard.png" alt="" /><p className='d-inline-flex ms-4 '>Play Credit Card</p> <p className='mb-4 '>View your play Credit card  details and offers</p><hr />

                  <img width={20} src="https://assets-in.bmscdn.com/members/common/icons/helpandsupport.png" alt="" /><p className='d-inline-flex ms-4 '>Help & Support</p> <p className='mb-4 '>View commonly asked queries and chat</p><hr />

                  <FontAwesomeIcon icon={faGear} /><p className='d-inline-flex ms-4 '>Accounts & Settings</p> <p className='mb-4 '>Location,Payments,Permissions & More</p><hr />
                  <img width={20} src="https://assets-in.bmscdn.com/members/common/icons/rewards_1.png" alt="" /><p className='d-inline-flex ms-4 '>Rewards</p> <p className='mb-4 '>View your rewards & unlock new ones</p><hr />

                  <img width={20} src="https://assets-in.bmscdn.com/members/common/icons/bookachange.png" alt="" /><p className='d-inline-flex ms-4 '>BookAChange</p><hr />


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className='coi clop'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <Link to="/Movies" className='text-dark'>

                <p className='d-inline-flex'>Movies</p>
              </Link>
              <Link to="/Stream" className='text-dark'>

                <p className='d-inline-flex ms-3'>Stream</p>
              </Link>
              <Link to="/Events" className='text-dark'>

                <p className='d-inline-flex ms-3 '>Events</p>
              </Link>
              <Link to="/Plays" className='text-dark'>

                <p className='d-inline-flex ms-3'>Plays</p>
              </Link>
              <Link to="/Sports" className='text-dark'>
                <p className='d-inline-flex ms-3'>Sports</p>

              </Link>
              <Link to="/Activities" className='text-dark'>
                <p className='d-inline-flex ms-3'>Activities</p>

              </Link>
            </div>
            <div className='col-md-6 nav justify-content-end'>
              <Link to="/Listyourshow" className='text-dark'>

                <p className='d-inline-flex ms-3'>ListYourShow</p>
              </Link>
              <Link to="/Corporates" className='text-dark'>

                <p className='d-inline-flex ms-3'>Corporates</p>
              </Link>
              <Link to="/Offers" className='text-dark'>
                <p className='d-inline-flex ms-3'>Offers</p>

              </Link>
              <Link to="/Giftcards" className='text-dark'>

                <p className='d-inline-flex ms-3'>Gift Cards</p>
              </Link>
            </div>
          </div>
        </div>

      </div>

      <div className='container flop'>
        <Swiper


          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation

        >









          <SwiperSlide> <img width={60} src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/icd-movies-collection-202201201113.png' />

          </SwiperSlide>
          <SwiperSlide>  <img width={60} src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/hsbc-top-nav-icon-collection-202408011243.png' />

          </SwiperSlide>
          <SwiperSlide>  <img width={60} src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/icd-music-shows-collection-202201201113.png' />

          </SwiperSlide>
          <SwiperSlide>  <img width={60} src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/icd-comedy-shows-collection-202201201113.png' />

          </SwiperSlide>
          <SwiperSlide>  <img width={60} src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/icd-sports-collection-202201201113.png' />

          </SwiperSlide>
          <SwiperSlide>   <img width={60} src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/icd-adventure-collection-202201201113.png' />

          </SwiperSlide>
          <SwiperSlide> <img width={60} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/icd-see-all-collection-202201201113.png" />

          </SwiperSlide>








        </Swiper>

      </div>




    </>
  )
}

export default Pageheader
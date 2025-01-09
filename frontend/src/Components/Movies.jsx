import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar'
import './Movies.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import dummyimage from '/no-image available.jpg'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function Movies() {
  const [shows, setShows] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get('id')
  const url = `http://localhost:8000/api/v1/show/getShows`


  const getData = async () => {
    try {
      const response = await axios.get(url)
        // .then(function (response) {
        //   // console.log(response.data);
        //   setShows(response.data)
        //   console.log(shows)
        // })
        .then((response) => {
          console.log(response.data.data);
          return response;
        })
        .then((response) => {
          setShows(response.data.data, () => {
            console.log('data in state', response.data)
          });
          return response;
        })
        .catch(function (error) {
          console.error(error.response.data.message, 'promise catch error');

        });
    } catch (error) {
      console.log(error, 'catch error')
    }
  };
  useEffect(() => {
    getData()
  }, []);
  return (
    <>
      <div className='coi'>
        <div className='container-fluid'>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1728368306770_8thoctstreamitendswithusweb.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1728042216114_webmuktaneww.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-3 kop'>
              <Sidebar />
            </div>
            <div className='col-md-9 '>
              <div>

                <h3 className='fomo mt-5'>Movies in Bengaluru</h3>
                <p className='pmy mt-4 text-danger  d-inline-flex'>English</p>
                <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Telugu</p>
                <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Hindi</p>
                <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Kannada</p>
                <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Tamil</p>
                <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Malayalam</p>
                <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Bengali</p>
                <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>English 7D</p>
                <p className='pmy1 mt-4 text-danger ms-2 d-inline-flex'>Multi Language</p>
                <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Assamese</p>

                <p className='pmy  text-danger  d-inline-flex'>Odia</p>
              </div>
              <div className='gop'>

                <div className=' nav justify-content-center mt-5'>
                  <h3 className='fomo'>Movies in Bengaluru</h3>
                </div>
              </div>
              <div className='gop'>


                <Swiper
                  className=' mt-3'
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={30}
                  slidesPerView={8}
                  navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >










                  {/* <div className='col-md-12'>
  
     <SwiperSlide><p className='pmy mt-4 text-danger  d-inline-flex'>English</p></SwiperSlide>
    <SwiperSlide> <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Telugu</p></SwiperSlide>
    <SwiperSlide> <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Hindi</p></SwiperSlide>
     <SwiperSlide><p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Kannada</p></SwiperSlide>
    <SwiperSlide> <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Tamil</p></SwiperSlide>
    <SwiperSlide> <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Malayalam</p></SwiperSlide>
    <SwiperSlide> <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Bengali</p></SwiperSlide>
    <SwiperSlide> <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>English 7D</p></SwiperSlide>
    <SwiperSlide> <p className='pmy1 mt-4 text-danger ms-2 d-inline-flex'>Multi Language</p></SwiperSlide>
    <SwiperSlide> <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Assamese</p></SwiperSlide>
  
     <SwiperSlide><p className='pmy   text-danger  d-inline-flex'>Odia</p></SwiperSlide>
</div> */}







                </Swiper>
              </div>


              <div className='container mt-5'>
                <div className='row'>
                  <div className='col-md-9'>
                    <h4 className='fomo '>Coming Soon</h4>
                  </div>
                  <div className='col-md-3'>
                    <p className='text-danger'>Explore Upcoming Movies</p>
                  </div>
                </div>
              </div>

              <div className='container mt-5 '>
                <div className='row'>
                  {shows.map((show) => {
                    return (
                    <Link to={`/MovieDetails/?id=${show._id}`}>
                      <div className='col-md-3'>
                         {show.Showimage!==""?<img style={{width:'200px'}} src={show.Showimage}/>:<img style={{width:'200px'}} src={dummyimage}/>}
                       
                        <h5 className='mt-3 fomo'>{show?.ShowName}</h5>
                        <p>{show.Agetype}</p>
                        <p>{show.languages}</p>
                      </div>
                        </Link>
                    )

                  })
                  }



                </div>
              </div>


            </div>
            <div className='gop'>

              <div className=' nav justify-content-center mt-5'>
                <h3 className='fomo'>Movies in Bengaluru</h3>
              </div>
            </div>
            <div className='gop'>




















            </div>





          </div>

        </div>
      </div>

    </>
  )
}

export default Movies
import React from 'react'
import './Listyourshow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


function Listyourshow() {
  return (
  <>

<Swiper
      
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={2}
      navigation
     
    >
  
    
    
     
    
   
     
    
    
       <SwiperSlide> <div className='list' >
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 text-light d-block '>
       <h2 className='fomo mt-3'>Introducing an event management tool</h2>
       <p className=''>Experience the ease of event creation and publishing</p>
       <p>Know More</p>
       <button className='btn btn-light text-danger'>Contact us Today</button>
        </div>
        <div className='col-md-6'>
        <img  style={{height:'300px',width:'270px'}} src="https://assets-in.bmscdn.com/static/2021/06/des-lap-sli-six.png" alt="" />
        </div>

      </div>

    </div>

  </div>
         </SwiperSlide>
       <SwiperSlide>  <div className='list1' >
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 text-light d-block '>
       <h2 className='fomo mt-3'>Ticket scanning made easy</h2>
       <p className=''>Experience the ease of managing entry at an event</p>
       <p>Know More</p>
       <button className='btn btn-light text-danger'>Contact us Today</button>
        </div>
        <div className='col-md-6'>
        <img  style={{height:'300px',width:'270px'}} src="https://assets-in.bmscdn.com/static/2021/06/des-sli-fiv.jpeg" alt="" />
        </div>

      </div>

    </div>

  </div>
         </SwiperSlide>
       <SwiperSlide>   <div className='list2' >
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 text-light d-block '>
       <h2 className='fomo'>Take advantage of our M-ticket feature</h2>
       <p className=''>Lets your audience skip the box office queue and head straight to the gate.</p>
       <p>Know More</p>
       <button className='btn btn-light text-danger'>Contact us Today</button>
        </div>
        <div className='col-md-6'>
        <img  style={{height:'300px',width:'270px'}} src="https://assets-in.bmscdn.com/static/2021/06/des-sli-f.jpeg" alt="" />
        </div>

      </div>

    </div>

  </div>
           </SwiperSlide>
       <SwiperSlide>  <div className='list3' >
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 text-light d-block '>
       <h2 className='fomo'>Empower the artist within you</h2>
       <p className=''>List your own performances, gigs and more with BookMyShow</p>
       <p>Know More</p>
       <button className='btn btn-light text-danger'>Contact us Today</button>
        </div>
        <div className='col-md-6'>
        <img  style={{height:'300px',width:'270px'}} src="https://assets-in.bmscdn.com/static/2021/06/sli-o.jpeg" alt="" />
        </div>

      </div>

    </div>

  </div>
         </SwiperSlide>
       <SwiperSlide>   <div className='list4' >
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 text-light d-block '>
       <h2 className='fomo'>Conduct workshops and much more</h2>
       <p className=''>Share your skills with people around the world-from home!</p>
       <p>Know More</p>
       <button className='btn btn-light text-danger'>Contact us Today</button>
        </div>
        <div className='col-md-6'>
        <img  style={{height:'300px',width:'270px'}} src="https://assets-in.bmscdn.com/static/2021/06/des-sli-th.jpeg" alt="" />
        </div>

      </div>

    </div>

  </div>
        </SwiperSlide>
     






    </Swiper>





 {/* <div className='w-60'>



  <div id="carouselExampleControls" className="carousel slide"  data-bs-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active" >
    <div className='list' >
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 text-light d-block '>
       <h2 className='fomo'>Introducing an event management tool</h2>
       <p className=''>Experience the ease of event creation and publishing</p>
       <p>Know More</p>
       <button className='btn btn-light text-danger'>Contact us Today</button>
        </div>
        <div className='col-md-6'>
        <img  style={{height:'300px',width:'250px'}} src="https://assets-in.bmscdn.com/static/2021/06/des-lap-sli-six.png" alt="" />
        </div>

      </div>

    </div>

  </div>

    </div>
    <div className="carousel-item ">
    <div className='list  d-block w-500'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 text-light'>
       <h2 className='fomo'>Introducing an event management tool</h2>
       <p className=''>Experience the ease of event creation and publishing</p>
       <p>Know More</p>
       <button className='btn btn-light text-danger'>Contact us Today</button>
        </div>
        <div className='col-md-6'>
        <img  style={{height:'300px',width:'250px'}} src="https://assets-in.bmscdn.com/static/2021/06/des-lap-sli-six.png" alt="" />
        </div>

      </div>

    </div>

  </div>

    </div>
    <div className="carousel-item  d-block w-500">
    <div className='list'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 text-light'>
       <h2 className='fomo'>Introducing an event management tool</h2>
       <p className=''>Experience the ease of event creation and publishing</p>
       <p>Know More</p>
       <button className='btn btn-light text-danger'>Contact us Today</button>
        </div>
        <div className='col-md-6'>
        <img  style={{height:'300px',width:'250px'}} src="https://assets-in.bmscdn.com/static/2021/06/des-lap-sli-six.png" alt="" />
        </div>

      </div>

    </div>

  </div>

    </div>
    <div className="carousel-item">
    <div className='list'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 text-light'>
       <h2 className='fomo'>Introducing an event management tool</h2>
       <p className=''>Experience the ease of event creation and publishing</p>
       <p>Know More</p>
       <button className='btn btn-light text-danger'>Contact us Today</button>
        </div>
        <div className='col-md-6'>
        <img  style={{height:'300px',width:'250px'}} src="https://assets-in.bmscdn.com/static/2021/06/des-lap-sli-six.png" alt="" />
        </div>

      </div>

    </div>

  </div>

    </div>
    <div className="carousel-item">
    <div className='list'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 text-light'>
       <h2 className='fomo'>Introducing an event management tool</h2>
       <p className=''>Experience the ease of event creation and publishing</p>
       <p>Know More</p>
       <button className='btn btn-light text-danger'>Contact us Today</button>
        </div>
        <div className='col-md-6'>
        <img  style={{height:'300px',width:'250px'}} src="https://assets-in.bmscdn.com/static/2021/06/des-lap-sli-six.png" alt="" />
        </div>

      </div>

    </div>

  </div>

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
   */}


   <div className='container nav justify-content-center '>
    <h1 className='fomo mt-5 p-4'>
    What can you host?
    </h1>
    <h5>As the purveyor of entertainment, BookMyShow enables your event with end to end solutions from the time you register to the completion of the  event. Lets`s look at what you can host.</h5>
   </div>

   <div className='container p-5'>
    <div className='row'>
      <div className='col-md-4 '><p className='shou mt-5'>
        <div>

        <img width={100} className='ms-4' src="https://assets-in.bmscdn.com/static/2021/06/perf.png" alt="" />
        <div>
          
      <h4 className='fomo mt-3'>Performances</h4>
        </div>
        <div>
          <img  src="https://assets-in.bmscdn.com/static/2021/06/info.png" className='ms-5 mt-2' alt="" />
        </div>
        </div>
      </p></div>
      <div className='col-md-4'><p className='shou mt-5'>
      <div>

<img width={100} className='ms-4' src="https://assets-in.bmscdn.com/static/2021/06/experiencess.png" alt="" />
<div>
  
<h4 className='fomo mt-3'>Experiences</h4>
</div>
<div>
  <img  src="https://assets-in.bmscdn.com/static/2021/06/info.png" className='ms-5 mt-2' alt="" />
</div>
</div>
      </p></div>
      <div className='col-md-4'><p className='shou mt-5'>
      <div>

<img width={100} className='ms-4' src="https://assets-in.bmscdn.com/static/2021/06/expositionss.png" alt="" />
<div>
  
<h4 className='fomo mt-3'>Expositions</h4>
</div>
<div>
  <img  src="https://assets-in.bmscdn.com/static/2021/06/info.png" className='ms-5 mt-2' alt="" />
</div>
</div>
      </p></div>
      <div className='col-md-4'><p className='shou mt-5'>
      <div>

<img width={100} className='ms-4' src="https://assets-in.bmscdn.com/static/2021/06/partiess.png" alt="" />
<div>
  
<h4 className='fomo mt-3'>Parties</h4>
</div>
<div>
  <img  src="https://assets-in.bmscdn.com/static/2021/06/info.png" className='ms-5 mt-2' alt="" />
</div>
</div>
      </p></div>
      <div className='col-md-4'><p className='shou mt-5'>
      <div>

<img width={100} className='ms-4' src="https://assets-in.bmscdn.com/static/2021/06/sport.png" alt="" />
<div>
  
<h4 className='fomo mt-3'>Sports</h4>
</div>
<div>
  <img  src="https://assets-in.bmscdn.com/static/2021/06/info.png" className='ms-5 mt-2' alt="" />
</div>
</div>
      </p></div>
      <div className='col-md-4'><p className='shou mt-5'>
      <div>

<img width={100} className='ms-4' src="https://assets-in.bmscdn.com/static/2021/06/conferencess.png" alt="" />
<div>
  
<h4 className='fomo mt-3'>Conferences</h4>
</div>
<div>
  <img  src="https://assets-in.bmscdn.com/static/2021/06/info.png" className='ms-5 mt-2' alt="" />
</div>
</div>
      </p></div>
    </div>

   </div>

   <div className='container nav justify-content-center p-5'>
    <button className='btn btn-danger text-light ' style={{height:'50px',width:'300px'}}>List Your show</button>
   </div>

   <div className='container nav justify-content-center '>
    <h1 className='fomo mt-5 p-4'>
    What are the services we offer?
    </h1>
    <h5>After successful collaborations with the best event oraganisers over the past decade and a half, we`re well equipped to bring your vision to life.</h5>
   </div>

   <div className='container p-5'>
    <div className='row'>
      <div className='col-md-4 '><p className='shou1 mt-5'>
        <div className='ms-5'>

        <img width={100} className='ms-5' src="https://assets-in.bmscdn.com/static/2021/06/online-saless.png" alt="" />
        <div>
          
      <h4 className='fomo mt-3 ms-4'>Online Sales & Marketing</h4>
        </div>
        <div className='ms-5'>
          <img  src="https://assets-in.bmscdn.com/static/2021/06/info.png" className='ms-5 mt-2' alt="" />
        </div>
        </div>
      </p></div>
      <div className='col-md-4'><p className='shou1 mt-5'>
      <div className=''>

<img width={100} className='ms-4' src="https://assets-in.bmscdn.com/static/2021/06/pricings.png" alt="" />
<div>
  
<h4 className='fomo mt-3 ms-4'>Pricing</h4>
</div>
<div>
  <img  src="https://assets-in.bmscdn.com/static/2021/06/info.png" className='ms-5 mt-2' alt="" />
</div>
</div>
      </p></div>
      <div className='col-md-4'><p className='shou1 mt-5'>
      <div className='ms-5'>

<img width={100} className='ms-5' src="https://assets-in.bmscdn.com/static/2021/06/food.png" alt="" />
<div>
  
<h4 className='fomo mt-3'>Food & beverages, stalls and the works!</h4>
</div>
<div className='ms-5'>
  <img  src="https://assets-in.bmscdn.com/static/2021/06/info.png" className='ms-5 mt-2' alt="" />
</div>
</div>
      </p></div>
      <div className='col-md-4'><p className='shou1 mt-3'>
      <div className='ms-5'>

<img width={100} className='ms-5' src="https://assets-in.bmscdn.com/static/2021/06/on-ground-support.png" alt="" />
<div>
  
<h4 className='fomo mt-3'>On ground support & gate entry management</h4>
</div>
<div className='ms-5'>
  <img  src="https://assets-in.bmscdn.com/static/2021/06/info.png" className='ms-5 mt-2' alt="" />
</div>
</div>
      </p></div>
      <div className='col-md-4'><p className='shou1 mt-3'>
      <div className='ms-5'>

<img width={100} className='ms-4' src="https://assets-in.bmscdn.com/static/2021/06/report.png" alt="" />
<div>
  
<h4 className='fomo mt-3'>Reports & business insights</h4>
</div>
<div className='ms-5'>
  <img  src="https://assets-in.bmscdn.com/static/2021/06/info.png" className='ms-5 mt-2' alt="" />
</div>
</div>
      </p></div>
      <div className='col-md-4'><p className='shou1 mt-3  nav justify-content-center'>
      <div className='ms-5'>

<img width={100} className='ms-5' src="https://assets-in.bmscdn.com/static/2021/06/rfids.png" alt="" />
<div className=''>
  
<h4 className='fomo mt-3 '>POS,RFID,Turnstiles & more...</h4>
</div>
<div className='ms-5'>
  <img  src="https://assets-in.bmscdn.com/static/2021/06/info.png" className='ms-5 mt-2' alt="" />
</div>
</div>
      </p></div>
    </div>

   </div>
   <div className='container'>
<h4>Apart from these must have us for any event, we also support a host of other services like SEO for your event, custom pricing for yyour tickets and this and also this</h4>
   </div>

   <div className='container nav justify-content-center p-5'>
    <button className='btn btn-danger text-light ' style={{height:'50px',width:'300px'}}>List Your show</button>
   </div>

   <div className='container'>
    <div className='row'>
      <div className='col-md-7'>
        <img className='d-inline-flex' src="https://assets-in.bmscdn.com/static/2021/06/double-quotess.png" alt="" /><p className='polo d-inline-flex '>The NCPA shares a cherished 13 year bond with BMS, its online ticketing partner that has helped art lovers book their seats for their favourite shows in a seamless manner. The presence of a team from Bookmyshow in the NCPA premises on the day of the event further ensures the smooth-functioning of ticket-related formalities."</p>
        <h3>NCPA-National Centre for the</h3>
        <h3>Performing Arts.</h3>
      </div>
      <div className='col-md-5'>
        <img src="https://assets-in.bmscdn.com/static/2021/06/ncpas.jpeg" className='mb-5' width={400} alt="" />
      </div>

    </div>

   </div>



   <div className='container nav justify-content-center p-5  '>
    <div className='Pojo'>
    
    <h1 className='fomo'>Sit back and watch your  event come to life</h1>
    <p className='polo'>Events maybe all fun and games, but we take it seriously. We ensure our <br /> customers security  so that so that you dont have to  </p>
   </div>
   </div>
   

  </>
  )
}

export default Listyourshow
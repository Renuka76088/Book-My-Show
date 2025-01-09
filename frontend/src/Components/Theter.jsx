import React from 'react'
import './Theter.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Link } from 'react-router-dom';
import { faCircle, faCircleInfo, faHamburger, faHeart, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

function Theter() {
  return (
    <>
    <div className='p-5'>
        <h1>UI(2024)-Kannadda</h1>
        <p className='omy mt-4 text-dark ms-4 d-inline-flex'>UA</p>
        <p className='pmy mt-4 text-dark ms-4 d-inline-flex'>ACTION</p>
        <p className='pmy mt-4 text-dark ms-4 d-inline-flex'>SCI-FI</p>
        <p className='pmy mt-4 text-dark ms-4 d-inline-flex'>THRILLER</p>
    <hr />
    </div>
    {/* <div className='d-inline-flex'>
    <p className='ms-4'><h6>Mon</h6><h6>24</h6><h6>Dec</h6></p>
    <p className='ms-5'><h6>Mon</h6><h6>24</h6><h6>Dec</h6></p>
    <p className='ms-5'><h6>Mon</h6><h6>24</h6><h6>Dec</h6></p>
   <div className='float-end'> */}

   {/* <div className='float-end'><h6>Kannada-2D</h6></div> */}
   {/* </div> */}
{/* </div> */}

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#"> <label className='d-inline-flex'> */}
    {/* <p className='ms-4'><h6>Mon</h6><h6>24</h6><h6>Dec</h6></p>
    <p className='ms-5'><h6>Mon</h6><h6>24</h6><h6>Dec</h6></p>
    <p className='ms-5'><h6>Mon</h6><h6>24</h6><h6>Dec</h6></p> */}
    <Swiper
    
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={2}
    slidesPerView={3}
    navigation
    // pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
    >
    
    
    
    
    
    
    
    
    
    
    
    <a class="navbar-brand" href="#"> <label className='d-inline-flex'>
         <SwiperSlide> <p className='ms-5 lop'><h6>Mon</h6><h6>23</h6><h6>Dec</h6></p></SwiperSlide>
        <SwiperSlide> <p className=''><h6>Tue</h6><h6>24</h6><h6>Dec</h6></p></SwiperSlide>
        <SwiperSlide>  <p className=''><h6>Wed</h6><h6>25</h6><h6>Dec</h6></p></SwiperSlide>
        </label></a>
    
    
    
    
    
    
    
    </Swiper>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
      <label class="d-flex justify-content-end">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button> */}
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Kannada-2D
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Telugu-2D</a></li>
            <li><a class="dropdown-item" href="#">Kannada-2D</a></li>
            
           
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter Price Range
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#"><input type="checkbox" />Rs 0-200</a></li>
            <li><a class="dropdown-item" href="#"><input type="checkbox" />Rs 201-300</a></li>
            <li><a class="dropdown-item" href="#"><input type="checkbox" />Rs 301-400</a></li>
           
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter show timings
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#"><input type="checkbox" />Morning 12:00-11:59 AM</a></li>
            <li><a class="dropdown-item" href="#"><input type="checkbox" />Afternoon 12:00-3:59 PM</a></li>
            <li><a class="dropdown-item" href="#"><input type="checkbox" />Evening 4:00-6:59 PM</a></li>
            <li><a class="dropdown-item" href="#"><input type="checkbox" />Night 7:00-11:59 PM</a></li>
          
          </ul>
        </li>
     
      </ul>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button> 
      </label>
    </div>
  </div>
</nav>
<div>
<ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active text-dark" aria-current="page" href="#"><FontAwesomeIcon icon={faCircle} style={{color: "#25e445",}} />AVAILABLE</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-dark" href="#"><FontAwesomeIcon icon={faCircle} style={{color: "#e1390e",}} />Fast FILLING</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-dark" href="#"><p className='text-success d-inline-flex bp'>LAN</p>SUBTITLES LANGUAGE</a>
  </li>
  
</ul>
</div>
<hr />
<div>
<FontAwesomeIcon icon={faHeart} size='xl' style={{color: "#d56d77",}} className='d-inline-flex ms-4' /><h5 className='ms-4 d-inline-flex'>Prasads Multiplex: Hyderabad</h5>
<FontAwesomeIcon icon={faCircleInfo} className='d-inline-flex text-secondary ms-5' size='xl'/> <h5 className='text-secondary d-inline-flex ms-2'>INFO</h5>
<button type="button" style={{height:'60px',width:'150px'}} data-bs-toggle="modal" data-bs-target="#exampleModal7" className="btn btn-outline-success ms-5 mt-4" >08:30 PM</button>

<div className=''>

<div className="modal fade" id="exampleModal7" tabindex="" aria-labelledby="exampleModalLabel7" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content ">
      <div className="">
        <h4 className="modal-title ms-5 nav justify-content-center mt-4 " id="exampleModalLabel7">How Many Seats?</h4>
        {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
       
      </div>
      <div class="modal-body">
        <img width="400px" src="https://img.freepik.com/premium-vector/vintage-scooter-vector-illustration-cartoon-style_938798-604.jpg?w=740" alt="" />
        <h3 className='fle d-inline-flex ms-5'>1</h3>
        <h3 className='fleg d-inline-flex ms-5'>2</h3>
        <h3 className='fleg d-inline-flex ms-5'>3</h3>
        <h3 className='fleg d-inline-flex ms-5'>4</h3>
        <h3 className='fleg d-inline-flex ms-5'>5</h3>
        <h3 className='fleg d-inline-flex ms-5'>6</h3>

      </div>
     <div className='p-5'>
        <h4 className='nav justify-content-center'>EXECUTIVE</h4>
        <h5 className='nav justify-content-center'>Rs200</h5>
        <h5 className='text-success nav justify-content-center'>Available</h5>
        <Link to='/Seats'>
        
        <button className='btn btn-danger text-light nav justify-content-center mt-4' style={{height:'50px',width:'400px'}} >Select seats</button>
     
        </Link>
     </div>
    </div>
  </div>
</div>
</div>

<br />
<div className='mt-4'>

<FontAwesomeIcon icon={faMobileScreen} size='2xl' className='ms-4' style={{color: "#33d21e",}} /> <h5 className=' ms-4 text-success d-inline-flex'>M-Ticket</h5>
<FontAwesomeIcon icon={faHamburger} style={{color: "#ee7d20",}} className='ms-4' size='2xl' /> <h5 style={{color: "#ee7d20",}} className='d-inline-flex ms-3'>Food & baverages</h5>
<a className="nav-link text-dark d-inline-flex ms-5" ><FontAwesomeIcon icon={faCircle} style={{color: "#ee7d20",}} /> <h5 className='d-inline-flex ms-3 text-secondary'>Non-Cancellable</h5> </a>

</div>
<hr />
</div>
<div>
<FontAwesomeIcon icon={faHeart} size='xl' style={{color: "#d56d77",}} className='d-inline-flex ms-4' /><h5 className='ms-4 d-inline-flex'>AMB Cinemas: Gachibowli</h5>
<FontAwesomeIcon icon={faCircleInfo} className='d-inline-flex text-secondary ms-5' size='xl'/> <h5 className='text-secondary d-inline-flex ms-2'>INFO</h5>
<button type="button" style={{height:'60px',width:'150px'}} className="btn btn-outline-success ms-5 mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal7">04:10 PM <p className='text-dark'>
    BARCO FLAGSH..</p></button>

<br />
<div className='mt-4'>

<FontAwesomeIcon icon={faMobileScreen} size='2xl' className='ms-4' style={{color: "#33d21e",}} /> <h5 className=' ms-4 text-success d-inline-flex'>M-Ticket</h5>
<FontAwesomeIcon icon={faHamburger} style={{color: "#ee7d20",}} className='ms-4' size='2xl' /> <h5 style={{color: "#ee7d20",}} className='d-inline-flex ms-3'>Food & baverages</h5>
<a className="nav-link text-dark d-inline-flex ms-5" ><FontAwesomeIcon icon={faCircle} style={{color: "#ee7d20",}} /> <h5 className='d-inline-flex ms-3 text-secondary'>Non-Cancellable</h5> </a>

</div>
<hr />
</div>
<div>
<FontAwesomeIcon icon={faHeart} size='xl' style={{color: "#d56d77",}} className='d-inline-flex ms-4' /><h5 className='ms-4 d-inline-flex'>Cinepolis:Lulu Mall, Hydrabad</h5>
<FontAwesomeIcon icon={faCircleInfo} className='d-inline-flex text-secondary ms-5' size='xl'/> <h5 className='text-secondary d-inline-flex ms-2'>INFO</h5>
<button type="button" style={{height:'60px',width:'150px'}} className="btn btn-outline-success ms-5 mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal7" >11:20 PM <p className='text-dark'>DOLBY 7.1</p></button>

<br />
<div className='mt-4'>

<FontAwesomeIcon icon={faMobileScreen} size='2xl' className='ms-4' style={{color: "#33d21e",}} /> <h5 className=' ms-4 text-success d-inline-flex'>M-Ticket</h5>
<FontAwesomeIcon icon={faHamburger} style={{color: "#ee7d20",}} className='ms-4' size='2xl' /> <h5 style={{color: "#ee7d20",}} className='d-inline-flex ms-3'>Food & baverages</h5>
<a className="nav-link text-dark d-inline-flex ms-5" ><FontAwesomeIcon icon={faCircle} style={{color: "#ee7d20",}} /> <h5 className='d-inline-flex ms-3 text-secondary'>Non-Cancellable</h5> </a>

</div>
<hr />
</div>
<div>
<FontAwesomeIcon icon={faHeart} size='xl' style={{color: "#d56d77",}} className='d-inline-flex ms-4' /><h5 className='ms-4 d-inline-flex'>PVR: Irrum Manzil, Hydrabad </h5>
<FontAwesomeIcon icon={faCircleInfo} className='d-inline-flex text-secondary ms-5' size='xl'/> <h5 className='text-secondary d-inline-flex ms-2'>INFO</h5>
<button type="button" style={{height:'60px',width:'150px'}} className="btn btn-outline-success ms-5 mt-4"  data-bs-toggle="modal" data-bs-target="#exampleModal7">01:35 PM</button>
<button type="button" style={{height:'60px',width:'150px'}} className="btn btn-outline-success ms-5 mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal7" >04:45 PM</button>
<button type="button" style={{height:'60px',width:'150px'}} className="btn btn-outline-success ms-5 mt-4"  data-bs-toggle="modal" data-bs-target="#exampleModal7">08:05 PM</button>


<div className='mt-4'>

<FontAwesomeIcon icon={faMobileScreen} size='2xl' className='ms-4' style={{color: "#33d21e",}} /> <h5 className=' ms-4 text-success d-inline-flex'>M-Ticket</h5>
<FontAwesomeIcon icon={faHamburger} style={{color: "#ee7d20",}} className='ms-4' size='2xl' /> <h5 style={{color: "#ee7d20",}} className='d-inline-flex ms-3'>Food & baverages</h5>
<a className="nav-link text-dark d-inline-flex ms-5" ><FontAwesomeIcon icon={faCircle} style={{color: "#ee7d20",}} /> <h5 className='d-inline-flex ms-3 text-secondary'>Non-Cancellable</h5> </a>

</div>
<hr />
</div>
<div>
<FontAwesomeIcon icon={faHeart} size='xl' style={{color: "#d56d77",}} className='d-inline-flex ms-4' /><h5 className='ms-4 d-inline-flex'>PVR:Nexus Mall Kukatpally Hyderabad</h5>
<FontAwesomeIcon icon={faCircleInfo} className='d-inline-flex text-secondary ms-5' size='xl'/> <h5 className='text-secondary d-inline-flex ms-2'>INFO</h5>
<button type="button" style={{height:'60px',width:'150px'}} className="btn btn-outline-success ms-5 mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal7" >07:35 PM</button>


<div className='mt-4'>

<FontAwesomeIcon icon={faMobileScreen} size='2xl' className='ms-4' style={{color: "#33d21e",}} /> <h5 className=' ms-4 text-success d-inline-flex'>M-Ticket</h5>
<FontAwesomeIcon icon={faHamburger} style={{color: "#ee7d20",}} className='ms-4' size='2xl' /> <h5 style={{color: "#ee7d20",}} className='d-inline-flex ms-3'>Food & baverages</h5>
<a className="nav-link text-dark d-inline-flex ms-5" ><FontAwesomeIcon icon={faCircle} style={{color: "#ee7d20",}} /> <h5 className='d-inline-flex ms-3 text-secondary'>Non-Cancellable</h5> </a>

</div>
<hr />
</div>

    </>
  )
}

export default Theter
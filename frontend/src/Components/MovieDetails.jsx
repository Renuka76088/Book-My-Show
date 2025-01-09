import React from 'react'
import "./MovieDetails.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faGreaterThan, faPaperPlane, faShareNodes, faStar, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Link } from 'react-router-dom';

function MovieDetails() {
  return (
    <>
    <div className='Movies'>
    <div className='container l'>
        <div className='row'>
        <div className='col-md-4 '>
        <img  className='ity mt-5 ms-5' src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ui-2024-et00370266-1733467456.jpg" alt="" />
    
        </div>
        <div className='col-md-8'>
      
        <h1 className='text-light fomo mt-5'>UI(2024)</h1>
       <button className='mod mt-3' style={{height:'100px',width:'600px'}}>
         <h4 className='text-light fomo ms-4'><FontAwesomeIcon icon={faStar} size='lg' style={{color: "#c14469",}} />8.6/10 (15.1K Votes) <button className='btn btn-light text-dark ms-5'><h4>Rate now</h4></button></h4></button>
        <button className='btn btn-light text-dark mt-4'><h5 className=' fomo mt-3'>2D Kannad, Hindi, Telgu, Tamil, Malayalam</h5></button>
        <h5 className='text-light d-inline-flex fomo mt-3 '>2h 12m  <li className='text-light ms-3'>Actions, Sci-Fi, Thriller</li><li className=' text-light ms-3'>UA</li><li  className='text-light ms-3'>20Dec,2024</li></h5>
        <br />
       <button style={{height:'70px',width:'400px'}} type='button' data-bs-toggle="modal" data-bs-target="#exampleModal5" className='btn btn-danger mt-5 text-light'><h4>Book Tickets</h4></button>
      



<div class="modal fade mt-5" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel5" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel5">UI(2024)<h4 >Select Language and format</h4></h5>
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h4 className='text-secondary'>KANNADA</h4>
        <Link to='/Theter'>
        <p className='pmy mt-4 text-danger  d-inline-flex'>2D</p>
        </Link>
        <h4 className='text-secondary'>TELUGU</h4>
        <Link to='/Theter'>
        <p className='pmy mt-4 text-danger  d-inline-flex'>2D</p>
        </Link>
      </div>
    
    </div>
  </div>
</div>

        </div>

      </div>
      </div>
  
     
    </div>


<div className='container-fluid ms-3'>
  <div className='row'>
    <div className='col-md-9'>
    <div className='p-4 '>
      <h2 className='fomo '>About the movie</h2>
      <h4 className='mt-3 '>The world leaders gifted U & I with...Global warming, Inflation, COVID-19, Unemployment, AI and Wars. The World 2040.</h4>
    </div>
    <hr />
    <div className='mt-5 ms-4'>
      <h2 className='fomo'>Cast</h2>
    <Swiper
          
          className='mt-5'
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={100}
          slidesPerView={5}
          navigation
         
        >
      
        
        
         
        
       
         
        
        
           
           <SwiperSlide>  <img   className='cto'  width='170' src='https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/upendra-2420-24-03-2017-17-35-15.jpg' />
                          <h4 className='ms-5'>Upendra</h4>
                          <p className='ms-5'>Actor</p>
             </SwiperSlide>
           <SwiperSlide>  <img   className='cto' width='170'  src='https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/reeshma-nanaiah-2004571-1667300383.jpg'/>
           <h4 className='ms-5'>Reeshma Nanaiah</h4>
           <p className='ms-5'>Actor</p>
               </SwiperSlide>
           <SwiperSlide>  <img   className='cto'  width='170' src='https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/murli-sharma-1530-24-03-2017-18-02-07.jpg' />
           <h4 className='ms-5'>Murli Sharma</h4>
           <p className='ms-5'>Actor</p>
             </SwiperSlide>
           <SwiperSlide>  <img  className='cto' width='170'  src='https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/achyuth-kumar-19493-1679753090.jpg' />
           <h4 className='ms-5'>Achyuth Kumar</h4>
           <p className='ms-5'>Actor</p>
            </SwiperSlide>
           <SwiperSlide>   <img  className='cto' width='170'  src='https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/p.-ravi-shankar-1052108-24-03-2017-12-48-10.jpg' />
           <h4 className='ms-5'>P.Ravi Shankar</h4>
           <p className='ms-5'>Actor</p>
           </SwiperSlide>
           <SwiperSlide> <img   className='cto' width='170' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sadhu-kokila-3158-1721491768.jpg"/>
           <h4 className='ms-5'>Sadhu Kokila</h4>
           <p className='ms-5'>Actor</p>
           </SwiperSlide>
           <SwiperSlide>    <img   className='cto' width='170'  src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/nidhi-subbaiah-19197-24-03-2017-15-17-26.jpg"/>
           <h4 className='ms-5'>Nidhi Subbaiah</h4>
           <p className='ms-5'>Actor</p>
             </SwiperSlide>
           <SwiperSlide>    <img   className='cto'  width='170' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/cockroach-sudhir-1264458-1695461946.jpg"/>
           <h4 className='ms-5'>Cockroach Sudhir</h4>
           <p className='ms-5'>Actor</p>
             </SwiperSlide>
          
      
    
    
    
    
    
    
        </Swiper>
    
    </div>
    <hr />
    <div className='mt-5 ms-4'>
      <h2 className='fomo'>Crew</h2>
    <Swiper
          
          className='mt-5'
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={100}
          slidesPerView={5}
          navigation
         
        >
      
        
        
         
        
       
         
        
        
           
           <SwiperSlide>  <img   className='cto'  width='170' src='https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/upendra-2420-24-03-2017-17-35-15.jpg' />
                          <h4 className='ms-5'>Upendra</h4>
                          <p className='ms-5'>Actor</p>
             </SwiperSlide>
           <SwiperSlide>  <img   className='cto' width='170'  src='https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/k-p-sreekanth-2007687-11-02-2020-12-03-02.jpg'/>
           <h4 className='ms-5'>K.P. Shreekanth</h4>
           <p className='ms-5'>Producer</p>
               </SwiperSlide>
           <SwiperSlide>  <img   className='cto' width='170' src='https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/g-manoharan-2042576-1732775474.jpg' />
           <h4 className='ms-5'>G.Manoharan</h4>
           <p className='ms-5'>Producer</p>
             </SwiperSlide>
           <SwiperSlide>  <img  className='cto'  width='170' src='https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/b-ajaneesh-loknath-1044651-1681029949.jpg' />
           <h4 className='ms-5'>B.Ajaneesh</h4>
           <p className='ms-5'>Musician</p>
            </SwiperSlide>
           <SwiperSlide>   <img  className='cto'  width='170' src='https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/velu-tulasi-ram-2043075-1734448737.jpg' />
          <h4 className='ms-5'>Velu Tulasi Ram</h4>
           <p className='ms-5'>Executive Producer</p>
           </SwiperSlide>
           <SwiperSlide> <img   className='cto' width='170' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/naveen-manoharan-2042575-1732775398.jpg"/>
           <h4 className='ms-5'>Naveen Manoharan</h4>
           <p className='ms-5'>Co-Producer</p>
           </SwiperSlide>
          
      
    
    
    
    
    
    
        </Swiper>
    
    </div>
    <hr />
  
    

      <div className='container'>
        
      <div className='row'>
       <div className='col-md-8'>
       <h2 className='fomo d-inline-flex'>Top reviews</h2>
       </div>
       <div className='col-md-4'>
       <h3 className=' text-danger ms-5 d-inline-flex'>10.4K reviews<FontAwesomeIcon icon={faGreaterThan} size='2xs' className='mt-2 ms-4' style={{color: "#dd2739",}} /></h3>
     
       </div>
      </div>
      </div>
      <div>
        <h4 className='text-secondary mt-4'>Summary of 10.4K reviews.</h4>
        <Swiper
        className=' mt-3'
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
       
       
        >
        
        
        
        
        
        
        
        
        
        
            
          
             <SwiperSlide><h4 className='ui  mt-4 text-danger  d-inline-flex'>#SuperDirection <h4 className='text-secondary d-inline-flex mt-2 ms-2'>7467</h4></h4></SwiperSlide>
            <SwiperSlide> <h4 className='ui  mt-4 text-danger  d-inline-flex'>#Inspiring <h4 className='text-secondary d-inline-flex mt-2 ms-2'>4073</h4></h4></SwiperSlide>
            <SwiperSlide> <h4 className='ui  mt-4 text-danger  d-inline-flex'>#Blockbuster <h4 className='text-secondary d-inline-flex mt-2 ms-2'>3835</h4></h4></SwiperSlide>
             <SwiperSlide><h4 className='ui  mt-4 text-danger  d-inline-flex'>#Unbelievable <h4 className='text-secondary d-inline-flex mt-2 ms-2'>3754</h4></h4></SwiperSlide>
            <SwiperSlide> <h4 className='ui  mt-4 text-danger  d-inline-flex'>#Blockbuster <h4 className='text-secondary d-inline-flex mt-2 ms-2'>3835</h4></h4></SwiperSlide>
            <SwiperSlide> <h4 className='ui  mt-4 text-danger  d-inline-flex'>#Unbelievable<h4 className='text-secondary d-inline-flex mt-2 ms-2'>3754</h4></h4></SwiperSlide>
            <SwiperSlide> <h4 className='ui  mt-4 text-danger  d-inline-flex'>#Wellmade <h4 className='text-secondary d-inline-flex mt-2 ms-2'>3717</h4></h4></SwiperSlide>
            <SwiperSlide> <h4 className='ui  mt-4 text-danger  d-inline-flex'>#AwesomeStory <h4 className='text-secondary d-inline-flex mt-2 ms-2'>3567</h4></h4></SwiperSlide>
            <SwiperSlide> <h4 className='ui  mt-4 text-danger  d-inline-flex'>#WowMusic <h4 className='text-secondary d-inline-flex mt-2 ms-2'>2907</h4></h4></SwiperSlide>
            <SwiperSlide> <h4 className='ui  mt-4 text-danger  d-inline-flex'>#Rocking <h4 className='text-secondary d-inline-flex mt-2 ms-2'>2802</h4></h4></SwiperSlide>
          
             <SwiperSlide><h4 className='ui mt-4 text-danger  d-inline-flex'>#OneTimeWatching <h4 className='text-secondary d-inline-flex mt-2 ms-2'>4564</h4></h4></SwiperSlide>
        
        
        
        
        
        
        
        
        </Swiper>


        <Swiper
        className=' mt-3'
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        slidesPerView={2}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        >
        
        
        
        
        
        
        
        
        
        
            
          
             <SwiperSlide> <div className='bype ms-5'>
        <div className='p-5'>

    <p><FontAwesomeIcon icon={faCircleUser} className='text-secondary d-inline-flex' size='2xl' /><h5 className='d-inline-flex ms-4'>Siddu <br/> Booked on bookmyshow</h5><h5 className='d-inline-flex ms-5'><FontAwesomeIcon icon={faStar} style={{color: "#c2565c",}} />10/10</h5> </p>
      <h6>ಈಗ ತಾನೇ ಸಿನೆಮಾ ನೋಡಿದೆ ಇದು ರೇಟಿಂಗ್ ಕೊಡೋ ಸಿನಿಮಾ ಅಲ್ಲಾ ಅರ್ಥ ಮಾಡ್ಕೊಳೋ ಸಿನೆಮಾ ಜನಗಳಿಗೆ ಮೊಬೈಲ್ ಜೊತೆಗೆ ಫ್ರೀ ಇಂಟರ್ನೆಟ್ ಇದ್ರೆ ಸಾಕು ಬೇರೇನೂ ಬೇಡ. ನಮ್ಮನ್ನ ಆಳುತ್ತಿರ ...more</h6>
     <h5 className=''>
       <FontAwesomeIcon icon={faThumbsUp} size='xl' className='mt-5 d-inline-flex' /><p className='d-inline-flex ms-3'>4.8K</p>
       <FontAwesomeIcon icon={faThumbsDown} size='xl' className='ms-5' />
       <h4 className='text-secondary d-inline-flex ms-4'>3 Days Ago</h4> <FontAwesomeIcon icon={faShareNodes} className='ms-4'/>
      </h5>
    

        </div>
      </div></SwiperSlide>
             <SwiperSlide> <div className='bype ms-5'>
        <div className='p-5'>

    <p><FontAwesomeIcon icon={faCircleUser} className='text-secondary d-inline-flex' size='2xl' /><h5 className='d-inline-flex ms-4'>Manju <br/> Booked on bookmyshow</h5><h5 className='d-inline-flex ms-5'><FontAwesomeIcon icon={faStar} style={{color: "#c2565c",}} />10/10</h5> </p>
      <h6>what a direction wonderful msg 🔥🔥🔥🔥 Uppi becom world number one director very sooon 🙏🙏 UI blockbuster 🤩🤩</h6>
     <h5 className=''>
       <FontAwesomeIcon icon={faThumbsUp} size='xl' className='mt-5 d-inline-flex' /><p className='d-inline-flex ms-3'>4.8K</p>
       <FontAwesomeIcon icon={faThumbsDown} size='xl' className='ms-5' />
       <h4 className='text-secondary d-inline-flex ms-4'>3 Days Ago</h4> <FontAwesomeIcon icon={faShareNodes} className='ms-4'/>
      </h5>
    

        </div>
      </div></SwiperSlide>
             <SwiperSlide> <div className='bype ms-5'>
        <div className='p-5'>

    <p><FontAwesomeIcon icon={faCircleUser} className='text-secondary d-inline-flex' size='2xl' /><h5 className='d-inline-flex ms-4'>Unique <br/> Booked on bookmyshow</h5><h5 className='d-inline-flex ms-5'><FontAwesomeIcon icon={faStar} style={{color: "#c2565c",}} />10/10</h5> </p>
      <h6>#SuperDirection #GreatActing #WowMusic #Awe...</h6>
     <h5 className=''>
       <FontAwesomeIcon icon={faThumbsUp} size='xl' className='mt-5 d-inline-flex' /><p className='d-inline-flex ms-3'>4.8K</p>
       <FontAwesomeIcon icon={faThumbsDown} size='xl' className='ms-5' />
       <h4 className='text-secondary d-inline-flex ms-4'>3 Days Ago</h4> <FontAwesomeIcon icon={faShareNodes} className='ms-4'/>
      </h5>
    

        </div>
      </div></SwiperSlide>
             <SwiperSlide> <div className='bype ms-5'>
        <div className='p-5'>

    <p><FontAwesomeIcon icon={faCircleUser} className='text-secondary d-inline-flex' size='2xl' /><h5 className='d-inline-flex ms-4'>User <br/> Booked on bookmyshow</h5><h5 className='d-inline-flex ms-5'><FontAwesomeIcon icon={faStar} style={{color: "#c2565c",}} />10/10</h5> </p>
      <h6>#SuperDirection #WowMusic #Inspiring #Wellma...</h6>
     <h5 className=''>
       <FontAwesomeIcon icon={faThumbsUp} size='xl' className='mt-5 d-inline-flex' /><p className='d-inline-flex ms-3'>4.8K</p>
       <FontAwesomeIcon icon={faThumbsDown} size='xl' className='ms-5' />
       <h4 className='text-secondary d-inline-flex ms-4'>3 Days Ago</h4> <FontAwesomeIcon icon={faShareNodes} className='ms-4'/>
      </h5>
    

        </div>
      </div>
      </SwiperSlide>
             <SwiperSlide> <div className='bype ms-5'>
        <div className='p-5'>

    <p><FontAwesomeIcon icon={faCircleUser} className='text-secondary d-inline-flex' size='2xl' /><h5 className='d-inline-flex ms-4'>Kushal<br/> Booked on bookmyshow</h5><h5 className='d-inline-flex ms-5'><FontAwesomeIcon icon={faStar} style={{color: "#c2565c",}} />10/10</h5> </p>
      <h6>#SuperDirection #AwesomeStory #Wellmade #Un...</h6>
     <h5 className=''>
       <FontAwesomeIcon icon={faThumbsUp} size='xl' className='mt-5 d-inline-flex' /><p className='d-inline-flex ms-3'>4.8K</p>
       <FontAwesomeIcon icon={faThumbsDown} size='xl' className='ms-5' />
       <h4 className='text-secondary d-inline-flex ms-4'>3 Days Ago</h4> <FontAwesomeIcon icon={faShareNodes} className='ms-4'/>
      </h5>
    

        </div>
      </div></SwiperSlide>
        
        
        
        
        
        
        
        </Swiper>

        <div className='container mt-5'>
                <div className='row'>
        
                    <div className='col-md-10'>
             <h4 className='dark'>You might also like</h4>
        
                    </div>
                    <div className='col-md-2'>
             <button className='btn text-danger nav justify-content-end'>View all</button>
        
                    </div>
                    
                </div>
            </div>
            <div className='container'>
            <Swiper
              
              
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={150}
              slidesPerView={4}
              navigation
             
            >
          
            
            
             
            
           
             
            
            
               
               <SwiperSlide>  <img  width={310}  src='https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/kalki-2898-ad-et00352941-1718275859.jpg' />
               <h5 className='p-2 '>Kalki 2998 AD</h5>
              
                 </SwiperSlide>
               <SwiperSlide>  <img  width={310}  src='https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/pushpa-the-rule--part-2-et00356724-1729771762.jpg'/>
               <h5  className='p-2'>Pushpa2:The Rule</h5>
              
                   </SwiperSlide>
               <SwiperSlide>  <img  width={310} src='https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/baby-john-et00386190-1733985497.jpg' />
               <h5  className='p-2'>Baby John</h5>
              
                 </SwiperSlide>
               <SwiperSlide>  <img width={310}  src='https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/marco-et00416394-1734329568.jpg' />
               <h5  className='p-2'>Marco</h5>
               
                </SwiperSlide>
               <SwiperSlide>   <img width={310}  src='https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/max-2024-et00383005-1734936047.jpg' />
               <h5  className='p-2'>Max</h5>
               
               </SwiperSlide>
               <SwiperSlide> <img  width={310}  src="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/amaran-et00388085-1728627184.jpg"/>
               <h5  className='p-2'>Amaran</h5>
              
               </SwiperSlide>
               <SwiperSlide>    <img  width={310}  src="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/bachhala-malli-et00401910-1718777745.jpg"/>
               <h5  className='p-2'>Bachhala Mali</h5>
              
                 </SwiperSlide>
               <SwiperSlide>    <img  width={310}  src="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/singham-again-et00354858-1728569759.jpg"/>
               <h5  className='p-2'>Singham Again</h5>
               
                 </SwiperSlide>
               <SwiperSlide>    <img  width={310}  src="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/rifle-club-et00422899-1733464185.jpg"/>
               <h5  className='p-2'>Rifle Club</h5>
               
                 </SwiperSlide>
          
               <SwiperSlide>    <img  width={310}  src="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/heretic-et00419853-1731582550.jpg"/>
               <h5  className='p-2'>Heretic</h5>
              
                 </SwiperSlide>
          
        
        
        
        
        
        
            </Swiper>
        
            </div>
      </div>

      
    </div>
  </div>

</div>


   


    
    
    
    </>
  )
}

export default MovieDetails
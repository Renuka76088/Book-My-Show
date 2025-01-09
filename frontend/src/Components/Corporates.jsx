import React from 'react'
import './Corporates.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function Corporates() {
  return (
    <>
    <div className='Corpo '>
      <div className=''>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7 mt-5  nav justify-content-center'>
            <h1 className='text-light fomo mt-5'>Entertainment you can gift.</h1>
            <p className='polo text-light mb-5'>A  variety of solutions to skyrocket your business with vouchers, promotions, loyality,employee recognition & rewards.</p>
            <p className='text-light polo'><img src="https://in.bmscdn.com/webin/corporate/watch-video.png" alt="" />Watch Vedio</p>
            <p className='text-light ms-5 polo' ><img src="https://in.bmscdn.com/webin/corporate/brochure.png" alt="" />imgDownload Brochure</p>
          </div>
          <div className='col-md-5'>
         <div className='nav justify-content-center portes mt-4'>
          <form className='mt-5'>
            <p>Full Name</p>
            <input type="text" placeholder='Name' /><br />
            <p className=''>Company Email</p>
            <input type="email" placeholder='Company Email' /><br />
            <p>Company Name</p>
            <input type="text" placeholder='Company Name' /><br />
            <p>Mobile Number</p>
            <input type="phone" placeholder='eg:91480XXXXXX' /><br />
            <button className='mt-3 btn btn-secondary text-light'>Recieve a callback</button>
          </form>

         </div>
          
          </div>

        </div>

      </div>
    </div>
    </div>

    <div className='container'>
      <p className=' p-5 nav justify-content-center'>OUR PARTNERS</p>
     
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-2 '><img src="https://in.bmscdn.com/webin/corporate/hp-logo.png" alt="" /></div>
        <div className='col-md-2'><img src="https://in.bmscdn.com/webin/corporate/ola-logo.png" alt="" /></div>
        <div className='col-md-2'><img src="https://in.bmscdn.com/webin/corporate/axis-logo.png" alt="" /></div>
        <div className='col-md-2 ms-5'><img src="https://in.bmscdn.com/webin/corporate/mastercard-logo.png" alt="" /></div>
        <div className='col-md-2'><img src="https://in.bmscdn.com/webin/corporate/icici-logo.png" alt="" /></div>
      </div>

    </div>

    <div className='copo mt-5'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-2 '><h4 className=''>1000+</h4><p>Cities</p></div>
        <div className='col-md-2'><h4>6000</h4><p>Screens</p></div>
        <div className='col-md-2'><h4>1000+</h4><p>CORPORATES WHO TRUST US</p></div>
        <div className='col-md-2 ms-5'><h4>15 MILLION+</h4><p>TICKETS SOLD PER MONTHS</p></div>
        <div className='col-md-2 ms-5'><h4>4 Billion</h4><p>PAGE VIEWS PER MONTH</p></div>
      </div>

    </div>
    </div>
    <div className='container-fluid'>
     <div className='row'>
      <div className='p-5 col-md-6'>
        <p className='polo text-secondary mt-5'>WHAT`S IN IT FOR YOU</p>
        <h2>Brand Promotions</h2>
        <p className='polo'>Gifting entertainment is a fun way to push your brand's message. And theways you can use vouchers are endless. For example, upselling celebrity-endorsed products timed with a movie release.</p>
     <button className='btn btn-outline-danger text-danger'>Promote your brand</button>
      </div>
      <div className='col-md-6'>
        <img width={570} src="https://in.bmscdn.com/webin/corporate/steven-libralon.png" alt="" />
      </div>
     </div>
    </div>
    <hr className='border border-5 border-secondary' />
    <div className='container'>
     <div className='row'>
     <div className='col-md-6'>
        <img width={570} src="https://in.bmscdn.com/webin/corporate/customer-engage.png" alt="" />
      </div>
      <div className=' col-md-6 '>
        <h2 className='ms-5 mt-5'>Employee Engagement</h2>
        <h2 className='ms-5'>Recognition & Rewards </h2>
        <p className='polo ms-5'>Show your clients and employees some appreciate by gifting them our products</p>
     <button className='btn btn-outline-danger text-danger ms-5'>Engage Your employees</button>
      </div>
   
     </div>
    </div>
    <hr className='border border-5 border-secondary' />
    <div className='container'>
     <div className='row'>
      <div className='p-5 col-md-6 '>
        
        <h2 className='mt-4'>Lead Generation</h2>
        <p className='polo'>Get positive referrals, keep existing customers and trigger change management</p>
     <button className='btn btn-outline-danger text-danger'>Improve leads</button>
      </div>
      <div className='col-md-6'>
        <img width={570} src="https://in.bmscdn.com/webin/corporate/lead-generation.png" alt="" />
      </div>
     </div>
    </div>
    <hr className='border border-5 border-secondary' />
    <div className='container'>
     <div className='row'>
      <div className='col-md-6'>
        <img width={570} src="https://in.bmscdn.com/webin/corporate/loyalty.png" alt="" />
      </div>
      <div className='p-5 col-md-6'>
        
        <h2 className='mt-5'>Loyalty</h2>
        <p className='polo'>Keep customers firmly in your corner by rewarding them with promotional vouchers. </p>
     <button className='btn btn-outline-danger text-danger'>Retain your customer</button>
      </div>
     </div>
    </div>
    <hr className='border border-5 border-secondary' />
    <div className='container'>
     <div className='row'>
      <div className='p-5 col-md-6'>
        
        <h2>Corporate Gifting</h2>
        <p className='polo'>From stand-up comedy and sporting activities to movies and plays, we`ve got all the entertainment worth gifting to your patrons.</p>
     <button className='btn btn-outline-danger text-danger'>Explore solutions</button>
      </div>
      <div className='col-md-6'>
        <img width={570} src="https://in.bmscdn.com/webin/corporate/corporate-gifting.png" alt="" />
      </div>
     </div>
    </div>
    <hr className='border border-5 border-secondary' />
    <div className='container'>
    <p className='polo'>OUR SUITE OF BUSINESS  SOLUTIONS: </p>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 p-0'><p className='green'><h2 className='ms-5'>End-to-End Creative Support </h2></p></div>
        <div className='col-md-4 p-0'><p className='red'><h2 className='ms-5'>Marketing & E-mail Guidance</h2></p></div>
        <div className='col-md-4 p-0'><p className='yellow'><h2 className='ms-5'>Bulk SMS Communication</h2></p></div>

      </div>

    </div>
    <hr className='border border-5 border-secondary' />
    <div className='container p-4'>
      <div className='row'>
        <div className='col-md-8'><p className='polo'>Get priority support from the experts in the entertainment industry</p></div>
        <div className='col-md-4'><button style={{height:'60px',width:'300px'}} className='btn btn-danger text-light '>Access the complete suit </button></div>

      </div>

    </div>
    <hr className='border border-5 border-secondary' />

    <div className='container'>
      <p className='polo'>CAMPAIGNS WE`RE PROUD OF </p>

    </div>
    <div className='container'>
    <Swiper
      
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={5}
      navigation
     
    >
  
    
    
     
    
   
     
    
    
       <SwiperSlide> <img width={200} src='https://in.bmscdn.com/webin/corporate/ola-offer.jpg'  />
         
         </SwiperSlide>
       <SwiperSlide>  <img  width={200}  src='https://in.bmscdn.com/webin/corporate/hp-offer.jpg' />
       
         </SwiperSlide>
       <SwiperSlide>  <img  width={200}  src='https://in.bmscdn.com/webin/corporate/addidas-offer.jpg' />
      
           </SwiperSlide>
       <SwiperSlide>  <img  width={200} src='https://in.bmscdn.com/webin/corporate/zivame-offer.jpg' />

         </SwiperSlide>
       <SwiperSlide>  <img width={200}  src='https://in.bmscdn.com/webin/corporate/acuvue-offer.jpg' />
      
        </SwiperSlide>
       <SwiperSlide>   <img width={200}  src='https://in.bmscdn.com/webin/corporate/vijay-sales-promotions.png' />
      
       </SwiperSlide>
       <SwiperSlide> <img  width={200}  src="https://in.bmscdn.com/webin/corporate/test-drive-generation.png"/>
     
       </SwiperSlide>
       <SwiperSlide>    <img  width={200}  src="https://in.bmscdn.com/webin/corporate/movie-promotions.png"/>
      
         </SwiperSlide>
       <SwiperSlide>    <img  width={200}  src="https://in.bmscdn.com/webin/corporate/lenovo-generation.png"/>
       
         </SwiperSlide>
       <SwiperSlide>    <img  width={200}  src="https://in.bmscdn.com/webin/corporate/croma-promotions.png"/>
      
         </SwiperSlide>
  
       <SwiperSlide>    <img  width={200}  src="https://in.bmscdn.com/webin/corporate/ola-offer.jpg"/>
      
         </SwiperSlide>
  
       <SwiperSlide>    <img  width={200}  src="https://in.bmscdn.com/webin/corporate/hp-offer.jpg"/>
      
         </SwiperSlide>
  






    </Swiper>
    </div>
    <hr className='border border-5 border-secondary' />

    <div className='container'>
     <p className='polo'>OUR PRODUCTS</p>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 red1 '>
          <h2 className='mt-5 ms-5'>Movie Vouchers</h2>
        <p className='polo ms-5 mt-4'>Highly customizable, single usage, promotional codes in the form of set amount/value or a percentage of discount on the ticket cost. An ideal suit for movie and product promotions, consumer activation and countless more!</p>
        <button style={{height:'50px',width:'200px'}} className='btn btn-light text-danger mt-5 ms-5'>Enquire</button>
        </div>
        <div className='col-md-6 grey'>
        <h2 className='mt-5 ms-5'>Gift Vouchers</h2>
        <p className='polo ms-5 mt-4'>Amazing little pre-loaded cash cards which can be used to purchase tickets across all categories for 6 months. Be it employee rewards, trade channel incentive or consumer Engagement, a gift voucher fits all.</p>
        <button style={{height:'50px',width:'200px'}} className='btn btn-light text-danger mt-5 ms-5'>Enquire</button>
        </div>

      </div>

    </div>

    <div className='container monjo nav justify-content-center mt-3 '>
      
        <div className='row'>
          <div className='col-md-8'>
            <p className='polo fomo mt-5'>Bulk Booking</p>
            <h2>Exclusive corporate experience from BookMyShow</h2>
          </div>
          <div className='col-md-4 mt-5'><button  style={{height:'45px',width:'300px'}} className='btn btn-danger mt-5 text-light'>Explore Now</button></div>

      

      </div>

    </div>
    <div className='container nav justify-content-center mt-4'>
    <p className='polo'>Testimonials</p>
    </div>
   
<div className='container-flow op'>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className='container-fluid testimonial'>
      <div className='row'>
        <div className='col-md-4 borop'><p className='nav justify-content-center mt-5'><img src="https://in.bmscdn.com/webin/corporate/mastercard-logo.jpg" alt="" /></p></div>
        <div className='col-md-8 p-4'>
          <p>"Through our Partnership, we have been able to create of excitement and interest amongest our customers. It has helped us to build a long lasting relationship & a special bond with our clients as movies is something that appeals to everyone. Thank you, BookMyShow!"</p>
          <p className='polo1'>Vikas Verma,<br />Executive Director <br />MasterCard (South Asia)</p>
        </div>

      </div>

    </div>

    </div>
    <div className="carousel-item">
    <div className='container-fluid testimonial'>
      <div className='row'>
        <div className='col-md-4 borop'><p className='nav justify-content-center mt-5'><img src="https://in.bmscdn.com/webin/corporate/cm-logo.png" alt="" /></p></div>
        <div className='col-md-8 p-4'>
          <p>"As a token of our appreciation to the prospects who visit our Holiday World,we offer them BMS vouchers.these vouchers helps us Further reinforce our core thought of creating Magical Moments for them and instantly put a smile on their faces"</p>
          <p className='polo1'>Abhijeet Ghosh,<br />Regional Marketing Manager <br />Mahindra Holidays and Resorts India Ltd</p>
        </div>

      </div>

    </div>

    </div>
    <div className="carousel-item">
    <div className='container-fluid testimonial'>
      <div className='row'>
        <div className='col-md-4 borop'><p className='nav justify-content-center mt-5'><img src="https://in.bmscdn.com/webin/corporate/hp-new-logo.png" alt="" /></p></div>
        <div className='col-md-8 p-4'>
          <p>"Our association with BookMyShow has helped us reach out to specific set of consumers who have varied interests in Movies, Sports and Plays. We have been able to engage with our consumers by offering them tailor made promotions and delight them by bringing more value when they buy an HP product. We at HP,truly value this association and look forward to many such initiatives that benefits our consumers. "</p>
          <p className='polo1'>Lloyd Mathias,<br />Head Marketing <br />HP Printing and Personal Systems, India</p>
        </div>

      </div>

    </div>

    </div>
    <div className="carousel-item">
    <div className='container-fluid testimonial'>
      <div className='row'>
        <div className='col-md-4 borop'><p className='nav justify-content-center mt-5'><img src="https://in.bmscdn.com/webin/corporate/o-logo.png" alt="" /></p></div>
        <div className='col-md-8 p-4'>
          <p>"Through our Partnership with BookMyShow, we have been able to offer very exciting events privileges to our Select members.We were able to drive excitement/Engagement with unique offering which was much appreciated by our privileged members.Thank you BookMyShow and team for great work"</p>
          <p className='polo1'>Ashish Lingamneni,<br />Associate Director-Marketing <br />OlaCabs</p>
        </div>

      </div>

    </div>

    </div>
    <div className="carousel-item">
    <div className='container-fluid testimonial'>
      <div className='row'>
        <div className='col-md-4 borop'><p className='nav justify-content-center mt-5'><img src="https://in.bmscdn.com/webin/corporate/mmt-logo.png" alt="" /></p></div>
        <div className='col-md-8 p-4'>
          <p>"My experience of working with BMS Corporate Solutions team has been absolutely awsome.I really like the professionalism and biasedness for action that the team demonstrates. Team is extremely clear with their Communication and maintain extreme transparency which is very important to build trust in ant partnership"</p>
          <p className='polo1'>Arun Garg,<br />Head-Alliances & Partnerships <br />MakeMyTrip</p>
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

<div className='container nav justify-content-center'>
<button style={{height:'45px',width:'300px'}} className='btn btn-outline-danger text-danger mt-5'>Partner with  us</button>
</div>
    </>
  )
}

export default Corporates
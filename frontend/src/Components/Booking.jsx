import React from 'react'
import './Booking.css'
import { faCircle, faMobile, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Booking() {
  return (
    <>
     <div className='ms-5'>
        <h5>UI(2024) <p className='omy mt-4 text-dark d-inline-flex'>UA</p></h5>
        <h6>Prasads Multiplex: Hyderabad | Today, 24 Dec, 08:30 PM</h6>
    </div>
    <div className='hjk'>

    

    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-8'>
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1688188454571_855x95.jpg" style={{width:'100%',borderRadius:'20px'}}   alt="" />
            <div className='paper mt-2'>
                <div  >
              <h1 className='nav justify-content-center'>Grab a bite!</h1><br />
              <h4 className='nav justify-content-center'>Prebook Your Meal and Save More!</h4></div>
              <div>
                <div className='nav justify-content-center'>
              <p className='pmy1 mt-4 text-danger  d-inline-flex'>Workshops</p>
           <p className='pmy1 mt-4 text-danger ms-2 d-inline-flex'>Comedy Shows</p>
           <p className='pmy1 mt-4 text-danger ms-2 d-inline-flex'>Music Shows</p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Meetups</p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Kids</p>
              </div>
              <div className=''>

              
           <div className='d-inline-flex'>

            <label className='popco'>
            

            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1174774_04012019152322.png" width='100px' alt="" />
            
              <h4 className=' d-inline-flex nav justify-content-center ms-5'>Value Combo </h4>
            <p className='ms-5 nav justify-content-center'>Tub Popcorn Salted 110g + French fries + 2 Coke 300ml</p>
            <p className='mt-3 ms-5'>

            <h5 className='d-inline-flex ms-5'>₹590</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹630</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
            
            </p>
            
            

            </label>
            <label className='popco ms-3'>
            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1020001_13082018125322.png" width='100px' alt="" />
            
            <h4 className=' d-inline-flex nav justify-content-center ms-5'>Popcorn Salted 110g</h4>
          <p className='ms-5 nav justify-content-center '>Popcorn Salted 110g</p>
          <p className='mt-3 ms-5'>

          <h5 className='d-inline-flex ms-5'>₹210</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹630</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
          
          </p>
          
            </label>
           </div>
           <div>
             <div className='d-inline-flex'>


            <label className='popco'>
            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1020046_21042022161538.png" width='100px' alt="" />
            
            <h4 className=' d-inline-flex nav justify-content-center ms-5 '>Chicken Pizza </h4>
          <p className='ms-5 nav justify-content-center '>Chicken Pizza</p>
          <p className='mt-3 ms-5'>

          <h5 className='d-inline-flex ms-5'>₹250.01</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹630</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
          
          </p>
          
            </label>
            <label className='popco ms-3'>
            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1020171_06082018153946.png" width='100px' alt="" />
            
            <h4 className=' d-inline-flex nav justify-content-center ms-5'>Smart Water</h4>
          <p className=' nav justify-content-center'>Smart Water</p>
          <p className='mt-3 ms-5'>

          <h5 className='d-inline-flex ms-5'>₹65</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹63</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
          
          </p>
          
            </label>
           </div>
           <div>
            <div>


            </div>
              <div className='d-inline-flex'>

              
            <label className='popco'>
            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1020011_17082018145045.png" width='100px' alt="" />
            
            <h4 className=' d-inline-flex nav justify-content-center ms-5'>Coke 650ml</h4>
          <p className=' nav justify-content-center'>Coke 650ml</p>
          <p className='mt-3 ms-5'>

          <h5 className='d-inline-flex ms-5'>₹60</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹63</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
          
          </p>
          
            </label>
            <label className='popco ms-3'>
            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1020037_09082018183309.png" width='100px' alt="" />
            
            <h4 className=' d-inline-flex nav justify-content-center ms-5'>Veg Pizza</h4>
          <p className='ms-5 nav justify-content-center'>Veg Pizza</p>
          <p className='mt-3 ms-5'>

          <h5 className='d-inline-flex ms-5'>₹230</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹630</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
          
          </p>
          
            </label>
           </div>
           <div>
             </div>
             </div>
               <div className='d-inline-flex'>
            <label className='popco'>
            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1174774_04012019152322.png" width='100px' alt="" />
            
            <h4 className=' d-inline-flex nav justify-content-center ms-5'>Value Combo </h4>
          <p className='ms-5 nav justify-content-center'>Tub Popcorn Salted 110g + French fries + 2 Coke 300ml</p>
          <p className='mt-3 ms-5'>

          <h5 className='d-inline-flex ms-5'>₹590</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹630</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
          
          </p>
          
            </label>
            <label className='popco ms-3'>
            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1174774_04012019152322.png" width='100px' alt="" />
            
            <h4 className=' d-inline-flex nav justify-content-center ms-5'>Value Combo </h4>
          <p className='ms-5 nav justify-content-center'>Tub Popcorn Salted 110g + French fries + 2 Coke 300ml</p>
          <p className='mt-3 ms-5'>

          <h5 className='d-inline-flex ms-5'>₹590</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹630</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
          
          </p>
          
            </label>
           </div>
           <div>
           <div className='d-inline-flex'>
            <label className='popco'>
            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1174774_04012019152322.png" width='100px' alt="" />
            
            <h4 className=' d-inline-flex nav justify-content-center ms-5'>Value Combo </h4>
          <p className='ms-5 nav justify-content-center'>Tub Popcorn Salted 110g + French fries + 2 Coke 300ml</p>
          <p className='mt-3 ms-5'>

          <h5 className='d-inline-flex ms-5'>₹590</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹630</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
          
          </p>
          
            </label>
            <label className='popco ms-3'>
            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1174774_04012019152322.png" width='100px' alt="" />
            
            <h4 className=' d-inline-flex nav justify-content-center ms-5'>Value Combo </h4>
          <p className='ms-5 nav justify-content-center'>Tub Popcorn Salted 110g + French fries + 2 Coke 300ml</p>
          <p className='mt-3 ms-5'>

          <h5 className='d-inline-flex ms-5'>₹590</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹630</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
          
          </p>
          
            </label>
           </div>
           <div>
            </div>
           </div>
           <div className='d-inline-flex'>
            <label className='popco'>
            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1174774_04012019152322.png" width='100px' alt="" />
            
            <h4 className=' d-inline-flex nav justify-content-center ms-5'>Value Combo </h4>
          <p className='ms-5 nav justify-content-center'>Tub Popcorn Salted 110g + French fries + 2 Coke 300ml</p>
          <p className='mt-3 ms-5'>

          <h5 className='d-inline-flex ms-5'>₹590</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹630</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
          
          </p>
          
            </label>
            <label className='popco ms-3'>
            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1174774_04012019152322.png" width='100px' alt="" />
            
            <h4 className=' d-inline-flex nav justify-content-center ms-5'>Value Combo </h4>
          <p className='ms-5 nav justify-content-center'>Tub Popcorn Salted 110g + French fries + 2 Coke 300ml</p>
          <p className='mt-3 ms-5'>

          <h5 className='d-inline-flex ms-5'>₹590</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹630</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
          
          </p>
          
            </label>
           </div>
           <div>
             <div className='d-inline-flex'>
            <label className='popco'>
            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1174774_04012019152322.png" width='100px' alt="" />
            
            <h4 className=' d-inline-flex nav justify-content-center ms-5'>Value Combo </h4>
          <p className='ms-5 nav justify-content-center'>Tub Popcorn Salted 110g + French fries + 2 Coke 300ml</p>
          <p className='mt-3 ms-5'>

          <h5 className='d-inline-flex ms-5'>₹590</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹630</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
          
          </p>
          
            </label>
            <label className='popco ms-3'>
            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1174774_04012019152322.png" width='100px' alt="" />
            
            <h4 className=' d-inline-flex nav justify-content-center ms-5'>Value Combo </h4>
          <p className='ms-5 nav justify-content-center'>Tub Popcorn Salted 110g + French fries + 2 Coke 300ml</p>
          <p className='mt-3 ms-5'>

          <h5 className='d-inline-flex ms-5'>₹590</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹630</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
          
          </p>
          
            </label>
           </div>
           <div>
            </div>
           </div>
           <div className='d-inline-flex'>

            <label className='popco'>
            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1174774_04012019152322.png" width='100px' alt="" />
            
            <h4 className=' d-inline-flex nav justify-content-center ms-5'>Value Combo </h4>
          <p className='ms-5 nav justify-content-center'>Tub Popcorn Salted 110g + French fries + 2 Coke 300ml</p>
          <p className='mt-3 ms-5'>

          <h5 className='d-inline-flex ms-5'>₹590</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹630</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
          
          </p>
          
            </label>
            <label className='popco ms-3'>
            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1174774_04012019152322.png" width='100px' alt="" />
            
            <h4 className=' d-inline-flex nav justify-content-center ms-5'>Value Combo </h4>
          <p className='ms-5 nav justify-content-center'>Tub Popcorn Salted 110g + French fries + 2 Coke 300ml</p>
          <p className='mt-3 ms-5'>

          <h5 className='d-inline-flex ms-5'>₹590</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹630</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
          
          </p>
          
            </label>
           </div>
           <div>
           <div className='d-inline-flex'>
            <label className='popco'>
            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1174774_04012019152322.png" width='100px' alt="" />
            
            <h4 className=' d-inline-flex nav justify-content-center ms-5'>Value Combo </h4>
          <p className='ms-5 nav justify-content-center'>Tub Popcorn Salted 110g + French fries + 2 Coke 300ml</p>
          <p className='mt-3 ms-5'>

          <h5 className='d-inline-flex ms-5'>₹590</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹630</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
          
          </p>
          
            </label>
            <label className='popco ms-3'>
            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1174774_04012019152322.png" width='100px' alt="" />
            
            <h4 className=' d-inline-flex nav justify-content-center ms-5'>Value Combo </h4>
          <p className='ms-5 nav justify-content-center'>Tub Popcorn Salted 110g + French fries + 2 Coke 300ml</p>
          <p className='mt-3 ms-5'>

          <h5 className='d-inline-flex ms-5'>₹590</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹630</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
          
          </p>
          
            </label>
           </div>
           <div>
            </div>
            </div>
            <div className='d-inline-flex'>

            <label className='popco'>
            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1174774_04012019152322.png" width='100px' alt="" />
            
            <h4 className=' d-inline-flex nav justify-content-center ms-5'>Value Combo </h4>
          <p className='ms-5 nav justify-content-center'>Tub Popcorn Salted 110g + French fries + 2 Coke 300ml</p>
          <p className='mt-3 ms-5'>

          <h5 className='d-inline-flex ms-5'>₹590</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹630</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
          
          </p>
          
            </label>
            <label className='popco ms-3'>
            <img className='d-inline-flex' src="https://in.bmscdn.com/fnb/v3/xxhdpi/1174774_04012019152322.png" width='100px' alt="" />
            
            <h4 className=' d-inline-flex nav justify-content-center ms-5'>Value Combo </h4>
          <p className='ms-5 nav justify-content-center'>Tub Popcorn Salted 110g + French fries + 2 Coke 300ml</p>
          <p className='mt-3 ms-5'>

          <h5 className='d-inline-flex ms-5'>₹590</h5><h6 className='text-secondary ms-5 d-inline-flex'>₹630</h6><h6 className='text-success ms-5 d-inline-flex'>6% OFF</h6> <button  className='btn btn-outline-danger ms-5 d-inline-flex'>Add</button>
          
          </p>
          
            </label>
           </div>
                </div>
                </div>
                </div>
            </div>
            </div>

      <div className='col-md-4'>
     <div className='paper-1 mt-3'>
  <h5 className='text-danger p-3' style={{fontWeight:'200'}}>BOOKING SUMMARY</h5>
 <h5 className='d-inline-flex'>
    
    <h5 className='ms-5'>GOLD - G11, G12 ( 2 Tickets ) <h6 className='mt-2 ms-3 text-secondary'>SCREEN 7</h6> </h5> <h5 className='ms-5'>Rs 500.00</h5>
    </h5> 
 <h5 className='d-inline-flex'>
    
    <h5 className='ms-5'> Convenience fees</h5> <h5 className='ms-5 float-end'>Rs 66.08</h5>
    
    </h5> 
    <hr />
    <h5 className='d-inline-flex '>
    
    <h5 className='ms-5 '>Sub Total</h5> <h5 className='float-end ms-5'>Rs 566.08</h5>
    
    </h5> 
    <p className='lkj'>
       <p className='d-inline-flex mt-3'>
       <h4 className='ms-5'>Donate to BookAChange </h4>
       {/* <p>(₹1 per ticket has been added)</p> */}
        </p> 
        <p className='d-inline-flex'>

<h4 className='ms-5'>Rs 0</h4>
        </p>
        <p className='ms-5 d-inline-flex'>(₹1 per ticket has been added)</p>
        <h6 className='d-inline-flex text-danger float-end'>Add Rs. 2</h6>

        <p className='ms-5'>VIEW T&C</p>
       
    </p>
    <p className='d-inline-flex ms-5'>Your Current State is <p className='text-danger d-inline-flex ms-2'>Talangana</p></p>
     </div>
     <div className='pap'>
   <h4 className='d-inline-flex'>Amount Payable</h4>
   <h4 className='d-inline-flex float-end'>Rs.459.00</h4>
     </div>
      <div>
        <h4 className='text-secondary nav justify-content-center mt-4'>Select Ticket Type</h4>
<div className='mt-4'>

        <div className='m-ticket'>
        <FontAwesomeIcon icon={faCircle} size='xl' style={{color: "#ea1a1a",}} />
        <FontAwesomeIcon icon={faMobile} size='2xl' className='ms-2 d-inline-flex' /><h5 className='d-inline-flex text-danger ms-3'>M-ticket</h5>
        </div>
        <div className='m-ticket ms-5'>
        <FontAwesomeIcon icon={faCircle} size='xl' style={{color: "#ea1a1a",}} />
        <FontAwesomeIcon icon={faPrint}  size='2xl' className='ms-2 d-inline-flex' /><h5 className='d-inline-flex text-danger ms-3'>Box Office Pickup</h5>
        </div>
</div>
<div>
    <p className='mt-3'>Show the m-ticket QR Code on your mobile to enter the cinema.</p>
</div>
<div>
    <p className='mt-4'>By proceeding, I express my consent to complete this transaction.</p>
</div>
<div>
    <Link to='/Payment'>
    
    <button className='btn btn-danger text-light' style={{height:'65px',width:'530px'}}> <h4 className='d-inline-flex float-start'>Toatal:Rs459.00</h4><h4 className='d-inline-flex float-end'>Proceed</h4> </button>
    </Link>

</div>
      </div>
      </div>

        </div>
    </div>
    </div>

       
    
    </>
  )
}

export default Booking
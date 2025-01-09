import React from 'react'

function Sportsbar() {
  return (
<>

<div className='p-5'>
        <h2 className='fo'>Filters</h2>
    </div>
  

    <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="Movie1" type="" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <p className=''>Date</p>
      </button>
    </h2>
    <div id="flush-collapseOne" className=" Movie5 accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
    


<button className='text-danger pty  d-inline-flex '>Today</button>
<button  className='text-danger pty2  ms-3 d-inline-flex'  >Tomorrow</button>



<button className='text-danger pty1 mt-3 ms-3 d-inline-flex' >This Weekend</button>

<div className='p-2'>
<input className='text-danger   d-inline-flex '  type='checkbox' /> Date Range
</div>
</div>



</div>
</div>

  
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="Movie1" type="" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <p className=''>Categories</p>
      </button>
    </h2>
    <div id="flush-collapseTwo" className=" Movie10 accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
    <div>


<button className='text-danger pty  d-inline-flex '>Running</button>
<button  className='text-danger pty  ms-3 d-inline-flex'  >Chess</button>
<button  className='text-danger pty  ms-3 d-inline-flex'  >Football</button>

</div>
<div className='mt-3'>

<button className='text-danger pty1  d-inline-flex ' >Badminton</button>
<button className='text-danger pty ms-1 d-inline-flex' >Kabaddi</button>
<button className='text-danger pty ms-1 d-inline-flex' >Cricket</button>
</div>
<div className='mt-3'>

<button className='text-danger pty5   d-inline-flex ' >Mixed Martial Arts</button>
<button className='text-danger pty2 ms-3 d-inline-flex ' >Atheletics</button>
</div>


</div>
</div>

  
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className=" Movie1" type="" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      
      <p className=''>More Filters</p>
  
  
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse Movie5" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
    <div>


<button className='text-danger pty1  d-inline-flex '>Outdoor Events</button>
<button  className='text-danger pty1  ms-3 d-inline-flex'  >Fast Filling</button>

</div>
<div className='mt-3'>

<button className='text-danger pty1  d-inline-flex ' >Kids Allowed</button>


</div>


    </div>
    </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFour">
      <button className=" Movie1" type="" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      
      <p className=''>Price</p>
  
  
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse Movie5" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
    <div>


<button className='text-danger pty  d-inline-flex '>Free</button>
<button  className='text-danger pty  ms-3 d-inline-flex'  >0-500</button>
<button className='text-danger pty2 ms-3 d-inline-flex ' >501-2000</button>
</div>
<div className='mt-3'>

<button className='text-danger pty2 ms-5  d-inline-flex ' >Above2000</button>


</div>

    </div>
    </div>
  
 


    <div className='mt-3'>
     <button className='hit'>Browse by Cinemas</button>
    </div>
    
  


</>
  )
}

export default Sportsbar
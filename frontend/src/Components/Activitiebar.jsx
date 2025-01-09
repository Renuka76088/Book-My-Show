import React from 'react'

function Activitiebar() {
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
    <div id="flush-collapseTwo" className=" Movie12 accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
    <div>


<button className='text-danger pty2  d-inline-flex '>Adventure</button>
<button  className='text-danger pty  ms-3 d-inline-flex'  >Parties</button>
<button  className='text-danger pty  ms-3 d-inline-flex'  >Nightlife</button>

</div>
<div className='mt-3'>

<button className='text-danger pty5  d-inline-flex ' >Tourist Attractions</button>

</div>
<div className='mt-3'>

<button className='text-danger pty5   d-inline-flex ' >Food and Drinks</button>
<button className='text-danger pty2 ms-3 d-inline-flex ' >Gaming</button>
</div>
<div className='mt-3'>

<button className='text-danger pty5   d-inline-flex ' >Amusements Parks</button>
<button className='text-danger pty1 ms-2 d-inline-flex ' >Unique Tours</button>
</div>
<div className='mt-3'>

<button className='text-danger pty2   d-inline-flex ' >Festivals</button>

</div>
<div className='mt-3'>

<button className='text-danger pty9   d-inline-flex ' >Quizzes and Competitions</button>

</div>
<div className='mt-3'>

<button className='text-danger pty9  d-inline-flex ' >Antiques,Heritage,Museums</button>

</div>
<div className='mt-3'>

<button className='text-danger pty5   d-inline-flex ' >Navratri Celebration</button>

</div>


</div>
</div>

  
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className=" Movie1" type="" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      
      <p className=''>More Filters</p>
  
  
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse Movie" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
    <div>


<button className='text-danger pty1  d-inline-flex '>Outdoor Events</button>
<button  className='text-danger pty1  ms-3 d-inline-flex'  >Fast Filling</button>

</div>
<div className='mt-3'>

<button className='text-danger pty1  d-inline-flex ' >Kids Allowed</button>
<button className='text-danger pty1 ms-2 d-inline-flex ' >Kids Activities</button>


</div>
<div className='mt-3'>

<button className='text-danger pty1  d-inline-flex ' >Challenges</button>
<button className='text-danger pty1 ms-2  d-inline-flex ' >Stay Packages</button>


</div>
<div className='mt-3'>

<button className='text-danger pty5  d-inline-flex ' >Weekend Getaway</button>



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

export default Activitiebar
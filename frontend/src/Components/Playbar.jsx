import React from 'react'

function Playbar() {
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
      <button className=" Movie1" type="" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      
      <p className=''>Languages</p>
  
  
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse Movie6" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
    <div>


<button className='text-danger pty  d-inline-flex '>English</button>
<button  className='text-danger pty  ms-3 d-inline-flex'  >Hindi</button>
<button className='text-danger pty ms-3 d-inline-flex ' >Kannada</button>
</div>
<div className='mt-3'>

<button className='text-danger pty  d-inline-flex ' >Tamil</button>
<button className='text-danger pty ms-3 d-inline-flex' >Telugu</button>
<button className='text-danger pty2 ms-3 d-inline-flex' >Malayalam</button>

</div>
<div className='mt-3'>

<button className='text-danger pty2   d-inline-flex ' >Bengali</button>
<button className='text-danger pty ms-3 d-inline-flex ' >Marathi</button>
<button className='text-danger pty2 mt-3  d-inline-flex ' >HindiEnglish</button>
</div>
<div className='mt-3'>

<button className='text-danger pty5  d-inline-flex ' >Multi Languages</button>
<button className='text-danger pty ms-3  d-inline-flex ' >Punjabi</button>

</div>
<div className='mt-3'>
<button className='text-danger pty  d-inline-flex ' >Bhojpuri</button>
<button className='text-danger pty ms-3  d-inline-flex ' >French</button>
<button className='text-danger pty ms-3  d-inline-flex ' >Sanskrit</button>
</div>
<div className='mt-3'>
<button className='text-danger pty  d-inline-flex ' >Urdu</button>
<button className='text-danger pty ms-2 d-inline-flex ' >Arabic</button>
<button className='text-danger pty2 ms-2 d-inline-flex ' >Assamese</button>

</div>
<div className='mt-3'>
<button className='text-danger pty  d-inline-flex ' >Awadhi</button>
<button className='text-danger pty ms-3  d-inline-flex ' >Brajawali</button>
<button className='text-danger pty2 ms-3  d-inline-flex ' >Bulgarian</button>
</div>
<div className='mt-3'>
<button className='text-danger pty  d-inline-flex ' >Gujrati</button>
<button className='text-danger pty2 ms-3  d-inline-flex ' >Hindustani</button>
<button className='text-danger pty ms-3  d-inline-flex ' >Iltalian</button>

</div>
<div className='mt-3'>
<button className='text-danger pty2  d-inline-flex ' >Japanese</button>
<button className='text-danger pty ms-3  d-inline-flex ' >Korean</button>
<button className='text-danger pty ms-3  d-inline-flex ' >Russian</button>

</div>
<div className='mt-3'>
<button className='text-danger pty  d-inline-flex ' >Xhosa</button>

</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="Movie1" type="" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <p className=''>Categories</p>
      </button>
    </h2>
    <div id="flush-collapseThree" className=" Movie5 accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
    <div>


<button className='text-danger pty2  d-inline-flex '>Theatre</button>
<button  className='text-danger pty1  ms-3 d-inline-flex'  >Storytelling</button>

</div>
<div className='mt-3'>

<button className='text-danger pty1  d-inline-flex ' >Experimental</button>
<button className='text-danger pty ms-1 d-inline-flex' >Puppetry</button>

</div>


</div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFour">
      <button className=" Movie1" type="" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      
      <p className=''>Genres</p>
  
  
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse Movie3" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
    <div>


<button className='text-danger pty  d-inline-flex '>Drama</button>
<button  className='text-danger pty  ms-3 d-inline-flex'  >Action</button>
<button className='text-danger pty ms-3 d-inline-flex ' >Thriller</button>
</div>
<div className='mt-3'>

<button className='text-danger pty  d-inline-flex ' >Comedy</button>
<button className='text-danger pty2 ms-3 d-inline-flex' >Romentic</button>

</div>
<div className='mt-3'>

<button className='text-danger pty2   d-inline-flex ' >Adventure</button>
<button className='text-danger pty ms-1 d-inline-flex ' >Horror</button>
<button className='text-danger pty2 ms-1  d-inline-flex ' >Animation</button>
</div>
<div className='mt-3'>

<button className='text-danger pty  d-inline-flex ' >Crime</button>
<button className='text-danger pty ms-3  d-inline-flex ' >Mystery</button>
<button className='text-danger pty2 ms-3  d-inline-flex ' >Suspense</button>
</div>
<div className='mt-3'>
<button className='text-danger pty  d-inline-flex ' >Sci-fi</button>
<button className='text-danger pty ms-3  d-inline-flex ' >Family</button>
<button className='text-danger pty ms-3  d-inline-flex ' >Period</button>
</div>
<div className='mt-3'>
<button className='text-danger pty2  d-inline-flex ' >Biography</button>
<button className='text-danger pty2 ms-3  d-inline-flex ' >Devotional</button>

</div>
<div className='mt-3'>
<button className='text-danger pty  d-inline-flex ' >Sci-fi</button>
<button className='text-danger pty ms-3  d-inline-flex ' >Family</button>
<button className='text-danger pty ms-3  d-inline-flex ' >Period</button>
</div>
<div className='mt-3'>
<button className='text-danger pty1  d-inline-flex ' >Documentary</button>
<button className='text-danger pty ms-3  d-inline-flex ' >Fantasy</button>

</div>
<div className='mt-3'>
<button className='text-danger pty  d-inline-flex ' >Musical</button>
<button className='text-danger pty1 ms-3  d-inline-flex ' >Psychological</button>

</div>
<div className='mt-3'>
<button className='text-danger pty  d-inline-flex ' >Social</button>
<button className='text-danger pty ms-3  d-inline-flex ' >Sports</button>

</div>
    </div>
  </div>

  
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFive">
      <button className=" Movie1" type="" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      
      <p className=''>More Filters</p>
  
  
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse Movie9" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
    <div>


<button className='text-danger pty1  d-inline-flex '>Outdoor Events</button>
<button  className='text-danger pty1  ms-3 d-inline-flex'  >Fast Filling</button>

</div>
<div className='mt-3'>

<button className='text-danger pty1  d-inline-flex ' >Kids Allowed</button>
<button className='text-danger pty1 ms-3 d-inline-flex' >Must  Attend</button>

</div>
<div className='mt-3'>

<button className='text-danger pty5  d-inline-flex ' >Unmissable Events</button>

</div>
<div className='mt-3'>

<button className='text-danger pty1  d-inline-flex ' >Kids Activities</button>
<button className='text-danger pty1 ms-3  d-inline-flex ' >Offers for you</button>

</div>
<div className='mt-3'>
<button className='text-danger pty1  d-inline-flex ' >World Music</button>
<button className='text-danger pty1 ms-3  d-inline-flex ' >Online Streaming</button>

</div>
<div className='mt-3'>
<button className='text-danger pty2  d-inline-flex ' >Masterclass</button>
<button className='text-danger pty ms-3  d-inline-flex ' >Talks</button>

</div>

    </div>
    </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingSix">
      <button className=" Movie1" type="" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      
      <p className=''>Price</p>
  
  
      </button>
    </h2>
    <div id="flush-collapseSix" className="accordion-collapse collapse Movie5" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
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

export default Playbar
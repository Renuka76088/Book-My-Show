import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <>
    <div className='p-5'>
        <h2 className='fo'>Filters</h2>
    </div>
  

    <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="Movie1" type="" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <p className=''>Language</p>
      </button>
    </h2>
    <div id="flush-collapseOne" className=" Movie accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
    <div>


<button className='text-danger pty  d-inline-flex '>English</button>
<button  className='text-danger pty  ms-3 d-inline-flex'  >Telugu</button>
<button className='text-danger pty ms-3 d-inline-flex ' >Hindi</button>
</div>
<div className='mt-3'>

<button className='text-danger pty  d-inline-flex ' >Kannad</button>
<button className='text-danger pty ms-3 d-inline-flex' >Tamil</button>
<button className='text-danger pty2 ms-3 d-inline-flex' >Malayalam</button>
</div>
<div className='mt-3'>

<button className='text-danger pty   d-inline-flex ' >Bengali</button>
<button className='text-danger pty2 ms-3 d-inline-flex ' >English 7D</button>
</div>
<div className='mt-3'>

<button className='text-danger pty1  d-inline-flex ' >Multi Language</button>
<button className='text-danger pty2 ms-3  d-inline-flex ' >Assamese</button>
</div>
<button className='text-danger pty ms-3 d-inline-flex mt-3' >Odia</button>

</div>
</div>
</div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className=" Movie1" type="" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      
      <p className=''>Genres</p>
  
  
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse Movie3" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
    <div>


<button className='text-danger pty  d-inline-flex '>Drama</button>
<button  className='text-danger pty  ms-3 d-inline-flex'  >Action</button>
<button className='text-danger pty ms-3 d-inline-flex ' >Thriller</button>
</div>
<div className='mt-3'>

<button className='text-danger pty  d-inline-flex ' >Comedy</button>
<button className='text-danger pty ms-3 d-inline-flex' >Romentic</button>

</div>
<div className='mt-3'>

<button className='text-danger pty2   d-inline-flex ' >Adventure</button>
<button className='text-danger pty ms-3 d-inline-flex ' >Horror</button>
<button className='text-danger pty2   d-inline-flex ' >Animation</button>
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
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="Movie1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <p className=''>Format</p>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse Movie" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
    <div>


    <button className='text-danger pty3  d-inline-flex '>2D</button>
    <button  className='text-danger pty3  ms-3 d-inline-flex'  >3D</button>
    <button className='text-danger pty ms-3 d-inline-flex ' >4DX</button>
    <button className='text-danger pty ms-3 d-inline-flex ' >4DX 3D</button>
    </div>
    <div className='mt-3'>

    <button className='text-danger pty2  d-inline-flex ' >IMAX 2D</button>
    <button className='text-danger pty3 ms-3 d-inline-flex' >ICE</button>
    <button className='text-danger pty1 ms-3 d-inline-flex' >3D SCREEN X</button>
    </div>
    <div className='mt-3'>

    <button className='text-danger pty3   d-inline-flex ' >7D</button>
    <button className='text-danger pty2 ms-3 d-inline-flex ' >MX4D 3D</button>
    <button className='text-danger pty2 ms-3 d-inline-flex ' >ICE 3D</button>
    </div>
    <div className='mt-3'>

    <button className='text-danger pty1  d-inline-flex ' >2D SCREEN X</button>
    <button className='text-danger pty2 ms-3  d-inline-flex ' >IMAX 3D</button>
    </div>
    <button className='text-danger pty ms-3 d-inline-flex mt-3' >MX4D</button>
   
  </div>
</div>


    <div className='mt-3'>
     <button className='hit'>Browse by Cinemas</button>
    </div>
    
  

    
    
    </>
  )
}

export default Sidebar
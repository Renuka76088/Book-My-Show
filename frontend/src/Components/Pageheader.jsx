import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Pageheader.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Pageheader() {
  return (
    <>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img width={130} src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><input  type="text" placeholder='Search for Movies, Events, Plays, Sports, and Activities' style={{width:'600px'}} /></a>
        </li>
        
       
      </ul>
      <label class="nav-item dropdown ">
          <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Indore
          </a>
          
        </label>
        <label class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"><button className='btn btn-danger text-light ms-3'>Sign in</button></a>
        </label>
      <form class="d-flex">
      <FontAwesomeIcon icon={faBars} className='ms-3' size='xl' />
        
      </form>
    </div>
  </div>
</nav>
    </div>

    <div className='d-inline-flex'>
        <p >Movies</p>
        <p>Stream</p>
        <p>Events</p>
        <p>Plays</p>
        <p>Sports</p>
        <p>Activities</p>
        <p className='space'>ListYourShow</p>
        <p>Corporates</p>
        <p>Offers</p>
        <p>Gift Cards</p>
        
    </div>
    {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Stream</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Plays</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Activities</a>
        </li>
     
      
       
       
      </ul>
      <form class="d-flex">
      <label class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">ListYourShow</a>
        </label>
      <label class="nav-item">
          <a class="nav-link active ms-3" aria-current="page" href="#">Corporates</a>
        </label>
      <label class="nav-item">
          <a class="nav-link active ms-3" aria-current="page" href="#">Offers</a>
        </label>
      <label class="nav-item">
          <a class="nav-link active ms-3" aria-current="page" href="#">Gift Cards</a>
        </label>
     
      </form>
    </div>
  </div>
</nav> */}
    

    
    
    </>
  )
}

export default Pageheader
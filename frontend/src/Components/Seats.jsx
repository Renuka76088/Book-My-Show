import React from 'react'
import './Seats.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Seats() {
  return (
    <>
    <div className='ms-5'>
        <h5>UI(2024) <p className='omy mt-4 text-dark d-inline-flex'>UA</p></h5>
        <h6>Prasads Multiplex: Hyderabad | Today, 24 Dec, 08:30 PM</h6>
    </div>
    <div className='container-fluid'>
      <h5 className='text-secondary d-inline-flex ms-5'>A</h5>

    {/* <p className='seats ms-5'>1</p> */}
    <button className="seats ms-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">1</button>

<div class="offcanvas offcanvas-bottom" style={{height:'100px',width:'1700px'}} tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  
  <div class="offcanvas-body nav justify-content-center">
    <button className='btn btn-danger text-light '  data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{height:'60px',width:'500px'}}> <h4> Pay Rs.400</h4>  </button>
    
    



</div>
</div>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class=" modal-dialog ">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Terms & Conditions</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      1. Admission is at managements discretion. <br />
2. Tickets are required for children 3 years and older. <br />
3. No entry for those under 18 years for A-rated movies. <br />
4. Schedules and rates may change without notice. <br />
5. Collect pre-ordered food & drinks from F&B counters. <br />
6. Bags, food, helmets, and handbags are not allowed; use the baggage counter. <br />
7. 3D ticket prices include glasses rental. <br />
8. No outside food or drinks allowed. <br />
9. Management decisions are final. <br />
10. Only messages from online booking partners are accepted. <br />
11. No printed or forwarded messages for tickets or F&B. <br />
12. No entry for patrons under the influence of alcohol or drugs. <br />
13. Arrive 20 minutes early to avoid traffic. <br />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
        <Link to='/Booking'>
        <button type="button" class="btn btn-danger text-light" >Accept</button>
        
        </Link>
      </div>
    </div>
  </div>
</div>

    <p className='seats'  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">2</p>
    <p className='seats'>3</p>
    <p className='seats'>4</p>
    <p className='seats'>5</p>
    <p className='seats'>6</p>
    <p className='seats'>7</p>
    <p className='seats'>8</p>
    <p className='seats'>9</p>
    <p className='seats'>10</p>
    <p className='seats'>11</p>
    <p className='seats'>12</p>
    <p className='seats'>13</p>
    <p className='seats'>14</p>
    <p className='seats'>15</p>
    <p className='seats'>16</p>
    <p className='seats'>17</p>
    <p className='seats'>18</p>
    <p className='seats'>19</p>
    <p className='seats'>20</p>
    <p className='seats'>21</p>
    <p className='seats'>22</p>
    <p className='seats'>23</p>
    <p className='seats'>24</p>
    <p className='seats'>25</p>
    <p className='seats'>26</p>
    <p className='seats'>27</p>
    <p className='seats'>28</p>
    <p className='seats'>29</p>
    <p className='seats'>30</p><br />
    <h5 className='text-secondary d-inline-flex ms-5'>B</h5>
    <p className='seats ms-5'>1</p>
    <p className='seats'>2</p>
    <p className='seats'>3</p>
    <p className='seats'>4</p>
    <p className='seats'>5</p>
    <p className='seats'>6</p>
    <p className='seats'>7</p>
    <p className='seats'>8</p>
    <p className='seats'>9</p>
    <p className='seats'>10</p>
    <p className='seats'>11</p>
    <p className='seats'>12</p>
    <p className='g'>13</p>
    <p className='seats'>14</p>
    
     <p className='g ko'>15</p> 
    <p className='g '>16</p>
    <p className='g'>17</p> 
    <p className='seats '>18</p>
    <p className='seats'>19</p>
    <p className='seats'>20</p>
    <p className='seats'>21</p>
    <p className='seats'>22</p>
    <p className='seats'>23</p>
    <p className='seats'>24</p>
    <p className='seats'>25</p>
    <p className='seats'>26</p>
    <p className='seats '>27</p>
    <p className='seats '>28</p><br />
    <h5 className='text-secondary d-inline-flex ms-5'>C</h5>
    <p className='seats ms-5'>1</p>
    <p className='seats'>2</p>
    <p className='seats'>3</p>
    <p className='seats'>4</p>
    <p className='seats'>5</p>
    <p className='seats'>6</p>
    <p className='seats'>7</p>
    <p className='seats'>8</p>
    <p className='seats'>9</p>
    <p className='seats'>10</p>
    <p className='seats'>11</p>
    <p className='seats'>12</p>
    <p className='seats'>13</p>
    <p className='seats'>14</p>
    <p className='seats ko'>15</p>
    <p className='seats'>16</p>
    <p className='seats'>17</p>
    <p className='seats'>18</p>
    <p className='seats'>19</p>
    <p className='seats'>20</p>
    <p className='seats'>21</p>
    <p className='seats'>22</p>
    <p className='seats'>23</p>
    <p className='seats'>24</p>
    <p className='seats'>25</p>
    <p className='seats'>26</p>
    <p className='seats'>27</p>
    <p className='seats'>28</p><br />
    <h5 className='text-secondary d-inline-flex ms-5'>D</h5>
    <p className='seats ms-5'>1</p>
    <p className='seats'>2</p>
    <p className='seats'>3</p>
    <p className='seats'>4</p>
    <p className='seats'>5</p>
    <p className='seats'>6</p>
    <p className='seats'>7</p>
    <p className='seats'>8</p>
    <p className='seats'>9</p>
    <p className='seats'>10</p>
    <p className='seats'>11</p>
    <p className='seats'>12</p>
    <p className='seats'>13</p>
    <p className='seats'>14</p>
    <p className='seats ko'>15</p>
    <p className='seats'>16</p>
    <p className='seats'>17</p>
    <p className='seats'>18</p>
    <p className='seats'>19</p>
    <p className='seats'>20</p>
    <p className='seats'>21</p>
    <p className='seats'>22</p>
    <p className='seats'>23</p>
    <p className='seats'>24</p>
    <p className='seats'>25</p>
    <p className='seats'>26</p>
    <p className='seats'>27</p>
    <p className='seats'>28</p><br />
    <h5 className='text-secondary d-inline-flex ms-5'>E</h5>
    <p className='seats ms-5'>1</p>
    <p className='seats'>2</p>
    <p className='seats'>3</p>
    <p className='seats'>4</p>
    <p className='seats'>5</p>
    <p className='seats'>6</p>
    <p className='seats'>7</p>
    <p className='seats'>8</p>
    <p className='seats'>9</p>
    <p className='seats'>10</p>
    <p className='seats'>11</p>
    <p className='seats'>12</p>
    <p className='seats'>13</p>
    <p className='seats'>14</p>
    <p className='seats ko'>15</p>
    <p className='seats '>16</p>
    <p className='seats'>17</p>
    <p className='seats'>18</p>
    <p className='seats'>19</p>
    <p className='seats'>20</p>
    <p className='seats'>21</p>
    <p className='seats'>22</p>
    <p className='seats'>23</p>
    <p className='seats'>24</p>
    <p className='seats'>25</p>
    <p className='seats'>26</p>
    <p className='seats'>27</p>
    <p className='seats'>28</p><br />
    <h5 className='text-secondary d-inline-flex ms-5'>F</h5>
    <p className='seats ms-5'>1</p>
    <p className='seats'>2</p>
    <p className='seats'>3</p>
    <p className='seats'>4</p>
    <p className='seats'>5</p>
    <p className='seats'>6</p>
    <p className='seats'>7</p>
    <p className='seats'>8</p>
    <p className='seats'>9</p>
    <p className='seats'>10</p>
    <p className='seats'>11</p>
    <p className='seats'>12</p>
    <p className='seats'>13</p>
    <p className='seats'>14</p>
    <p className='g ko'>15</p>
    <p className='seats'>16</p>
    <p className='seats'>17</p>
    <p className='seats'>18</p>
    <p className='seats'>19</p>
    <p className='seats'>20</p>
    <p className='seats'>21</p>
    <p className='seats'>22</p>
    <p className='seats'>23</p>
    <p className='seats'>24</p>
    <p className='seats'>25</p>
    <p className='seats'>26</p>
    <p className='seats'>27</p>
    <p className='seats'>28</p><br />
    <h5 className='text-secondary mt-5 d-inline-flex ms-5'>G</h5>
    <p className='seats ms-5'>1</p>
    <p className='seats'>2</p>
    <p className='seats'>3</p>
    <p className='seats'>4</p>
    <p className='seats'>5</p>
    <p className='seats'>6</p>
    <p className='seats'>7</p>
    <p className='seats'>8</p>
    <p className='seats'>9</p>
    <p className='seats'>10</p>
    <p className='seats'>11</p>
    <p className='seats'>12</p>
    <p className='seats'>13</p>
    <p className='seats'>14</p>
    <p className='seats ko'>15</p>
    <p className='seats'>16</p>
    <p className='seats'>17</p>
    <p className='seats'>18</p>
    <p className='seats'>19</p>
    <p className='seats'>20</p>
    <p className='seats'>21</p>
    <p className='seats'>22</p>
    <p className='seats'>23</p>
    <p className='seats'>24</p>
    <p className='seats'>25</p>
    <p className='seats'>26</p>
    <p className='seats'>27</p>
    <p className='seats'>28</p><br />
    <h5 className='text-secondary d-inline-flex ms-5'>H</h5>
    <p className='seats ms-5'>1</p>
    <p className='seats'>2</p>
    <p className='seats'>3</p>
    <p className='seats'>4</p>
    <p className='seats'>5</p>
    <p className='seats'>6</p>
    <p className='seats'>7</p>
    <p className='seats'>8</p>
    <p className='seats'>9</p>
    <p className='seats'>10</p>
    <p className='seats'>11</p>
    <p className='seats'>12</p>
    <p className='seats'>13</p>
    <p className='seats'>14</p>
    <p className='seats ko'>15</p>
    <p className='seats'>16</p>
    <p className='seats'>17</p>
    <p className='seats'>18</p>
    <p className='seats'>19</p>
    <p className='seats'>20</p>
    <p className='seats'>21</p>
    <p className='seats'>22</p>
    <p className='seats'>23</p>
    <p className='seats'>24</p>
    <p className='seats'>25</p>
    <p className='seats'>26</p>
    <p className='seats'>27</p>
    <p className='seats'>28</p><br />
    <h5 className='text-secondary d-inline-flex ms-5'>I</h5>
    <p className='seats ms-5'>1</p>
    <p className='seats'>2</p>
    <p className='seats'>3</p>
    <p className='seats'>4</p>
    <p className='seats'>5</p>
    <p className='seats'>6</p>
    <p className='seats'>7</p>
    <p className='seats'>8</p>
    <p className='seats'>9</p>
    <p className='seats'>10</p>
    <p className='seats'>11</p>
    <p className='seats'>12</p>
    <p className='seats'>13</p>
    <p className='seats'>14</p>
    <p className='seats ko'>15</p>
    <p className='seats'>16</p>
    <p className='seats'>17</p>
    <p className='seats'>18</p>
    <p className='seats'>19</p>
    <p className='seats'>20</p>
    <p className='seats'>21</p>
    <p className='seats'>22</p>
    <p className='seats'>23</p>
    <p className='seats'>24</p>
    <p className='seats'>25</p>
    <p className='seats'>26</p>
    <p className='seats'>27</p>
    <p className='seats'>28</p><br />
    <h5 className='text-secondary d-inline-flex ms-5'>J</h5>
    <p className='seats ms-5'>1</p>
    <p className='seats'>2</p>
    <p className='seats'>3</p>
    <p className='seats'>4</p>
    <p className='seats'>5</p>
    <p className='seats'>6</p>
    <p className='seats'>7</p>
    <p className='seats'>8</p>
    <p className='seats'>9</p>
    <p className='seats'>10</p>
    <p className='seats'>11</p>
    <p className='seats'>12</p>
    <p className='seats'>13</p>
    <p className='seats'>14</p>
    <p className='seats ko'>15</p>
    <p className='seats'>16</p>
    <p className='seats'>17</p>
    <p className='seats'>18</p>
    <p className='seats'>19</p>
    <p className='seats'>20</p>
    <p className='seats'>21</p>
    <p className='seats'>22</p>
    <p className='seats'>23</p>
    <p className='seats'>24</p>
    <p className='seats'>25</p>
    <p className='seats'>26</p>
    <p className='seats'>27</p>
    <p className='seats'>28</p><br />
    <h5 className='text-secondary d-inline-flex ms-5'>K</h5>
    <p className='seats ms-5'>1</p>
    <p className='seats'>2</p>
    <p className='seats'>3</p>
    <p className='seats'>4</p>
    <p className='seats'>5</p>
    <p className='seats'>6</p>
    <p className='seats'>7</p>
    <p className='seats'>8</p>
    <p className='seats'>9</p>
    <p className='seats'>10</p>
    <p className='seats'>11</p>
    <p className='seats'>12</p>
    <p className='seats'>13</p>
    <p className='seats'>14</p>
    <p className='seats ko'>15</p>
    <p className='seats'>16</p>
    <p className='seats'>17</p>
    <p className='seats'>18</p>
    <p className='seats'>19</p>
    <p className='seats'>20</p>
    <p className='seats'>21</p>
    <p className='seats'>22</p>
    <p className='seats'>23</p>
    <p className='seats'>24</p>
    <p className='seats'>25</p>
    <p className='seats'>26</p>
    <p className='seats'>27</p>
    <p className='seats'>28</p><br />
    <h5 className='text-secondary d-inline-flex ms-5'>L</h5>
    <p className='seats ms-5'>1</p>
    <p className='seats'>2</p>
    <p className='seats'>3</p>
    <p className='seats'>4</p>
    <p className='seats'>5</p>
    <p className='seats'>6</p>
    <p className='seats'>7</p>
    <p className='seats'>8</p>
    <p className='seats'>9</p>
    <p className='seats'>10</p>
    <p className='seats'>11</p>
    <p className='seats'>12</p>
    <p className='seats'>13</p>
    <p className='seats'>14</p>
    <p className='seats ko'>15</p>
    <p className='seats'>16</p>
    <p className='seats'>17</p>
    <p className='seats'>18</p>
    <p className='seats'>19</p>
    <p className='seats'>20</p>
    <p className='seats'>21</p>
    <p className='seats'>22</p>
    <p className='seats'>23</p>
    <p className='seats'>24</p>
    <p className='seats'>25</p>
    <p className='seats'>26</p>
    <p className='seats'>27</p>
    <p className='seats'>28</p><br />
    <h5 className='text-secondary d-inline-flex ms-5'>M</h5>
    <p className='seats ms-5'>1</p>
    <p className='seats'>2</p>
    <p className='seats'>3</p>
    <p className='seats'>4</p>
    <p className='seats'>5</p>
    <p className='seats'>6</p>
    <p className='seats'>7</p>
    <p className='seats'>8</p>
    <p className='seats'>9</p>
    <p className='seats'>10</p>
    <p className='seats'>11</p>
    <p className='seats'>12</p>
    <p className='seats'>13</p>
    <p className='seats'>14</p>
    <p className='seats ko'>15</p>
    <p className='seats'>16</p>
    <p className='seats'>17</p>
    <p className='seats'>18</p>
    <p className='seats'>19</p>
    <p className='seats'>20</p>
    <p className='seats'>21</p>
    <p className='seats'>22</p>
    <p className='seats'>23</p>
    <p className='seats'>24</p>
    <p className='seats'>25</p>
    <p className='seats '>26</p>
   
    
    </div>

    <div className='nav justify-content-center'>

    <p className=''>
      
      <img width="400px" className='d-inline-flex' src="https://img.freepik.com/premium-vector/nail-knife-icon-cartoon-nail-knife-vector-icon-web-design-isolated-white-background_98402-49067.jpg?w=740" alt="" />
    <h4 className='d-inline-flex'>All eyes this way please!</h4>
      </p>
    </div>
    <div className='nav justify-content-center'>
      <input  className='d-inline-flex seats ms-5' /><h4 className='d-inline-flex ms-5'> Available</h4>
      <input  className='d-inline-flex seats ms-5'  /><h4 className='d-inline-flex ms-5' >selected</h4>
      <input  className='d-inline-flex seats ms-5'  /><h4 className='d-inline-flex ms-5' >sold</h4>
    </div>
    
    </>
  )
}

export default Seats
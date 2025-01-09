import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Pageheader from './Components/Pageheader'
import Myshowitems from './Components/Pages/Myshowitems'
import Footer from './Components/Footer'
import Movies from './Components/Movies'
import Stream from './Components/Stream'
import Events from './Components/Events'
import Plays from './Components/Plays'
import Sports from './Components/Sports'
import Activities from './Components/Activities'
import Listyourshow from './Components/Listyourshow'
import Corporates from './Components/Corporates'
import Offers from './Components/Offers'
import Giftcards from './Components/Giftcards'
import Sidebar from './Components/Sidebar'
import Authentication from './Components/Signup'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import Forgotpassword from './Components/Forgotpassword'
import Resetpassword from './Components/Resetpassword'
import { Profile } from './Components/User/profile'
import Verify from './Components/verify'
import MovieDetails from './Components/MovieDetails'
import Theter from './Components/theter'
import Seats from './Components/Seats'
import Booking from './Components/Booking'
import Payment from './Components/Payment'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <BrowserRouter>
        <Pageheader />
        <Routes>
          <Route path='/' element={<Myshowitems />} />

          <Route path='/Movies' element={<Movies />} />

          <Route path='/Stream' element={<Stream />} />
          <Route path='/Events' element={<Events />} />
          <Route path='/Plays' element={<Plays />} />
          <Route path='/Sports' element={<Sports />} />

          <Route path='/Activities' element={<Activities />} />
          <Route path='/Listyourshow' element={<Listyourshow />} />
          <Route path='/Corporates' element={<Corporates />} />
          <Route path='/Offers' element={<Offers />} />
          <Route path='/Giftcards' element={<Giftcards />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Forgot-password' element={<Forgotpassword />} />
          <Route path='/Reset-password' element={<Resetpassword />} />
          <Route path='/user/profile' element={<Profile />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/MovieDetails' element={<MovieDetails />} />
          <Route path='/Theter' element={<Theter/>} />
          <Route path='/Seats' element={<Seats/>} />
          <Route path='/Booking' element={<Booking/>} />
          <Route path='/Payment' element={<Payment/>} />
          <Route path='/Profile' element={<Profile/>} />





        </Routes>
      <Footer />
      </BrowserRouter>

    </>
  )
}

export default App

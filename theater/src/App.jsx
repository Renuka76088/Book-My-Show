import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route,useLocation } from 'react-router-dom'
import Login from './Login'
import Header from './Shared/Header'
import Footer from './Shared/Footer'
import Sidebar from './Shared/Sidebar'
import Register from './Pages/Register'
import ForgotPassword from './Pages/Forgotpassword'
import ResetPassword from './Pages/ResetPassword'
import Dashboard from './Pages/Dashboard'
import Verify from './Pages/Verify'
import ChangePassword from './Pages/ChangePassword'
import Profile from './Pages/Profile'
import EditProfile from './Pages/EditProfile'
import AddShows from './Pages/AddShows'


function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      
        <div id="wrapper">


        {
              location.pathname!=='/'&& location.pathname!=='/register'&& location.pathname!=='/Forgot-Password'&& location.pathname!=='/verify'&& location.pathname!=='/Reset-password'&& <Sidebar />
            }



          <div id="content-wrapper" className="d-flex flex-column">


            <div id="content">

             {
              location.pathname!=='/'&& location.pathname!=='/register'&& location.pathname!=='/Forgot-Password'&&  location.pathname!=='/Reset-password'&& location.pathname!=='/verify'&&< Header />
            }


              <div className="container-fluid">

                <Routes>
                  <Route path='/' element={<Login />} />
                  <Route path='/register' element={<Register/>} />
                  <Route path='/Forgot-Password' element={<ForgotPassword/>} />
                  <Route path='/Reset-Password' element={<ResetPassword/>} />
                  <Route path='/Dashboard' element={<Dashboard/>} />
                  <Route path='/Verify' element={<Verify/>} />
                  <Route path='/ChangePassword' element={<ChangePassword/>} />
                  <Route path='/Profile' element={<Profile/>} />
                  <Route path='/EditProfile' element={<EditProfile/>} />
                  <Route path='/AddShows' element={<AddShows/>} />
                
                </Routes>


              </div>


            </div>

            <footer className="sticky-footer bg-white">
              <Footer />
            </footer>


          </div>


        </div>
        

        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
    


    </>
  )
}

export default App

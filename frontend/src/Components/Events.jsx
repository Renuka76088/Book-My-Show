import React from 'react'
import './Events.css'
import Eventbar from './Eventbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'



function Events() {
  return (
    <>
    <div className='coi'>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3 kop'>
        <Eventbar/>
        </div>
        <div className='col-md-9 lop'>
          <div>

           <h3 className='fomo mt-5'>Events in Bengaluru</h3>
           <p className='pmy1 mt-4 text-danger  d-inline-flex'>Workshops</p>
           <p className='pmy1 mt-4 text-danger ms-2 d-inline-flex'>Comedy Shows</p>
           <p className='pmy1 mt-4 text-danger ms-2 d-inline-flex'>Music Shows</p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Meetups</p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Kids</p>
           <p className='pmy1 mt-4 text-danger ms-2 d-inline-flex'>Performances</p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Exhibitions</p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Screening</p>
           <p className='pmy  text-danger ms-2 d-inline-flex'>Talks</p>
           <p className='pmy1  text-danger ms-2 d-inline-flex'>Conferences</p>
        
           <p className='pmy1  text-danger ms-2 d-inline-flex'>Celebrity Wishes</p>
           <p className='pmy1  text-danger ms-2 d-inline-flex'>New year Parties</p>
           <p className='pmy  text-danger ms-2 d-inline-flex'>Role Play</p>
          </div>
          <div className='container mt-5'>
            <div className='row'>
              <div className='col-md-9'>
              <h4 className='fomo '>Coming Soon</h4>
              </div>
              <div className='col-md-3'>
                <p className='text-danger'>Explore Upcoming Movies</p>
                </div>
            </div>
            </div>

            <div className='container mt-5 '>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMyBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00406791-zdnvvmnlut-portrait.jpg" alt="" />
              <h5 className='mt-3 fomo'>Bandland 2024 ft. A7X, Extreme, Bloodtwoo...</h5>
              <p>Nice Grounds, BIEC:...a</p>
              <p>Concerts</p>
              <p> Rs 3499 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411944-quvakzqxhl-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Vidyasagar The Greatest Hits Live in....</h5>
              <p>South Avenue Grounds:...</p>
              <p>Concerts</p>
              <p>Rs 749 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409096-dlfyuezmhj-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Sunidhi Chauhan:I AM HOME Concert</h5>
              <p>Bhartiya Mall Of...</p>
              <p>Concerts</p>
              <p>Rs 2499 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00374294-xhvnxtdcnj-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>SATURDAY Bollywood Glow BIGG DADDY...</h5>
              <p>Bigg Daddy: Bengaluru </p>
              <p>Music Festivals</p>
              <p>FREE</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415424-ucmafcapyj-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Live musical Performance by..</h5>
              <p>Fan Park,Phoenix Mall O...</p>
              <p>Concerts</p>
              <p>Rs 999</p>
              
              <p>Malayalam</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413975-epyvaqqcdk-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Forum Vibe Feat AGAM</h5>
              <p>Forum South Bengaluru</p>
              <p>Concerts</p>
              <p>Rs 399 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408539-buyhdgyqkq-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>SO mini THINGS! With Shraddha Jain-...</h5>
              <p>Jnana Jyoti Auditorium...</p>
              <p>Stand up Comedy</p>
              <p>Rs 999 onwards</p>
           
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMyBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00346737-hdmnrhduqt-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Vipul Goyel-Unleashed</h5>
              <p>BOHO Rooftop Restaura...</p>
              <p>Stand up Comedy</p>
              <p>Rs 999</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414680-vrenwvjvfk-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Shaan Live In Concert-Bengaluru</h5>
              <p>Phoenix Marketcity,...</p>
              <p>Concerts</p>
              <p>Rs 799 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyNSBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413717-xxescrgylv-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Joh Bolta Hai Wohi Hota Ft Harsh Gujral</h5>
              <p>Courtyard, Phoenix Mark....</p>
              <p>Stand up Comedy</p>
              <p>Rs 799 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA5IE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00401643-klhgfhwczc-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Prateek Kuhad Silhouettes Tour-...</h5>
              <p>Bhartiya Mall Of..</p>
              <p>Concerts</p>
              <p>Rs 1799 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyNSBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00393658-vephneucrw-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Late Night Sexy Jokes-Best of Banglore.</h5>
              <p>The Underground Come...</p>
              <p>Stand up Comedy</p>
              <p>Rs 299</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411944-quvakzqxhl-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Vidyasagar The Greatest Hits Live In...</h5>
              <p>South Avenue Grounds:...</p>
              <p>Concerts</p>
              <p>Rs 749 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407488-qtmntgqvmr-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Nishant Suri LIVE</h5>
              <p>The Underground Come...</p>
              <p>Stand up Comedy</p>
              <p>Rs 799</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411050-jpsuaryesd-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Sunburn Arena Ft. Charlotte de Witte</h5>
              <p>Manpho Convention...</p>
              <p>Concerts</p>
              <p>Rs 10000</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNyBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413257-fwfjyjmdvz-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Hoemonal By Sumukhi Suresh</h5>
              <p>Good Shepherd...</p>
              <p>Stand up Comedy</p>
              <p>Rs 499 onwards</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00358468-qlmfsdpbxg-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Gaurav Gupta Live-India Tour</h5>
              <p>Good Shepherd...</p>
              <p>Stand up Comedy</p>
              <p>Rs 499 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413438-ujebzlrkjl-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Hari Shankar Live in Bangalore: the.....</h5>
              <p>The Nexus Mall,...</p>
              <p>Concerts</p>
              <p>Rs 399 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMyBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00406791-zdnvvmnlut-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Bandland 2024 ft. A7X, Extreme, Bloodywoo...</h5>
              <p>Nice Grounds, BIEC:...</p>
              <p>Concerts</p>
              <p>Rs 3499 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410964-kztestwfjg-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Shankar Ehsaan Loy Live In Concert...</h5>
              <p>New Horizon College of...</p>
              <p>Concerts</p>
              <p>Rs 799 onwards</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyNCBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00386332-cczpwlpmug-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Uke Tunes With Arijit</h5>
              <p>My School Of Rock:...</p>
              <p>Education</p>
              <p>Rs 1490</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416335-sfmcydwjty-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Lit Halloween Party</h5>
              <p>LIT Gastropub, Church...</p>
              <p>Club Gigs</p>
              <p>Rs 299</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415954-amhlztxsss-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Light It Up-Diwali 2024 at Taj MG Road</h5>
              <p>Taj MG Road:Bengaluru</p>
              <p>Club Gigs</p>
              <p>Rs 249 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00372332-nbnauvdalw-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Halloween Bash PLAY 'N' LEARN</h5>
              <p>Play N Learn, Nexus...</p>
              <p>Entertainment</p>
              <p>Rs 1499</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412836-rarlhajgtu-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>SCC SkyCinema-Diwali Special</h5>
              <p>1 MG Lido Mall...</p>
              <p>Films</p>
              <p>Rs 600 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMyBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00404524-aplxvmqtkm-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Karan Aujla-It was All A Dream (Bengaluru)</h5>
              <p>Venue To Be Announced:..</p>
              <p>Concerts</p>
              <p>Rs 3999 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxIERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412718-nqslpppwzp-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Raghu Dixit Live-Bengaluru</h5>
              <p>Phoenix Marketcity,...</p>
              <p>Concerts</p>
              <p>Rs 499 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyMyBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00313985-wbvssnlcgm-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Stand-Up Comedy in Bengalore</h5>
              <p>BurgerMan Indiranagar:...</p>
              <p>Stand up Comedy</p>
              <p>Rs 149</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00406091-jrtyuvfeuj-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Papon Live in Concert-Bengaluru</h5>
              <p>Phoenix Market City:...</p>
              <p>Concerts</p>
              <p>Rs 749 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414866-zwsjpqtyje-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>CrossOver Halloween ft. ANYASA</h5>
              <p>Kitty Ko: Bengaluru</p>
              <p>Club Gigs</p>
              <p>Rs 299 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxIE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415019-tkzpggztxq-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Rahul Dit-O Live in Kannada Rajyotsava</h5>
              <p>Forum South Bengaluru</p>
              <p>Concerts</p>
              <p>Rs 99 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAyMiBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00404049-wvabckucjk-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Awesome Place-Mantri Square Mall,...</h5>
              <p>Awesome Place: Mantri...</p>
              <p>Entertainment</p>
              <p>Rs 499</p>
            </div>
            </div>
            </div>
            
          
         
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413438-ujebzlrkjl-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Hari Shankar Live in Bangalore: the.....</h5>
              <p>The Nexus Mall,...</p>
              <p>Concerts</p>
              <p>Rs 399 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyNSBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413717-xxescrgylv-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Joh Bolta Hai Wohi Hota Ft Harsh Gujral</h5>
              <p>Courtyard, Phoenix Mark....</p>
              <p>Stand up Comedy</p>
              <p>Rs 799 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409096-wdslhuhsgc-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Sunidhi Chauhan:I AM HOME Concert</h5>
              <p>Bhartiya Mall Of...</p>
              <p>Concerts</p>
              <p>Rs 2499 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00374294-xhvnxtdcnj-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>SATURDAY Bollywood Glow BIGG DADDY...</h5>
              <p>Bigg Daddy: Bengaluru </p>
              <p>Music Festivals</p>
              <p>FREE</p>
            </div>
            </div>
            </div>
            
          
         
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413975-epyvaqqcdk-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Forum Vibe Feat AGAM</h5>
              <p>Forum South Bengaluru</p>
              <p>Concerts</p>
              <p>Rs 399 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408539-buyhdgyqkq-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>SO mini THINGS! With Shraddha Jain-...</h5>
              <p>Jnana Jyoti Auditorium...</p>
              <p>Stand up Comedy</p>
              <p>Rs 999 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMyBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00346737-hdmnrhduqt-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Vipul Goyel-Unleashed</h5>
              <p>BOHO Rooftop Restaura...</p>
              <p>Stand up Comedy</p>
              <p>Rs 999</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414680-vrenwvjvfk-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Shaan Live In Concert-Bengaluru</h5>
              <p>Phoenix Marketcity,...</p>
              <p>Concerts</p>
              <p>Rs 799 onwards</p>
            </div>
            </div>
            </div>
            
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416335-sfmcydwjty-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Lit Halloween Party</h5>
              <p>LIT Gastropub, Church...</p>
              <p>Club Gigs</p>
              <p>Rs 299</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415954-amhlztxsss-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Light It Up-Diwali 2024 at Taj MG Road</h5>
              <p>Taj MG Road:Bengaluru</p>
              <p>Club Gigs</p>
              <p>Rs 249 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00372332-nbnauvdalw-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Halloween Bash PLAY 'N' LEARN</h5>
              <p>Play N Learn, Nexus...</p>
              <p>Entertainment</p>
              <p>Rs 1499</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412836-rarlhajgtu-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>SCC SkyCinema-Diwali Special</h5>
              <p>1 MG Lido Mall...</p>
              <p>Films</p>
              <p>Rs 600 onwards</p>
            </div>
            </div>
            </div>
            
          
         
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA5IE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00401643-klhgfhwczc-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Prateek Kuhad Silhouettes Tour-...</h5>
              <p>Bhartiya Mall Of..</p>
              <p>Concerts</p>
              <p>Rs 1799 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyNSBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00393658-vephneucrw-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Late Night Sexy Jokes-Best of Banglore.</h5>
              <p>The Underground Come...</p>
              <p>Stand up Comedy</p>
              <p>Rs 299</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411944-quvakzqxhl-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Vidyasagar The Greatest Hits Live In...</h5>
              <p>South Avenue Grounds:...</p>
              <p>Concerts</p>
              <p>Rs 749 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407488-qtmntgqvmr-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Nishant Suri LIVE</h5>
              <p>The Underground Come...</p>
              <p>Stand up Comedy</p>
              <p>Rs 799</p>
            </div>
            </div>
            </div>
            
          
         
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410964-kztestwfjg-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Shankar Ehsaan Loy Live In Concert...</h5>
              <p>New Horizon College of...</p>
              <p>Concerts</p>
              <p>Rs 799 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMyBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410091-cneymqpeng-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>SHILPA RAO LIVE IN CONCERT</h5>
              <p>Phoenix Market City:...</p>
              <p>Concerts</p>
              <p>Rs 799 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00368241-wndtewtvde-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Inder Sahani-Live India Tour</h5>
              <p>Just BLR Comedy Club:..</p>
              <p>Stand up Comedy</p>
              <p>Rs 499 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyNCBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00386332-cczpwlpmug-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Uke Tunes With Arijit</h5>
              <p>My School Of Rock:..</p>
              <p>Education</p>
              <p>Rs 1490</p>
            </div>
            </div>
            </div>
            
          
         
           
    
      
    </div>
    <div className='gop'>

      <div className=' nav justify-content-center mt-5'>
      <h3 className='fomo'>Movies in Bengaluru</h3>
      </div>
    </div>
    <div className='gop'>
    
    
    <Swiper
      className=' mt-3'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={8}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
  
    
    
     
    
   
     
  
    
     
          <div className='col-md-12'>
        
           <SwiperSlide><p className='pmy mt-4 text-danger  d-inline-flex'>English</p></SwiperSlide>
          <SwiperSlide> <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Telugu</p></SwiperSlide>
          <SwiperSlide> <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Hindi</p></SwiperSlide>
           <SwiperSlide><p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Kannada</p></SwiperSlide>
          <SwiperSlide> <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Tamil</p></SwiperSlide>
          <SwiperSlide> <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Malayalam</p></SwiperSlide>
          <SwiperSlide> <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Bengali</p></SwiperSlide>
          <SwiperSlide> <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>English 7D</p></SwiperSlide>
          <SwiperSlide> <p className='pmy1 mt-4 text-danger ms-2 d-inline-flex'>Multi Language</p></SwiperSlide>
          <SwiperSlide> <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Assamese</p></SwiperSlide>
        
           <SwiperSlide><p className='pmy   text-danger  d-inline-flex'>Odia</p></SwiperSlide>
    </div>
  






    </Swiper>
    </div>


       
    

      </div>

    </div>
    </div>
    </>
  )
}

export default Events
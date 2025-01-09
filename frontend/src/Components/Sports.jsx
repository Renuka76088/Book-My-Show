import React from 'react'

import Sportsbar from './Sportsbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function Sports() {
  return (
    <>
    
    <div className='coi'>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3 kop'>
        <Sportsbar/>
        </div>
        <div className='col-md-9 lop'>
          <div>

           <h3 className='fomo mt-5'>Sports in Bengaluru</h3>
           <p className='pmy mt-4 text-danger  d-inline-flex'>Running</p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Chess</p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Football</p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Badminton</p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Kabaddi</p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Cricket</p>
           <p className='pmy1 mt-4 text-danger ms-2 d-inline-flex'>Mixed Martial Arts</p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Athletics</p>
         
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
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyNCBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00397687-ljnvwegzdv-portrait.jpg" alt="" />
              <h5 className='mt-3 fomo'>Let`s Play Cricket</h5>
              <p>Sporthood UWA Turf:...</p>
              <p>T10</p>
              <p>Rs 499</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyNSBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413217-gvlsettckj-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Cricket Conditioning</h5>
              <p>The Fit Ground Bengaluru</p>
              <p>ODI</p>
              <p>Rs 499 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00398684-scspuwdkjn-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>The Fun Boardgames Meetup</h5>
              <p>BurgerMan Indiranagar:..</p>
              <p>Chess</p>
              <p>Rs 199 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA5IE5vdiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415305-kkthbbknvn-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Church Street Gaming by the Boardgame Den</h5>
              <p>The Boardgame Den:..</p>
              <p>Chess</p>
              <p>Rs 450</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00394478-hxtpzzgseb-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Chess Connect</h5>
              <p>RMZ Infinit: Bengaluru</p>
              <p>Chess</p>
              <p>Rs 300</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415199-nfdtjrnyhw-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>October Endurance Virtual Marathon</h5>
              <p>Your Place and Your Tim..</p>
              <p>Marathon</p>
              <p>Rs 349</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00310955-pdmfnxqels-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Vande Mataram Virtual Marathon</h5>
              <p>Your Place and Your Tim..</p>
              <p>5K</p>
              <p>Rs 390 onwards</p>
           
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412452-lfzlnhsjgz-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Chess Championship (Online) For All Age</h5>
              <p>Your Place and Your Tim..</p>
              <p>Chess</p>
              <p>Rs 319</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409810-epchmejqkw-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Board Game On By Board Game Archive</h5>
              <p>The Coffee Brewery:..</p>
              <p>Chess</p>
              <p>Rs 329</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414222-mmmnjphder-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Biggest Mixed Corporate Intermedia...</h5>
              <p>Machaxi Pragathi...</p>
              <p>Badminton</p>
              <p>Rs 699 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxIE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416238-tjfcgjmnsg-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Veera Kannadiga: Virtual Marathon</h5>
              <p>Your Place and Your Tim..</p>
              <p>5K</p>
              <p>Rs 149</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxMCBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415304-bkmwrrypae-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Church Street Gaming by the Boardgame Den</h5>
              <p>The Boardgame Den...</p>
              <p>Chess</p>
              <p>Rs 450</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00405757-pnnxbdckla-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Junior Wonder Virtual Marathon for Kids</h5>
              <p>Your Place and Your Tim..</p>
              <p>Marathon</p>
              <p>Rs 449 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxIE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416582-uheanpamqd-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Lets Play Football</h5>
              <p>Sporthood UWA Turf:...</p>
              <p>Football</p>
              <p>Rs 399</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyNCBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00397717-meudhqrnal-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>November Strides Virtual Marathon</h5>
              <p>Your Place and Your Tim..</p>
              <p>Marathon</p>
              <p>Rs 49</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyNCBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413236-wvymxyxukt-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Ace Agility- Badminton & Tennis</h5>
              <p>The Fit Ground: Bengaluru </p>
              <p>Badmintom</p>
              <p>Rs 499 onwards</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNyBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415966-lxjjzlzwse-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Chess Championship (Online) For All Age</h5>
              <p>Your Place and Your Tim...</p>
              <p>Chess</p>
              <p>Rs 319</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408737-twgnmrhryz-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Tricolor Triumph Virtual Run</h5>
              <p>Your Placce and Your Tim..</p>
              <p>Marathon</p>
              <p>Rs 379 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyNCBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413161-cepdqxgkfm-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Bhairadevi</h5>
              <p>UA</p>
              <p>Kannada</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414760-rakwesfcbu-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Yalakunni</h5>
              
              <p>Kannada</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyNCBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00414458-jdzhggkntd-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Porki</h5>
              <p>A</p>
              <p>Kannada</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAzIERlYyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00414460-stcxwalnkg-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Mr.Perfect</h5>
              <p>U</p>
              <p>Telugu,Malayalam</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415590-mrueqtnkvh-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Salaar: Cease Fire-Part 1</h5>
              <p>A</p>
              <p>Telugu,Kannada,Hindi,Tamil</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414995-ffqnsnrydk-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Krishnam Pranaya Sakhi</h5>
              <p>UA</p>
              <p>Kannada</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyNCBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00410843-rsukzyrvfx-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>A.R.M</h5>
              <p>UA</p>
              <p>Malayalam,Tamil,Telgu</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410871-wnwznekbgm-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Kishkindha Kaandam</h5>
              <p>UA</p>
              <p>Malayalam</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00398996-dkpltngvef-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Singham</h5>
              <p>UA</p>
              <p>Hindi</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxIE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415417-kqmsezmare-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Ibbani Tabbida ileyali</h5>
              <p>U</p>
              <p>Kannada</p>
            </div>
            </div>
            </div>
            
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyIE5vdiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382794-ylajlpgjwc-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>A.R.M</h5>
              <p>UA</p>
              <p>Malayalam,Tamil,Telgu</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyNCBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413161-cepdqxgkfm-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Kishkindha Kaandam</h5>
              <p>UA</p>
              <p>Malayalam</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyIE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416671-mscugezrwm-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Singham</h5>
              <p>UA</p>
              <p>Hindi</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414936-qhhjjtpjdr-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Ibbani Tabbida ileyali</h5>
              <p>U</p>
              <p>Kannada</p>
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

export default Sports
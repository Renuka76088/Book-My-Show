import React from 'react'
import './Play.css'
import Playbar from './Playbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


function Plays() {
  return (
    <>
    <div className='coi'>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3 kop'>
        <Playbar/>
        </div>
        <div className='col-md-9 lop'>
          <div>

           <h3 className='fomo mt-5 '>Plays In Bengaluru</h3>
           <p className='pmy mt-4 text-danger  d-inline-flex'>Theatre</p>
           <p className='pmy1 mt-4 text-danger ms-2 d-inline-flex'>Storytelling</p>
           <p className='pmy1 mt-4 text-danger ms-2 d-inline-flex'>Experimental</p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Puppetry</p>
           
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
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412893-ugvesjlqqn-portrait.jpg" alt="" />
              <h5 className='mt-3 fomo'>Tamashey Ka Baajigar</h5>
              <p>Jagriti Theatre: Whitefiel...</p>
              <p>Hindi</p>
              <p>Rs 400</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAyOSBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00352979-fqkkwmdarn-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Kamaroopigal</h5>
              <p>Ranga Shankara:...</p>
              <p>Kannada</p>
              <p>Rs 200</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA5IE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415947-fvjdcdzcwx-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Traasadi Theatre: Whitefiel...</h5>
              <p>Jagriti Theatre: Whitefiel...</p>
              <p>Hindi</p>
              <p>Rs 1000</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413552-fzuzwwkpdh-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Dance Like A Man-Bangaluru</h5>
              <p>Ranga Shankara:...</p>
              <p>English</p>
              <p>Rs 500</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00105263-jrngmkwjmf-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Pukkate Salahe (Comedy Drama)</h5>
              <p>Dr.C Ashwath Kala..</p>
              <p>Kannada</p>
              <p>Rs 150</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416292-qvxkpjrzzn-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Valivadhe</h5>
              <p>Kalagrama Bengaluru</p>
              <p>Kannada</p>
              <p>Rs 200</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00343670-rxljewqygq-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>9 parts of Desire-Bengaluru</h5>
              <p>Ranga Shankara:..</p>
              <p>English</p>
              <p>Rs 500</p>
           
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA5IE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411636-xakujwsdsa-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Disney`s Aladdin Jr.</h5>
              <p>Dr B.R Ambedkar Bhava...</p>
              <p>English</p>
              <p>Rs 1000</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411552-jubeufchba-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>UNGALA NEENGA YEPPADI PAAKKA...</h5>
              <p>Ranga Shankara:...</p>
              <p>Tamil</p>
              <p>Rs 300</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415610-ftlrweklqd-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>The Gallery of Unspoken Tales</h5>
              <p>Atta Galatta: Indiranagar</p>
              <p>Rs 300</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxMCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411603-zewklpxrhm-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>SANGEETH MANAPMAAN</h5>
              <p>Ranga Shankara:..</p>
              <p>Marathi</p>
              <p>Rs 300</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA4IE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411547-vfhwzgzbsq-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>ATHO HIDIMBA KOTHA</h5>
              <p>Ranga Shankara:..</p>
              <p>Bengali</p>
              <p>Rs 300</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415931-dxytbmtcwf-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>I, Josef. An Immersive Multimedia Experience</h5>
              <p>Prestige Centre for...</p>
              <p>English/German</p>
              <p>Rs 399</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCA1IERlYyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412766-wqyabtlejr-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Big Fish</h5>
              <p>St. John`s Auditorium:...</p>
              <p>English</p>
              <p>Rs 550 onwards</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyMyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415886-anaylufjew-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Balladof the Bandits</h5>
              <p>Dairy Circle, Christ..</p>
              <p>English/Kannada</p>
              <p>Rs 200</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxIE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411602-cfuyyrdpbg-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>KARNALGE YAARU BAREYODILLA</h5>
              <p>Ranga Shankara:...</p>
              <p>Kannada</p>
              <p>Rs 200</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzIE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411596-uwbwbydkkx-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>CHAKRAVYUHA</h5>
              <p>Ranga Shankara:..</p>
              <p>Kannada</p>
              <p>Rs 200</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAzMCBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410607-efpbnfmksr-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>NeeNaaNaaDre NaaNeeNaaNaa</h5>
              <p>Ranga Shankara:...</p>
              <p>Kannada</p>
              <p>Rs 250</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416599-fbumutkwrl-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Kirdaar</h5>
              <p>Jagriti Theatre: Whitefiel...</p>
              <p>Bengali/Hindi</p>
              <p>Rs 300</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412893-ugvesjlqqn-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Tamashey Ka Baajigar</h5>
              <p>Jagriti Theatre: Whitefiel...</p>
              <p>Hindi</p>
              <p>Rs 400</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416175-qmxrxjkgyw-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Kaad Rakhai-A Tribal Story</h5>
              <p>Kalagrama (Backside...)</p>
              <p>Kannada</p>
              <p>Rs 150</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412892-aqtzperbhr-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Pocketmaar Drama Company</h5>
              <p>Jagriti Theatre: Whitefiel...</p>
              <p>Hindi</p>
              <p>Rs 400</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00357289-jsgdnlneyk-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Mahabharat Dialogues...</h5>
              <p>Dialogues Cafe,...</p>
              <p>English/Hindi</p>
              <p>Rs 249</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCA2IE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415902-hmgrwfffgn-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>PATANGA PRABHAAVA</h5>
              <p>Ranga Shankara:...</p>
              <p>Kannada</p>
              <p>Rs 200</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416698-upkxtubcqm-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Jalpa</h5>
              <p>Kalagrama (Backside...)</p>
              <p>Kannada</p>
              <p>Rs 150</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNyBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416424-bucymutbtt-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>P.Lankesh`s Kranthi Banthu Kranthi</h5>
              <p>Dr.C Ashwath Kala...</p>
              <p>Kannada</p>
              <p>Rs 200</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNSBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416216-tavudbtzyg-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>The Odd Couple</h5>
              <p>Jagriti Theatre: Whitefiel...</p>
              <p>English</p>
              <p>Rs 400</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00401782-advspdhxqw-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Crabby</h5>
              <p>Ranga Shankara:...</p>
              <p>English</p>
              <p>Rs 250</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416329-trfmpfmxbr-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>KALAPARVA 2024-DROPATHI HELTAVLE</h5>
              <p>Pathi Sabhangana:...</p>
              <p>Kannada</p>
              <p>Rs 200</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414949-yxusxunrnb-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Noor</h5>
              <p>Alliance Francaise:...</p>
              <p>English</p>
              <p>Rs 250</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyNCBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414751-cuwvjxyjcs-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Shivhham</h5>
              <p>Ravindra Kalakshetra:..</p>
              <p>Kannada</p>
              <p>Rs 200</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyNyBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416142-akvblwrsan-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>To Kill A Mockingbird</h5>
              <p>Jagriti Theatre: Whitefiel..</p>
              <p>English</p>
              <p>Rs 300</p>
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

export default Plays
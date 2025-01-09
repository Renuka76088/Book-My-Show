import React from 'react'
import "./Myshowitems.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


function Myshowitems() {
  return (
    <>
    <div className='container-fluid'>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1727710500223_lollapaloozaindia2025web.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1728042216114_webmuktaneww.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>

    <div className='container mt-5'>
        <div className='row'>

            <div className='col-md-10'>
     <h4 className='dark'>Recommended Movies</h4>

            </div>
            <div className='col-md-2'>
     <button className='btn text-danger nav justify-content-end'>View all</button>

            </div>
            
        </div>
    </div>
    <div className='container'>
    <Swiper
      
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={5}
      navigation
     
    >
  
    
    
     
    
   
     
    
    
    
       <SwiperSlide> <Link to="/MovieDetails"><img width={210} src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICAxNS4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00370266-glsbwcmhaz-portrait.jpg'  />
         <h5 className='p-2 text-dark'>UI(2024)</h5>
         <p className='text-dark'>Action/Sci-Fi/Thriller</p></Link>
         </SwiperSlide>
    
       <SwiperSlide>  <img  width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4xLzEwICAxOC45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00395211-skkujsczwy-portrait.jpg' />
       <h5 className='p-2'>Vicky Vidya Ka Woh Wala Video</h5>
       <p>Comedy/Drama/Period</p>
         </SwiperSlide>
       <SwiperSlide>  <img  width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICA0OS42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00370844-ldmqyckrea-portrait.jpg' />
       <h5  className='p-2'>Jigra</h5>
       <p>Action/Drama/Thriller</p>
           </SwiperSlide>
       <SwiperSlide>  <img  width={210} src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTcuM0sgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00398665-exkgqfpfum-portrait.jpg' />
       <h5  className='p-2'>The Wild Robot</h5>
       <p>Adventure/Animation/Family</p>
         </SwiperSlide>
       <SwiperSlide>  <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTU2LjVLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00383474-jlxsbembtb-portrait.jpg' />
       <h5  className='p-2'>Venom:The Last Dance</h5>
       <p>Action/Adventure/Sci-Fi</p>
        </SwiperSlide>
       <SwiperSlide>   <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-My43SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00415191-kjsdvlymbv-portrait.jpg' />
       <h5  className='p-2'>Tabaah</h5>
       <p>Drama/Romantic</p>
       </SwiperSlide>
       <SwiperSlide> <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NS43SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00415267-dutdzrkcny-portrait.jpg"/>
       <h5  className='p-2'>Smile 2</h5>
       <p>Horror/Mystery/Thriller</p>
       </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAzMDkuNksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00310216-tluebxpafx-portrait.jpg"/>
       <h5  className='p-2'>Devara-Part 1</h5>
       <p>Action/Drama/Thriller</p>
         </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICA0MTcuMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00364249-xmdrsrpylr-portrait.jpg"/>
       <h5  className='p-2'>Stree 2: Sarkate Ka Aatank</h5>
       <p>Comedy/Horror</p>
         </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgRWFybHkgUmF0aW5ncw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00413069-wpgxjsbbtq-portrait.jpg"/>
       <h5  className='p-2'>Bougainvillea</h5>
       <p>Crime/Thriller</p>
         </SwiperSlide>
  






    </Swiper>

    </div>
    <div className='container mt-5'>
       <img style={{width:'100%'}} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png" alt="" />
    </div>
    <div className='container mt-5'>
     <h4>The Best Of Live Events</h4>
    </div>
    <div className='container'>
    <Swiper
      
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={5}
      navigation
     
    >
  
    
    
     
    
   
     
    
    
       <SwiperSlide> <img width={210} src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MSBFdmVudA%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/holi-parties-web-collection-202402261056.png' />
       
         </SwiperSlide>
       <SwiperSlide>  <img  width={210} src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTAgRXZlbnRz,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-amusement-park-collection-202404190106.png' />
      
         </SwiperSlide>
       <SwiperSlide>  <img  width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTA1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png' />
       
           </SwiperSlide>
       <SwiperSlide>  <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-kids-collection-202404190106.png' />
       
         </SwiperSlide>
       <SwiperSlide>  <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTk1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png' />
      
        </SwiperSlide>
       <SwiperSlide>  <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-OTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png' />
      
        </SwiperSlide>
       <SwiperSlide>  <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/upskill-collection-202211140440.png' />
      
        </SwiperSlide>
       <SwiperSlide>  <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/food-drinks-collection-202211140440.png' />
      
        </SwiperSlide>
       <SwiperSlide>  <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/interactive-games-collection-202211140440.png' />
      
        </SwiperSlide>
       <SwiperSlide>  <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NzArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/arts-crafts-collection-202211140440.png' />
      
        </SwiperSlide>
       <SwiperSlide>  <img  width={210} src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NjUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/theatre-shows-collection-202211140440.png' />
      
        </SwiperSlide>
       <SwiperSlide>  <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/adventure-fun-collection-202211140440.png' />
      
        </SwiperSlide>
     
  






    </Swiper>

    </div>
    <div className='blue'>
    <div className='container-flow mt-5'>
        
        <img className='d-inline-flex ' style={{width:'100%'}} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png" alt="" />
     </div>
     <div className='container'>
     <h2>Premieres</h2>
     <p>Brand new releases every Friday</p>
     </div>
    
    <div className='container'>
    <Swiper
      
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={5}
      navigation
     
    >
  
    
    
     
    
   
     
    
    
       <SwiperSlide> <img width={210} src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00413075-jmeelcjnxf-portrait.jpg'  />
         <h5 className='p-2'>SKins Season 6</h5>
         <p className='ms-2'>English</p>
         </SwiperSlide>
       <SwiperSlide>  <img  width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00351958-mmxfkncxzl-portrait.jpg' />
       <h5 className='p-2'>Mandala:The UFO Incident</h5>
       <p className='ms-2'>Kannada</p>
         </SwiperSlide>
       <SwiperSlide>  <img  width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00388077-lfgjsylknt-portrait.jpg' />
       <h5  className='p-2'>May December</h5>
       <p className='ms-2'>English</p>
           </SwiperSlide>
       <SwiperSlide>  <img  width={210} src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00392278-jkdqrlahhb-portrait.jpg' />
       <h5  className='p-2'>Beetlejuice Beetlejuice</h5>
       <p className='ms-2'>English</p>
         </SwiperSlide>
       <SwiperSlide>  <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00412342-pmlsuxkzxq-portrait.jpg' />
       <h5  className='p-2'>Fighter In The Wind</h5>
       <p className='ms-2'>Korean</p>
        </SwiperSlide>
       <SwiperSlide>   <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00415722-bvuspldmgk-portrait.jpg' />
       <h5  className='p-2'>Striking the palace</h5>
       <p className='ms-2'>English</p>
       </SwiperSlide>
       <SwiperSlide> <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00393534-zhundnghbz-portrait.jpg"/>
       <h5  className='p-2'>Nightwatch:Demons Are Forever</h5>
       <p className='ms-2'>Danish</p>
       </SwiperSlide>
       



    </Swiper>

    </div>
    </div>

    <div className='container mt-5'>
        <div className='row'>

            <div className='col-md-10'>
     <h4 className='dark'>Your Music Studio</h4>

            </div>
            <div className='col-md-2'>
     <button className='btn text-danger nav justify-content-end'>View all</button>

            </div>
            
        </div>
    </div>
    <div className='container'>
    <Swiper
      
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={5}
      navigation
     
    >
  
    
    
     
    
   
     
    
    
       
       <SwiperSlide>  <img  width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA3IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414464-ntaeyrqkeb-portrait.jpg' />
       <h5 className='p-2 '>Tamboostaan 3.0 (Delhi Edition)</h5>
       <p className='ms-2'>Sirifort Auditorium: Delhi Concerts</p>
         </SwiperSlide>
       <SwiperSlide>  <img  width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyNSBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409765-scbygmwbfd-portrait.jpg'/>
       <h5  className='p-2'>Indian Ocean Live - Gurgaon</h5>
       <p className='ms-2'>Imperfecto Patio: Gurgaon Concerts</p>
           </SwiperSlide>
       <SwiperSlide>  <img  width={210} src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxOCBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412918-wwfkzqbwjb-portrait.jpg' />
       <h5  className='p-2'>DANDIYA RAAS - Rhythms of Diwali</h5>
       <p className='ms-2'>Major Dhyanchand National Stadium: Delhi <br /> Music Festivals</p>
         </SwiperSlide>
       <SwiperSlide>  <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411818-apnlhhpenb-portrait.jpg' />
       <h5  className='p-2'>Guru Randhawa - Moon Rise Tour, Delhi NCR</h5>
       <p className='ms-2'>Indira Gandhi Indoor Stadium: New Delhi Concerts</p>
        </SwiperSlide>
       <SwiperSlide>   <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA5IE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413359-xpuqurraxr-portrait.jpg' />
       <h5  className='p-2'>Bismil Ki Mehfil-Live in Delhi- 9 Nov</h5>
       <p className='ms-2'>KD Jadhav Indoor Hall: Delhi Concerts</p>
       </SwiperSlide>
       <SwiperSlide> <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMyBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00401645-avrkbshvkp-portrait.jpg"/>
       <h5  className='p-2'>Prateek Kuhad Silhouettes Tour-....</h5>
       <p className='ms-2'>Airia Mail: Gurugram Concerts</p>
       </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyNSBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414732-vcuaahukdn-portrait.jpg"/>
       <h5  className='p-2'>Diwali Bash ft. Permish Verma and Sunanda....</h5>
       <p className='ms-2'>World Street by Omaxe: Faridabad <br />Music Festivals</p>
         </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414855-fxwctcbydp-portrait.jpg"/>
       <h5  className='p-2'>All India K-Pop Contest 2024-Semi Final</h5>
       <p className='ms-2'>Jawahar Lal Nehru Indoor Auditorium: Delhi Concerts</p>
         </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMyBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411050-yybyjcyynv-portrait.jpg"/>
       <h5  className='p-2'>Sunburn Arena Ft. Charlotte de Witte</h5>
       <p className='ms-2'>Huda Gymkhana Club: Gurgaon <br />Concerts</p>
         </SwiperSlide>
  
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA3IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00402683-qmvlzqtere-portrait.jpg"/>
       <h5  className='p-2'>Sunburn Arena Ft. Boris Brejcha</h5>
       <p className='ms-2'>Venue to Be Announced Delhi(NCR) <br />Concerts</p>
         </SwiperSlide>
  






    </Swiper>

    </div>
    <div className='container mt-5'>
        <div className='row'>

            <div className='col-md-10'>
     <h4 className='dark'>Outdoor Events</h4>

            </div>
            <div className='col-md-2'>
     <button className='btn text-danger nav justify-content-end'>View all</button>

            </div>
            
        </div>
    </div>
    <div className='container'>
    <Swiper
      
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={5}
      navigation
     
    >
  
    
    
     
    
   
     
    
    
       
       <SwiperSlide>  <img  width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxOCBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00358274-dtpweyxkvq-portrait.jpg' />
       <h5 className='p-2 '>Best of Standup-Standup comedy show </h5>
       <p className='ms-2'>Laughter Nation Comedy Club Hauz Khas Village</p>
         </SwiperSlide>
       <SwiperSlide>  <img  width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409773-crchbkhhwg-portrait.jpg'/>
       <h5  className='p-2'>Raghu Dixit Live-Gurgao</h5>
       <p className='ms-2'>Imperfecto Patio: Gurgao</p>
           </SwiperSlide>
       <SwiperSlide>  <img  width={210} src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00376688-dvcatrkpms-portrait.jpg' />
       <h5  className='p-2'>HUMARE RAM Ft Ashutosh Rana and...</h5>
       <p className='ms-2'>Kamani Auditorium: Delhi</p>
         </SwiperSlide>
       <SwiperSlide>  <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAxMiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415051-nflbyrehan-portrait.jpg' />
       <h5  className='p-2'>Bulls vs PinkPanther & Dabang Delhi vs.... </h5>
       <p className='ms-2'>Noida Indoor Stadium</p>
        </SwiperSlide>
       <SwiperSlide>   <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00397188-zjqhvlenhk-portrait.jpg' />
       <h5  className='p-2'>Nehru Planetarium,Delhi</h5>
       <p className='ms-2'>Nehru Planetarium: New Delhi.</p>
       </SwiperSlide>
       <SwiperSlide> <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMCBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413256-npxgtgevuv-portrait.jpg"/>
       <h5  className='p-2'>Shri Ram</h5>
       <p className='ms-2'>Shriram Bharatiya Kala Kendra: New Delhi</p>
       </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMCBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410493-lymtjpfelp-portrait.jpg"/>
       <h5  className='p-2'>Fun Run Virtual Marathon- Get Medal by Courier</h5>
       <p className='ms-2'>Your Place and your Time: Delhi</p>
         </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415055-pmbrlclghh-portrait.jpg"/>
       <h5  className='p-2'>Warriorz vs Thalaivas & Dabang Delhi vs Bulls</h5>
       <p className='ms-2'>Noida Indoor Stadium</p>
         </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxOCBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00350160-pxljfygjua-portrait.jpg"/>
       <h5  className='p-2'>Jai Hind-Red Fort Light and Sound Show</h5>
       <p className='ms-2'>Red Fort: Delhi</p>
         </SwiperSlide>
  
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414195-tafqxsxjhw-portrait.jpg"/>
       <h5  className='p-2'>Max Amini - Delhi New Show</h5>
       <p className='ms-2'>Plenary Hall Bharat Mandapam: Delhi</p>
         </SwiperSlide>
  






    </Swiper>

    </div>
    <div className='container mt-5'>
        <div className='row'>

            <div className='col-md-10'>
     <h4 className='dark'>Laughter Therapy</h4>

            </div>
            <div className='col-md-2'>
     <button className='btn text-danger nav justify-content-end'>View all</button>

            </div>
            
        </div>
    </div>
    <div className='container'>
    <Swiper
      
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={5}
      navigation
     
    >
  
    
    
     
    
   
     
    
    
       
       <SwiperSlide>  <img  width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00336178-pgquhkylfn-portrait.jpg' />
       <h5 className='p-2 '>Kal Ki Chinta Nahi Karta <br />ft. Ravi Gupta </h5>
       <p className='ms-2'>The Laught Store: Vegas Mall Delhi</p>
         </SwiperSlide>
       <SwiperSlide>  <img  width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyMyBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00329412-nqahklqjwx-portrait.jpg'/>
       <h5  className='p-2'>Kal Ki Chinta Nahi Karta <br />ft. Ravi Gupta </h5>
       <p className='ms-2'>Boom-A Cullinary Bar: Delhi</p>
           </SwiperSlide>
       <SwiperSlide>  <img  width={210} src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00333386-efqhhjarup-portrait.jpg' />
       <h5  className='p-2'>Pannu Yaar! ft.Gurleen <br />Pannu </h5>
       <p className='ms-2'>Clue Lounge and Bar: Delhi</p>
         </SwiperSlide>
       <SwiperSlide>  <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00145294-juwuwrebmt-portrait.jpg' />
       <h5  className='p-2'>Jo Bolta Hai Wohi Hota Hai feat Harsh  Gujral </h5>
       <p className='ms-2'>Noor by Khubani: Noida</p>
        </SwiperSlide>
       <SwiperSlide>   <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMCBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00350072-qvvtbzypyx-portrait.jpg' />
       <h5  className='p-2'>KAAM CHALLA by Madhur Virli</h5>
       <p className='ms-2'>The Laugh Store: Vegas Mall Delhi</p>
       </SwiperSlide>
       <SwiperSlide> <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxOCBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407257-sasjrakbwl-portrait.jpg"/>
       <h5  className='p-2'>Comedy Nights Noida</h5>
       <p className='ms-2'>Comedy County: Noida</p>
       </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAyMiBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00321882-cpqtadpcjn-portrait.jpg"/>
       <h5  className='p-2'>Gaurav Gupta Live</h5>
       <p className='ms-2'>The Laugh Store: Vegas Mall Delhi</p>
         </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyIE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00313122-ssyadnpxrz-portrait.jpg"/>
       <h5  className='p-2'>CHAMAN CHATORA-Gaurav Kapoor Comedy...</h5>
       <p className='ms-2'>Studio XO Bar, Sector 29: Gurugram</p>
         </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMCBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00358274-dtpweyxkvq-portrait.jpg"/>
       <h5   className='p-2 '>Best of Standup-Standup comedy show</h5>
       <p className='ms-2'>Laughter Nation Comedy club, Hauz Khas Village</p>
         </SwiperSlide>
  
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407605-wpdlccwvnu-portrait.jpg"/>
       <h5  className='p-2'>Halki Halki Fati? By Vikas Kush Sharma</h5>
       <p className='ms-2'>Nojoto Creator Hub: Delhi</p>
         </SwiperSlide>
  






    </Swiper>

    </div>
    <div className='container mt-5'>
        <div className='row'>

            <div className='col-md-10'>
     <h4 className='dark'>Popular Events</h4>

            </div>
            <div className='col-md-2'>
     <button className='btn text-danger nav justify-content-end'>View all</button>

            </div>
            
        </div>
    </div>
    <div className='container'>
    <Swiper
      
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={5}
      navigation
     
    >
  
    
    
     
    
   
     
    
    
       
      
       <SwiperSlide>  <img  width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA3IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414464-ntaeyrqkeb-portrait.jpg'/>
       <h5  className='p-2'>Tamboostaan 3.0 (Delhi Edition) </h5>
       <p className='ms-2'>Sirifort Auditorium: Delhi</p>
           </SwiperSlide>
       <SwiperSlide>  <img  width={210} src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409628-yysreeevls-portrait.jpg' />
       <h5  className='p-2'>Sahitya Aajtak 2024,New</h5>
       <p className='ms-2'>Major Dhyanchand National Stadium:Delhi</p>
         </SwiperSlide>
       <SwiperSlide>  <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyNSBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00337429-usypmdgvrf-portrait.jpg' />
       <h5  className='p-2'>The Dark Matter by Yash Rathi</h5>
       <p className='ms-2'>The Laugh Store: Vegas Mall Delhi</p>
        </SwiperSlide>
       <SwiperSlide>   <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMiBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412569-tmflauqxkn-portrait.jpg' />
       <h5  className='p-2'>Piyush Mishra</h5>
       <p className='ms-2'>Venue to be Announced Gurugram</p>
       </SwiperSlide>
       <SwiperSlide> <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00400505-clwvtnxqtv-portrait.jpg"/>
       <h5  className='p-2'>PRACTICE - A Standup Comedy by Manik...</h5>
       <p className='ms-2'>The Laugh Store: Vegas Mall Delhi</p>
       </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412811-lxcgwfqsmm-portrait.jpg"/>
       <h5  className='p-2'>GIFLIF Indiestaan Music Fest 2024</h5>
       <p className='ms-2'>Gymkhana Club: Sec 29, Gurugram</p>
         </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00358132-urpzjbbnmb-portrait.jpg"/>
       <h5  className='p-2'>The Lineup</h5>
       <p className='ms-2'>The Laugh Store:DLF Cyberhub, Gurugram</p>
         </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA3IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410658-chldqfzbee-portrait.jpg"/>
       <h5   className='p-2 '>Gaurav Gupta Live-Talkatora Stadium Delhi</h5>
       <p className='ms-2'>Talkatora Stadium: Delhi</p>
         </SwiperSlide>
  
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxOCBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00345140-gscevymsfk-portrait.jpg"/>
       <h5  className='p-2'>The Late Night Comedy Show</h5>
       <p className='ms-2'>Guftgu Cafe: Gurugram</p>
         </SwiperSlide>
  
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzIE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00319088-szcsdstqsg-portrait.jpg"/>
       <h5  className='p-2'>Jo Bolta Hai Wohi Hota Hai Ft. Harsh Gujral</h5>
       <p className='ms-2'>The Laugh Store: Vegas Mall Delhi</p>
         </SwiperSlide>
  






    </Swiper>

    </div>
    <div className='container mt-5'>
        <div className='row'>

            <div className='col-md-10'>
     <h4 className='dark'>The latest Plays</h4>

            </div>
            <div className='col-md-2'>
     <button className='btn text-danger nav justify-content-end'>View all</button>

            </div>
            
        </div>
    </div>
    <div className='container'>
    <Swiper
      
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={5}
      navigation
     
    >
  
    
    
     
    
   
     
    
    
       
      
       <SwiperSlide>  <img  width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyOSBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415345-lwxvmlnjhw-portrait.jpg'/>
       <h5  className='p-2'>Rajadhiraaj: Love. Life. Leela </h5>
       <p className='ms-2'>Hindi</p>
           </SwiperSlide>
       <SwiperSlide>  <img  width={210} src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00334302-krlrgcgmur-portrait.jpg' />
       <h5  className='p-2'>Jis Lahore Nai Dekhya Woh Jamyai Nai</h5>
       <p className='ms-2'>Hindi</p>
         </SwiperSlide>
       <SwiperSlide>  <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413659-etupbrnrgw-portrait.jpg' />
       <h5  className='p-2'>Lekhak Ki Khoj Mein Kirdar</h5>
       <p className='ms-2'>Hindi</p>
        </SwiperSlide>
       <SwiperSlide>   <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMCBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414636-lcxvqufpbv-portrait.jpg' />
       <h5  className='p-2'>Tajmahal Ka Tender</h5>
       <p className='ms-2'>Hindi</p>
       </SwiperSlide>
       <SwiperSlide> <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412707-xgsdpeeegc-portrait.jpg"/>
       <h5  className='p-2'>Laser Ramayana</h5>
       <p className='ms-2'>Hindi</p>
       </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414012-akwhzqguup-portrait.jpg"/>
       <h5  className='p-2'>Oedipus (Greek Tragedy)</h5>
       <p className='ms-2'>Hindi</p>
         </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA4IE5vdg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410252-zhmvpxgdwk-portrait.jpg"/>
       <h5  className='p-2'>Dance Like a Man</h5>
       <p className='ms-2'>English</p>
         </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413786-nkshbtsbqv-portrait.jpg"/>
       <h5   className='p-2 '>Dastan e Chauboli & Dastan Billi ki</h5>
       <p className='ms-2'>Hindustani</p>
         </SwiperSlide>
  
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNSBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00399072-jznsyznlxj-portrait.jpg"/>
       <h5  className='p-2'>Traasidi BY MANAV KAUL</h5>
       <p className='ms-2'>Hindi</p>
         </SwiperSlide>
  
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyOCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415770-kfewnkrpcm-portrait.jpg"/>
       <h5  className='p-2'>Nothing Like Lear-Delhi </h5>
       <p className='ms-2'>English</p>
         </SwiperSlide>
  






    </Swiper>

    </div>
    <div className='container mt-5'>
        <div className='row'>

            <div className='col-md-10'>
     <h4 className='dark'>Top Games & Sport Events</h4>

            </div>
            <div className='col-md-2'>
     <button className='btn text-danger nav justify-content-end'>View all</button>

            </div>
            
        </div>
    </div>
    <div className='container'>
    <Swiper
      
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={5}
      navigation
     
    >
  
    
    
     
    
   
     
    
    
       
      
       <SwiperSlide>  <img  width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxMCBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00414459-cnuusyhcqe-portrait.jpg'/>
       <h5  className='p-2'>Pro Kabaddi League Season 11-Noida </h5>
       <p className='ms-2'>Multiple Venues</p>
           </SwiperSlide>
       <SwiperSlide>  <img  width={210} src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415055-pmbrlclghh-portrait.jpg' />
       <h5  className='p-2'>Warriorz vs Thalaivas & Dabang Delhi vs Bulls</h5>
       <p className='ms-2'>Noida Indoor Stadium</p>
         </SwiperSlide>
       <SwiperSlide>  <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNSBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415054-cheulklbdc-portrait.jpg' />
       <h5  className='p-2'>Pirates vs Warriorz & Pink Panthers vs Giants</h5>
       <p className='ms-2'>Noida Indoor Stadium</p>
        </SwiperSlide>
       <SwiperSlide>   <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyOSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413013-rylmanwwfh-portrait.jpg' />
       <h5  className='p-2'>DELHI CHAMPION HALF MARATHON</h5>
       <p className='ms-2'>JLN Stadium Gate No.2 Delhi</p>
       </SwiperSlide>
       <SwiperSlide> <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxIERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00402457-ghctqgztnb-portrait.jpg"/>
       <h5  className='p-2'>Dilli 10K RUN</h5>
       <p className='ms-2'>Jawaharlal Nehru Stadium Delhi</p>
       </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxMCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415049-sjsxketxvt-portrait.jpg"/>
       <h5  className='p-2'>Yoddhas vs UMumba & Giants vs Steelers</h5>
       <p className='ms-2'>Noida Indoor Stadium</p>
         </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAxMSBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415050-ysqvbtdmcc-portrait.jpg"/>
       <h5  className='p-2'>Giants vs Pirates & UMumba vs Steelers</h5>
       <p className='ms-2'>Noida Indoor Stadium</p>
         </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyMCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415059-cethdcremw-portrait.jpg"/>
       <h5   className='p-2 '>Dabang Delhi vs  Giants & Titans vs UMumba</h5>
       <p className='ms-2'>Noida Indoor Stadium</p>
         </SwiperSlide>
  
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAxOSBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415058-xxtfwugepe-portrait.jpg"/>
       <h5  className='p-2'>Puneri Paltan vs Yoddhas & Bulls vs Pirates</h5>
       <p className='ms-2'>Noida Indoor Stadium</p>
         </SwiperSlide>
  
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyMSBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415060-nrbhhjjmrf-portrait.jpg"/>
       <h5  className='p-2'>Warriorz vs Titans & Bulls vs Steelers </h5>
       <p className='ms-2'>Noida Indoor Stadium</p>
         </SwiperSlide>
  






    </Swiper>

    </div>
    <div className='container mt-5'>
        <div className='row'>

            <div className='col-md-10'>
     <h4 className='dark'>Explore Fun Activities</h4>

            </div>
            <div className='col-md-2'>
     <button className='btn text-danger nav justify-content-end'>View all</button>

            </div>
            
        </div>
    </div>
    <div className='container'>
    <Swiper
      
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={5}
      navigation
     
    >
  
    
    
     
    
   
     
    
    
       
      
       <SwiperSlide>  <img  width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAzMCBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415507-tvzjlatqrd-portrait.jpg'/>
       <h5  className='p-2'>Halloween Party </h5>
       <p className='ms-2'>Nirvana Patio Club: Gurugram</p>
           </SwiperSlide>
       <SwiperSlide>  <img  width={210} src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA4IE5vdiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00368183-wrfmeubkaa-portrait.jpg' />
       <h5  className='p-2'>Indian Military Heritage Festival</h5>
       <p className='ms-2'>India International Centre: Delhi </p>
         </SwiperSlide>
       <SwiperSlide>  <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00312745-qqvhbgqacg-portrait.jpg' />
       <h5  className='p-2'>Museum Of illusions</h5>
       <p className='ms-2'>Museum Of illusions: New Delhi</p>
        </SwiperSlide>
       <SwiperSlide>   <img width={210}  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00301506-vahlxbxejl-portrait.jpg' />
       <h5  className='p-2'>Chokhi Haveli-The urban Village Experience</h5>
       <p className='ms-2'>Chokhi Haveli: Noida</p>
       </SwiperSlide>
       <SwiperSlide> <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMCBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00312632-mecnwsprpm-portrait.jpg"/>
       <h5  className='p-2'>Mystery Rooms-Connaught Place, Delhi</h5>
       <p className='ms-2'>Mystery Rooms (Connaught Place):Delhi</p>
       </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409950-zqwbkrnmmf-portrait.jpg"/>
       <h5  className='p-2'>SONIC SATURDAY</h5>
       <p className='ms-2'>Big Pitcher: Gurugram</p>
         </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00398659-fcklggvqpu-portrait.jpg"/>
       <h5  className='p-2'>Jurasik Water Park</h5>
       <p className='ms-2'>Jurasik Park Inn: Sonipat</p>
         </SwiperSlide>
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMCBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414235-zazccqxrwe-portrait.jpg"/>
       <h5   className='p-2 '>Karwa Chauth Dinner Buffet-Imperfecto</h5>
       <p className='ms-2'>Imperfecto Ruin Pub, Logix Mall: Noida</p>
         </SwiperSlide>
  
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00388800-ewzybyvmtr-portrait.jpg"/>
       <h5  className='p-2'>Red Fort Centre</h5>
       <p className='ms-2'>Red Fort: Delhi</p>
         </SwiperSlide>
  
       <SwiperSlide>    <img  width={210}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBPY3Qgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00365251-ltlutkcedb-portrait.jpg"/>
       <h5  className='p-2'>Sky Jumper Trampoline Park-Delhi </h5>
       <p className='ms-2'>SkyJumper Trampoline Park Delhi</p>
         </SwiperSlide>
  






    </Swiper>

    </div>

    <div className='container p-5 '>
    <h4 className='dark '>Trending Searches Right Now</h4>
    </div>
   <div className='container'>
    <div className='row'>
      <div className='col-md-3 mt-3 '>
        <div className='bond1'>

        <p className='text-danger'> Venom: The Last Dance
        <p className='text-dark'>Movies</p></p>
        </div>
      </div>
      <div className='col-md-4 mt-3 '>
        <div className='bond2'>

      <p className='text-danger'> Ramayana: The Legend of Prince Rama
      <p className='text-dark'>Movies</p></p>
        </div>
      </div>
      <div className='col-md-2 mt-3 '>
        <div className='bond4'>

      <p className='text-danger'> Bhool Bhulaiyaa 3
      <p className='text-dark'>Movies</p></p>
        </div>
      </div>
      <div className='col-md-2 mt-3'>
        <div className='bond4'>

      <p className='text-danger'> Jigra
      <p className='text-dark'>Movies</p></p>
        </div>
      </div>
      <div className='col-md-1 mt-3'>
       <div className='bond4'>

      <p className='text-danger'>Smile 2
      <p className='text-dark'>Movies</p></p>
       </div>
      </div>
      <div className='col-md-2  mt-3'>
        <div className='bond4'>

      <p className='text-danger'>Tabaah
      <p className='text-dark'>Movies</p></p>
        </div>
      </div>
      <div className='col-md-2  mt-3'>
        <div className='bond4'>

      <p className='text-danger'>Singham Again
      <p className='text-dark'>Movies</p></p>
        </div>
      </div>
      <div className='col-md-2 mt-3'>
        <div className='bond4'>

      <p className='text-danger'>Singham (Hindi)
      <p className='text-dark'>Movies</p></p>
        </div>
      </div>
      <div className='col-md-4 mt-3'>
        <div className='bond5'>
      <p className='text-danger'>Diljit Dosanjh Fan Party ft. Harsh Bhardwaj
      <p className='text-dark'>Events</p></p>

        </div>
      </div>
      <div className='col-md-4 mt-3'>
        <div className='bond5'>

      <p className='text-danger'> Vicky Vidya Ka Woh Wala Video
      <p className='text-dark'>Movies</p></p>
        </div>
      </div>

    </div>
   </div>

    </>
  )
}

export default Myshowitems
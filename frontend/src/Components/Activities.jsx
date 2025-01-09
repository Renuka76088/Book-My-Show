import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Activitiebar from './Activitiebar';

function Activities() {
  return (
    <>
    
    <div className='coi'>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3 kop'>
        <Activitiebar/>
        </div>
        <div className='col-md-9 lop'>
          <div>

           <h3 className='fomo mt-5'>Activities in Bengaluru</h3>
           <p className='pmy mt-4 text-danger  d-inline-flex'>Adventure</p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Parties</p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Nightlife</p>
           <p className='pmy1 mt-4 text-danger ms-2 d-inline-flex'>Touriist Attractions</p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Food </p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Malayalam</p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Bengali</p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>English 7D</p>
           <p className='pmy1 mt-4 text-danger ms-2 d-inline-flex'>Multi Language</p>
           <p className='pmy mt-4 text-danger ms-2 d-inline-flex'>Assamese</p>
        
           <p className='pmy  text-danger  d-inline-flex'>Odia</p>
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
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-NS45LzEwICAxMC4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00328827-jzdjnxhusf-portrait.jpg" alt="" />
              <h5 className='mt-3 fomo'>Martin</h5>
              <p>UA</p>
              <p>Kannada,Telugu,Tamil,...</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny44LzEwICA5Ny41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379391-hxtvfgwntf-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Vettaiyan</h5>
              <p>UA</p>
              <p>Tamil</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS41LzEwICAxLjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00398665-exkgqfpfum-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>The Wild Robot</h5>
              <p>U</p>
              <p>English,Hindi</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTY5SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00383474-uhubxxurvn-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Venom: The Last Dance</h5>
              <p>UA</p>
              <p>English,Hindi,Tamil,Telgu</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICA3LjhLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00413069-wpgxjsbbtq-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Bougainvillea</h5>
              
              <p>Malayalam</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICA1MS45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00370844-ldmqyckrea-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Jigra</h5>
              <p>UA</p>
              <p>Hindi,Telgu</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny8xMCAgMjFLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00395211-skkujsczwy-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Vicky Vidya Ka Woh Wala Vedio</h5>
              <p>UA</p>
              <p>Hindi</p>
           
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4zLzEwICA4LjFLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00414825-bpvvdutxac-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Black</h5>
              <p>UA</p>
              <p>Tamil</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAzMTJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00310216-tjpdzyvfhf-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Devara-Part 1</h5>
              <p>UA</p>
              <p>Telugu,Hindi,Tamil,Kannad....</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICA1NDcgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00415267-dutdzrkcny-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Smile 2</h5>
              <p>A</p>
              <p>English</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICAyNi4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00394800-uskbjskbej-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Viswam</h5>
              <p>UA</p>
              <p>Telgu</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICAzMy4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00412743-zkxacxltvv-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Vettaiyan-The Hunter</h5>
              <p>UA</p>
              <p>Telugu,Hindi,Kannada</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS43LzEwICA3NyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408512-phnkqthxas-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Murphy</h5>
              <p>U</p>
              <p>Kannada</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS41LzEwICA1OC4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00409924-cdnafrvrcs-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Lubber Pandhu</h5>
              <p>U</p>
              <p>Tamil</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAzLjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00416151-fcwcjjhpru-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Love Reddy</h5>
              <p>UA</p>
              <p>Telgu</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICA0MSBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00410879-jttbhryzlf-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Goodrich</h5>
              <p>A</p>
              <p>English</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICAxMi4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00407174-spcwbgabga-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Karma-When Destiny Strikes Back</h5>
              <p>UA</p>
              <p>Odia</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICAxNC44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00407201-lgbdedbhlj-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Bohurupi</h5>
              <p>UA</p>
              <p>Bengali</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4zLzEwICA0OTcgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00413273-rkgkavqald-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Bhairadevi</h5>
              <p>UA</p>
              <p>Kannada</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NS40SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00412268-ttwzvyxlrh-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Yalakunni</h5>
              
              <p>Kannada</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAyNDAgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00004236-pfvclkzndk-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Porki</h5>
              <p>A</p>
              <p>Kannada</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA1LjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00006900-xhcwfctuhn-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Mr.Perfect</h5>
              <p>U</p>
              <p>Telugu,Malayalam</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4zLzEwICA2NDYuNEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00301886-rsgwasmjrz-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Salaar: Cease Fire-Part 1</h5>
              <p>A</p>
              <p>Telugu,Kannada,Hindi,Tamil</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICAxOS40SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00406927-ymbnsyelwj-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Krishnam Pranaya Sakhi</h5>
              <p>UA</p>
              <p>Kannada</p>
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-3'>
              <img   width={200} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICA2Ni4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00407124-jymhzzyrtf-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>A.R.M</h5>
              <p>UA</p>
              <p>Malayalam,Tamil,Telgu</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgNjUuMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00410024-fgwzjabpbf-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Kishkindha Kaandam</h5>
              <p>UA</p>
              <p>Malayalam</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4xLzEwICAzSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00007111-wdjctmbzse-portrait.jpg" alt="" />
              <h5 className='fomo mt-3'>Singham</h5>
              <p>UA</p>
              <p>Hindi</p>
            </div>
            <div className='col-md-3'>
              <img  width={200}  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICA3LjNLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00348158-bxxthefgex-portrait.jpg" alt="" />
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

export default Activities
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
// import { IconButton } from "@mui/material";
import './Services.css'
import MessageIcon from '@mui/icons-material/Message';

export default function Services() {
  return (
    <div class="service-section">
      <div class="service-content">

        {/* carbon credit trading platform */}
        <div class="carbon-dmrv">
           <div class="content">
            <span class="status" style={{color: '#269E40', backgroundColor: '#d5e6b4'}}><CircleIcon sx={{ fontSize: 12, color: '#269E40', mr: 1 }}/> JUST LAUNCHED</span>
            <h3 class='service-name'>Carbon Credit Trading Platform</h3>
            <p class='sub-heading'>
              A global carbon credit trading platform that streamlines the
              buying and selling of carbon credits, facilitating seamless
              transactions. It empowers businesses and individuals to
              participate in carbon offsetting with ease, promoting
              sustainability and contributing to global emissions reduction.
            </p>
            <div class="btns new-btns">
              <button class="btn1">Sign in to our platform</button>
              <button class="btn2"><PlayCircleIcon sx={{ fontSize: 14, mr: 1 }}/>View Demo</button>
            </div>
          </div>
          <div class="service-img">
            <img src={require('../../assets/images/service-img1.png')} alt="carbon_credit" />
          </div>
        </div>

        {/* GHG Emission Reporting SAAS */}
        <div class='carbon-dmrv'>
            <div class="service-img">
                <img src={require('../../assets/images/service-img2.png')} alt="ghg-emission" />
            </div>
            <div class="content" >
                <span class="status" style={{color: '#FFB800', backgroundColor: '#FFEEB3'}}><CircleIcon sx={{ fontSize: 12, color: '#FFB800', mr: 1 }}/>TO BE OUT NEXT</span>
                <h3 class='service-name'>GHG Emission Reporting SAAS</h3>
                <p class='sub-heading'>A state-of-the-art tool for automated greenhouse gas accounting that enhances the entire process—from inventory management and organizational boundary setup to ongoing emissions tracking. It strengthens accuracy and efficiency in environmental reporting.</p>
                <div class="btns new-btns">
                    <button class="btn1">Sign in our platform</button>
                    <button class="btn2"><MessageIcon sx={{ fontSize: 14, mr: 1 }}/>Book Consultation</button>
                </div>
            </div>       
        </div>
        
        {/* dMRV Tech */}
        <div class='carbon-dmrv'>
            <div class="content">
                <span class="status" style={{color: '#2158b1', backgroundColor: '#99baeb'}}><CircleIcon sx={{ fontSize: 12, color: '#2158b1', mr: 1 }}/>COMING SOON....</span>
                <h3 class='service-name'>dMRV Tech</h3>
                <p class='sub-heading'>A digital platform that automates carbon management and reduction efforts, bringing together monitoring, reporting, and validation (MRV) processes in a single, streamlined solution. It simplifies and enhances the efficiency of sustainability initiatives.</p>
                <div class="btns new-btns">
                    <button class="btn1">Subscribe Our Newsletter</button>
                    <button class="btn2"><MessageIcon sx={{ fontSize: 14, mr: 1 }}/>Book Consultation</button>
                </div>
            </div>
            <div class="service-img">
                <img src={require('../../assets/images/service-img3.png')} alt="dmrv tech" />
            </div>
        </div>   

      </div>
    </div>
  );
}

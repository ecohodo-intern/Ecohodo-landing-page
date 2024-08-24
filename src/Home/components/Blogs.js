import React from 'react'
import './Blogs.css';

export default function Blogs() {
  return (
    <div>
        <div class='blog-content'>
            <div class='heading-para'>
                <h2>Our Blogs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus mi ac elit sagittis mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </div>  
            <div class='blogs'>
                <div  class='blog-container'>
                    <div class='box-container'>
                            <img src={require('../../assets/images/blog-img1.png')} alt="us-flag" />
                            <span class="status" style={{color: '#269E40', backgroundColor: 'rgba(233, 245, 236, 0.1)'}}>Weather</span>
                            <p style={{fontWeight:'bold', fontSize: '20px'}}>Analysis: UK could approve 13 new oil and gas projects despite North Sea pledg</p>
                            <div class='name-date'>
                                <img src={require('../../assets/images/blog-img2.png')} alt="blogger-profile-pic" />
                                <p>Tatiana Culhane</p>
                                <p>August 20, 2022</p>
                            </div>
                    </div>   
                </div>
                <div  class='blog-container'>
                    <div class='mini-box-container'>
                        <div class='mini-box'>
                            <img src={require('../../assets/images/blog-img3.png')} alt="scenery" />
                            <div>
                                <span class="status" style={{color: '#269E40', backgroundColor: 'rgba(233, 245, 236, 0.1)'}}>Weather</span>
                                <p style={{fontWeight:'bold', fontSize: '20px'}}>Analysis: UK could approve 13 new oil and gas projects despite North Sea pledg</p>
                                <div class='mini-name-date'>
                                    <img src={require('../../assets/images/blog-img2.png')} alt="blogger-profile-pic" />
                                    <p>Tatiana Culhane</p>
                                    <p>August 20, 2022</p>
                                </div>
                            </div>
                        </div>
                        {/* <br /> */}
                        <div class='mini-box'>
                            <img src={require('../../assets/images/blog-img4.png')} alt="corporate_guy" />
                            <div>
                                <span class="status" style={{color: '#269E40', backgroundColor: 'rgba(233, 245, 236, 0.1)'}}>Weather</span>
                                <p style={{fontWeight:'bold', fontSize: '20px'}}>IPCC meeting in Sofia fails to agree timeline for seventh assessment report</p>
                                <div class='mini-name-date'>
                                    <img src={require('../../assets/images/blog-img2.png')} alt="blogger-profile-pic" />
                                    <p>Tatiana Culhane</p>
                                    <p>August 20, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div>
                    <button class='btn2 my-20 '>View More</button>
            </div>
        </div>
    </div>
  )
}

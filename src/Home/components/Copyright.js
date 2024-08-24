import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import './Copyright.css'

export default function Copyright() {
  return (
    <div>
        <div className='copyright-content'>
            <div className='footer-main'>
                <div className='left-side'>
                    <img src={require('../../assets/images/logo.png')} alt="ecohodo-logo" />
                    <p>Achieve your sustainability goals faster with Ecohodo—your One-stop Al-Powered Carbon Emission Management Solution.</p>
                    <div className='social-media'>
                        <IconButton><LinkedInIcon sx={{color: 'white'}}/></IconButton>
                        <IconButton><XIcon sx={{color: 'white'}}/></IconButton>
                    </div>
                </div>
                <div className='right-side'>

                </div>
            </div>
            <div class='divider'></div>
            <div className='footer-end'>Copyright © Ecohodo 2024. All Rights Reserved.</div>
        </div>
    </div>
  )
}


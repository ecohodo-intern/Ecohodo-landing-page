import React from 'react'
import './Newsletter.css'

export default function Newsletter() {
  return (
    <div>
        <div class='newsletter-content'>
            <div class='content' style={{fontWeight: '600', fontSize: '24px'}}>
                <p>Join our newsletter to keep up to date with us!</p>
            </div>
            <div class='input-field'>
                <input type="email" className="email-input" placeholder="Enter Address" />
                <button class='btn1'>Send Email</button>        
            </div>
        </div>
        <div class='divider'></div>
    </div>
  )
}


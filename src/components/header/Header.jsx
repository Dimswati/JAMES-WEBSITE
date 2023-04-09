import React from 'react'
import { EmailRounded, LocalPhoneRounded } from '@mui/icons-material';
import "./header.scss";

export default function Header() {
  return (
    <header className='header'>
        <div className='header-content'>
          <h2 className='headline-small'>James welding & metal work</h2>
          <div className="contact">
            <div className="contact__phone">
              <LocalPhoneRounded/>
              <span className="body-large">0111 338 700</span>
            </div>
            <div className="contact__email">
              <EmailRounded/>
              <span className="body-large">james@jjwelding.com</span>
            </div>
          </div>
        </div>
    </header>
  )
}

import React from 'react'
import { Link } from 'react-router-dom';
import { Menu, EmailRounded, LocalPhoneRounded } from '@mui/icons-material';
import "./header.scss";

export default function Header() {

  return (
    <header className='header'>
        <div className='header-content'>
          <Link className='headline-small' to="/">James welding & metal work</Link>
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
          <button><Menu /></button>
        </div>
    </header>
  )
}

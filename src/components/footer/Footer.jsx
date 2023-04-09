import React, { useEffect } from 'react';
import { useState } from 'react';
import "./footer.scss";

export default function Footer() {
  // let mounted = true;

  const [ show, setShow ] = useState(true)

  function closeFooter(){
    setTimeout(()=>setShow(false), 20000)
  }

  useEffect(()=>{
    if(show){
      closeFooter()
    }
  }, [show])

  return (
    <div className={`footer ${show ? 'active' : 'inactive'}`}>
      <p className='body-medium'>💕 Proudly designed by <a href="https://paulmacharia.com" target="_blank">paulmacharia.com</a></p>
    </div>
  )
}

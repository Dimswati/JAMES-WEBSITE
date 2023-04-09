import React from 'react';
import { Download ,Share ,CalendarToday, ArrowForward } from '@mui/icons-material';
import { Link } from "react-router-dom"
import "./singleproject.scss"

export default function SingleProject() {
  return (
    <div className='single-project'>
        <div className='date'>
          <CalendarToday sx={{fontSize: "16px"}}/>
          <p className='label-medium'>12-02-2022</p>
        </div>
        <img src="https://images.unsplash.com/photo-1608126841548-dfad1d420a0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdlbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="image" />
        <div className='lower-card-section'>
          <div className='icons'>
            <Share/>
            <Download/>
          </div>
          {/* <span className='label-medium'>2 minutes ago</span> */}
          <Link to="/projects/1" className='button label-large'>check details <ArrowForward fontSize="small"/></Link>
        </div>
    </div>
  )
}

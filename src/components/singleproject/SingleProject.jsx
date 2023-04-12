import React, { useState, useEffect } from 'react';
import { Edit , Delete ,Share ,CalendarToday, ArrowForward } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"
import "./singleproject.scss"

export default function SingleProject({isEdit}) {

  const LowerCardComponent = ({isEdit}) => {
    if(isEdit){
      return (
        <div className='lower-card-section'>
          <Link to="/projects/edit/1" className='edit button label-large'><Edit fontSize="small"/>Edit</Link>
          <button className='delete button label-large'><Delete fontSize="small"/>Delete</button>
        </div>
      )
    }

    return (
      <div className='lower-card-section'>
        <div className='icons'>
          <Share/>
        </div>
        <Link to="/projects/1" className='button label-large'>check details <ArrowForward fontSize="small"/></Link>
      </div>
    )
  }

  return (
    <div className='single-project'>
        <div className='date'>
          <CalendarToday sx={{fontSize: "16px"}}/>
          <p className='label-medium'>12-02-2022</p>
        </div>
        <img src="https://images.unsplash.com/photo-1608126841548-dfad1d420a0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdlbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="image" />
        <LowerCardComponent isEdit={isEdit}/>
    </div>
  )
}

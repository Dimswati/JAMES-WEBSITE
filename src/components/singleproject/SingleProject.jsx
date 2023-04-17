import React, { useState, useEffect } from 'react';
import { Edit , Delete ,Share ,CalendarToday, ArrowForward } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"
import { dateOnCard } from "../../helpers/date"
import { app_url } from "../../constants"

import "./singleproject.scss"

export default function SingleProject({project}) {

  const { featuredImage, publishedAt, category } = project?.attributes

  return (
    <Link className='single-project' to={`/${category?.data.attributes.slug}/${project.id}`}>
      <div className='date'>
        <CalendarToday sx={{fontSize: "16px"}}/>
        <p className='label-medium'>{dateOnCard(publishedAt)}</p>
      </div>
      <img src={`${app_url}${featuredImage?.data.attributes.url}`} alt="image" />
      <div className='lower-card-section'>
        <div className='icons'>
          <Share/>
        </div>
        <Link to={`/${category?.data.attributes.slug}/${project.id}`} className='button label-large'>check details <ArrowForward fontSize="small"/></Link>
      </div>
    </Link>
  )
}

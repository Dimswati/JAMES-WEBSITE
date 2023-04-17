import React, { useState, useEffect } from 'react';
import { Edit , Delete ,Share ,CalendarToday, ArrowForward } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"
import { app_url } from "../../constants"

import "./singleproject.scss"
import { dateOnDesc } from '../../helpers';

export default function SingleProject({project}) {

  const { featuredImage, publishedAt, category } = project?.attributes

  console.log(publishedAt)

  return (
    <Link className='single-project' to={`/${category?.data.attributes.slug}/${project.id}`}>
      <img src={`${app_url}${featuredImage?.data.attributes.url}`} alt="image" />
      <div className='lower-card-section'>
        <div className='icons'>
            <Share/>
        </div>
        <span className='label-large'>{dateOnDesc(publishedAt)}</span>
      </div>
    </Link>
  )
}

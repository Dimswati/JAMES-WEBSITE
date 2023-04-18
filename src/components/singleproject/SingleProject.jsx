import React, { useState, useEffect } from 'react';
import { Edit , Delete ,Share ,CalendarToday, ArrowForward } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"
import { app_url } from "../../constants"

import "./singleproject.scss"
import { dateOnDesc } from '../../helpers';

export default function SingleProject({project}) {

  return (
    <article className='single-project' >
      <Link to={`/${project?.attributes.category.data.attributes.slug}/${project.id}`}><img src={`${app_url}${project?.attributes.featuredImage.data.attributes.url}`} alt="image" /></Link>
      <div className='lower-card-section'>
        <div className='icons'>
            <Share/>
        </div>
        <span className='label-large'>{dateOnDesc(project?.attributes.publishedAt)}</span>
      </div>
    </article>
  )
}

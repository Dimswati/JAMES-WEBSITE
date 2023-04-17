import React from 'react'
import { AccessTime ,Facebook, Twitter, WhatsApp, Instagram, Check, ArrowBack, } from '@mui/icons-material'

import ProjectList from '../../components/projectlist/ProjectList'
import "./project.scss"
import Swiper from "../../components/slider/Slider"
import { useNavigate, useParams } from 'react-router-dom'
import { dateOnDesc } from '../../helpers'
import useFetch from '../../hooks/useFetch'
import CategoryList from '../../components/categoryList/CategoryList'

export default function Project() {
  const navigate = useNavigate()

  const { category, projectId } = useParams();

  const { rawData, isLoading, error } = useFetch(`/projects/${projectId}?populate=*`)

  console.log(rawData)

  return (
    <main>
      <section className='project-section'>
        {/* <button className='back label-large' onClick={goBack}><ArrowBack/>back to projects</button> */}
        <CategoryList/>
        {/* <h2 className='title-large'>Similar projects</h2> */}
        <ProjectList category={category}/>
      </section>
      <aside className='project-aside'>
          <div className='slider'>
            <Swiper images={rawData?.data.attributes.images.data}/>
          </div>
          <div className='project-details'>
              <div className="project-details-list">
                <div className="project-detail">
                  <h4 className='body-large'>duration</h4>
                  <p className='body-medium'>{rawData?.data.attributes.duration} days</p>
                </div>
                <div className="project-detail">
                  <h4 className='body-large'>price</h4>
                  <p className='body-medium'>{rawData?.data.attributes.price}/=</p>
                </div>
                <div className="project-detail">
                  <h4 className='body-large'>date</h4>
                  <p className='body-medium'>{dateOnDesc(rawData?.data.attributes.publishedAt)}</p>
                </div>
                <div className="project-detail">
                  <h4 className='body-large'>man power</h4>
                  <p className='body-medium'>{rawData?.data.attributes.welders} welders</p>
                </div>
                <div className="project-detail">
                  { rawData?.data.attributes.status === "Completed" ? (<span><Check fontSize='small'/><p className='body-medium'>{rawData?.data.attributes.status}</p></span>) : (<span><AccessTime fontSize='small'/><p className='body-medium'>{rawData?.data.attributes.status }</p></span>)}
                </div>
              </div>
          </div>

          <button className='whatsapp-button label-large'><WhatsApp/> Lets talk business</button>
          <div className='share'>
              <h4 className='title-medium'>Recommend to someone on:</h4>
              <div className="share-icons">
                <Facebook/>
                <Instagram/>
                <Twitter/>
                <WhatsApp/>
              </div>
          </div>
      </aside>
    </main>
  )
}

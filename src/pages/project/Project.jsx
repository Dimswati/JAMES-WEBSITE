import React from 'react'
import { Facebook, Twitter, WhatsApp, Instagram, Check, } from '@mui/icons-material'
import ProjectList from '../../components/projectlist/ProjectList'
import "./project.scss"
import Swiper from "../../components/slider/Slider"

export default function Project() {
  return (
    <main>
      <section className='project-section'>
        <h2 className='title-large'>Similar projects</h2>
        <ProjectList/>
      </section>
      <aside className='project-aside'>
          <div className='slider'>
            <Swiper/>
          </div>
          <div className='project-details'>
              <div className="project-detail">
                <h4 className='body-large'>duration</h4>
                <p className='body-medium'>1 day</p>
              </div>
              <div className="project-detail">
                <h4 className='body-large'>price</h4>
                <p className='body-medium'>request info</p>
              </div>
              <div className="project-detail">
                <h4 className='body-large'>date</h4>
                <p className='body-medium'>April 23, 2023</p>
              </div>
              <div className="project-detail">
                <h4 className='body-large'>status</h4>
                <span><Check fontSize='small'/><p className='body-medium'>completed</p></span>
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

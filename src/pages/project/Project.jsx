import React from 'react'
import ProjectList from '../../components/projectlist/ProjectList'
import "./project.scss"

export default function Project() {
  return (
    <div className="project">
      <section className='project-details'>
        <div className="image">
          <img src="" alt="" />
        </div>
      </section>
      <div className='project-images'></div>
      <h2 className='title-large'>Similar project</h2>
      <ProjectList/>
    </div>
  )
}

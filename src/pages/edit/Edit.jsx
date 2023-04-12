import React from 'react'
import EditForm from '../../components/form/EditForm'
import ProjectList from '../../components/projectlist/ProjectList'
import "./edit.scss"

export default function Edit() {
  return (
    <main>
      <section className='project-section'>
        <h2 className='title-large'>Dashboard</h2>
        <ProjectList/>
      </section>
      <aside className='project-aside'>
        <EditForm/>
      </aside>
    </main>
  )
}

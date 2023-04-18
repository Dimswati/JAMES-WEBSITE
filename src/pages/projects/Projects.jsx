import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectList from '../../components/projectlist/ProjectList'
import "./projects.scss"

export default function Projects() {

  const {category} = useParams()

  return (
    <main className='projects-page'>
      <ProjectList category={category}/>
    </main>
  )
}

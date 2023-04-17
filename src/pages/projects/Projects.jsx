import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectList from '../../components/projectlist/ProjectList'

export default function Projects() {

  const {category} = useParams()

  return (
    <main>
      <ProjectList category={category}/>
    </main>
  )
}

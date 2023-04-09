import React from 'react'
import "./featured.scss"
import ProjectList from "../projectlist/ProjectList"

export default function Featured() {
  return (
    <section className='featured'>
    <h2 className="title-large">Here is what I can build for you</h2>
    <ul className='categories'>
      <li className='label-large active'>
        <a href="">Gates</a>
      </li>
      <li className='label-large'>
        <a href="">Doors</a>
      </li>
      <li className='label-large'>
        <a href="">Windows</a>
      </li>
      <li className='label-large'>
        <a href="">Doors</a>
      </li>
      <li className='label-large'>
        <a href="">Locks</a>
      </li>
      <li className='label-large'>
        <a href="">Grills</a>
      </li>
    </ul>
    {/* <h2 className='title-medium'>Doors <span>25 projects</span> </h2> */}
    <ProjectList/>
  </section>
  )
}

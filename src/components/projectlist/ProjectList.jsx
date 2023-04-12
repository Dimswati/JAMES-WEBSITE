import React from 'react'
import SingleProject from '../singleproject/SingleProject'
import "./projectlist.scss"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ProjectList() {

  const [isEdit, setIsEdit] = useState(false)
  
  let { pathname } = useLocation(null)

  useEffect(()=>{ 
    if(pathname.includes("edit")){
      setIsEdit(true)
    }
  }, [pathname])

  return (
    <section className='projects'>
        <SingleProject isEdit={isEdit}/>
        <SingleProject isEdit={isEdit}/>
        <SingleProject isEdit={isEdit}/>
        <SingleProject isEdit={isEdit}/>
        <SingleProject isEdit={isEdit}/>
        <SingleProject isEdit={isEdit}/>
        <SingleProject isEdit={isEdit}/>
        <SingleProject isEdit={isEdit}/>
    </section>
  )
}

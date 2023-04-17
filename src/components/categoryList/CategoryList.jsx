import "./categorylist.scss"

import React from 'react'
import useFetch from "../../hooks/useFetch"
import { useParams, Link } from "react-router-dom"

function CategoryList() {

  const { rawData, isLoading, error } = useFetch("/categories?populate=*")
  const { category } = useParams()
  
  return (
    <ul className='categories'>
            {
              rawData?.data.map((item) => {
                return (
                  <li key={item?.id} className={`label-large ${ category === item?.attributes.category.toLowerCase() ? "selected" : "" }`}>
                    <Link to={`/${item?.attributes.category}`}>{item?.attributes.category}</Link>
                  </li>
                )
              })
            }
    </ul>
  )
}

export default CategoryList
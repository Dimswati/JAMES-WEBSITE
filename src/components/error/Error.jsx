import React from 'react'
import "./error.scss"
import { ArrowBack } from '@mui/icons-material'
import { Link } from '@mui/material'

export default function Error() {
  return (
    <div className='error-page'>
      <h4 className='display-large'>404</h4>
      <p className='body-large'>page not found</p>
      <Link className='button label-large' to="/"><ArrowBack className='arrow-back'/> back home</Link>
    </div>
  )
}

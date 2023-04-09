import React from 'react'
import Aside from '../../components/aside/Aside'
import Featured from '../../components/featured/Featured'
import "./index.scss"

export default function Index() {
  return (
    <main>
        <Featured/>
        <Aside/>
    </main>
  )
}

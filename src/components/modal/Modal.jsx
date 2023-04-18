import React, { useContext, useEffect } from 'react'
import CategoryList from '../categoryList/CategoryList'
import { Close, ArrowBack } from "@mui/icons-material" 
import "./modal.scss"
import { Link } from 'react-router-dom'
import { ModalContext } from "../../context/ModalContext";

export default function Modal() {
    
    const { modalOpen, toggleModal } = useContext(ModalContext)

    // hook event listeners for actions
    useEffect(()=> {
        const modal = document.querySelector('.modal')

        modal.addEventListener('click', toggleModal)

        return ()=> {
            modal.removeEventListener('click', toggleModal)
            console.log('cleaned up')
        }
    }, [modalOpen])

    // hook event listeners for width
    
    
  return (
    <div className='modal'>
        <div className='modal-content'>
            <div>
                <h2 className='title-large'>Browse categories</h2>
                <button onClick={toggleModal}><Close/></button>
            </div>
            <CategoryList/>
            <Link className='home-button label-large' to="/"><ArrowBack fontSize='small'/>Back Home</Link>
        </div>
    </div>
  )
}

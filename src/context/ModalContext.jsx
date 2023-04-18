import { createContext, useContext, useState } from "react";

export const ModalContext = createContext()

const ModalProvider = ({children}) => {

    const [ modalOpen, setModalOpen ] = useState(false)

    const toggleModal = () => {
        setModalOpen(prevState => !prevState)
        console.log(modalOpen)
    }

    return (
        <ModalContext.Provider value={{modalOpen, toggleModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;

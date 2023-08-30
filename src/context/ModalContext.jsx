import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({children}) => {

    const [modal, setModal] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);

    const handleModalToggle = () => {        
        setModal(!modal);
    }


    return(
        <ModalContext.Provider value={{modal, languageOpen, setModal, handleModalToggle, setLanguageOpen, }}>
            {children}
        </ModalContext.Provider>
    )
}
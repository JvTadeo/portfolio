import { useState, useEffect, useContext } from "react"
import { ModalContext } from "../context/ModalContext";

  const Modal = ({mode, modalState, handleScrollToSection, handleModeToggle, homeRef, aboutRef, skillsRef, projectsRef, contactRef, language, languageSelectorId, handleLanguageChange}) => {
    const {languageOpen, setLanguageOpen, handleModalToggle, modal} = useContext(ModalContext)
  return (
    <div >
      {modal && (
        <div className={`absolute w-[260px] h-[315px] backdrop-blur-sm rounded-2xl ${mode === true ? 'bg-modalBackground-white text-black' : 'bg-modalBackground-dark text-white'} right-3 top-2 font-roboto`}>            
            <div className='flex flex-col px-5 text-xl gap-2 pt-2 divide'>
                <a onClick={() => handleScrollToSection(homeRef)}>{language.navbar.home}</a>
                <a onClick={() => handleScrollToSection(aboutRef)}>{language.navbar.about}</a>
                <a onClick={() => handleScrollToSection(skillsRef)}>{language.navbar.skills}</a>
                <a onClick={() => handleScrollToSection(projectsRef)}>{language.navbar.projects}</a>
                <a onClick={() => handleScrollToSection(contactRef)}>{language.navbar.contact}</a>
            </div>            
            <div className='w-full flex items-center justify-center align-middle pt-2'>
                <hr className={`w-[85%] border-2 ${mode === true ? 'border-white' : 'border-[#0D121D]'} rounded-2xl`}></hr>                
            </div>            
            <div className={`w-full flex items-start pt-3 mx-5 flex-col space-y-2`}>
                <button onClick={() => handleModeToggle()} className={`flex flex-row items-center text-center justify-evenly space-x-2 ${mode === true ? 'bg-[#D9D9D9]' : 'bg-[#0D121D]'} rounded-2xl px-2 py-2`}>
                  {mode === true ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M23.8053 16.7241C23.6071 16.4 23.0499 15.8957 21.663 16.1358C20.8952 16.2679 20.1151 16.3279 19.335 16.2919C17.9436 16.2307 16.579 15.8996 15.3219 15.318C14.0649 14.7364 12.9409 13.9163 12.0166 12.9061C10.4068 11.1652 9.41614 8.89598 9.40376 6.44668C9.40376 5.07796 9.67619 3.75726 10.2334 2.50859C10.7783 1.29595 10.3944 0.659611 10.122 0.395471C9.83717 0.119324 9.16848 -0.26488 7.85588 0.263401C2.7912 2.3285 -0.341718 7.25111 0.0297741 12.5219C0.401266 17.4805 3.99236 21.7188 8.74746 23.3156C9.90026 23.7056 11.1062 23.9281 12.3262 23.976C12.5243 23.988 12.7224 24 12.9206 24C17.0689 24 20.9572 22.103 23.409 18.8733C24.2387 17.7567 24.0158 17.0483 23.8053 16.7241Z" fill="#182130"/>
                    </svg> 
                  :
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12.0219 19.6721C13.0265 19.6721 14.0213 19.4743 14.9495 19.0898C15.8777 18.7053 16.721 18.1418 17.4314 17.4314C18.1418 16.721 18.7053 15.8777 19.0898 14.9495C19.4743 14.0213 19.6721 13.0265 19.6721 12.0219C19.6721 11.0172 19.4743 10.0224 19.0898 9.09422C18.7053 8.16605 18.1418 7.32269 17.4314 6.6123C16.721 5.9019 15.8777 5.33839 14.9495 4.95393C14.0213 4.56946 13.0265 4.37158 12.0219 4.37158C9.99288 4.37158 8.047 5.17759 6.6123 6.6123C5.17759 8.047 4.37158 9.99288 4.37158 12.0219C4.37158 14.0508 5.17759 15.9967 6.6123 17.4314C8.047 18.8661 9.99288 19.6721 12.0219 19.6721ZM12.0219 24C11.4208 24 10.929 23.5519 10.929 22.9508V22.8634C10.929 22.2623 11.4208 21.7705 12.0219 21.7705C12.623 21.7705 13.1148 22.2623 13.1148 22.8634C13.1148 23.4645 12.623 24 12.0219 24ZM19.8251 20.918C19.541 20.918 19.2678 20.8087 19.0492 20.6011L18.9071 20.459C18.8059 20.3578 18.7257 20.2377 18.6709 20.1055C18.6161 19.9733 18.588 19.8316 18.588 19.6885C18.588 19.5454 18.6161 19.4037 18.6709 19.2715C18.7257 19.1393 18.8059 19.0192 18.9071 18.918C19.0083 18.8169 19.1284 18.7366 19.2606 18.6818C19.3928 18.6271 19.5345 18.5989 19.6776 18.5989C19.8207 18.5989 19.9624 18.6271 20.0946 18.6818C20.2268 18.7366 20.3469 18.8169 20.4481 18.918L20.5902 19.0601C20.742 19.2121 20.8455 19.4056 20.8876 19.6162C20.9297 19.8269 20.9085 20.0453 20.8267 20.244C20.7449 20.4426 20.6062 20.6126 20.4279 20.7326C20.2497 20.8525 20.04 20.9171 19.8251 20.918ZM4.21858 20.918C3.93443 20.918 3.6612 20.8087 3.44262 20.6011C3.34131 20.5 3.26093 20.3799 3.20608 20.2477C3.15124 20.1155 3.12301 19.9737 3.12301 19.8306C3.12301 19.6875 3.15124 19.5457 3.20608 19.4135C3.26093 19.2813 3.34131 19.1612 3.44262 19.0601L3.5847 18.918C3.68588 18.8169 3.806 18.7366 3.9382 18.6818C4.07041 18.6271 4.2121 18.5989 4.35519 18.5989C4.49829 18.5989 4.63998 18.6271 4.77218 18.6818C4.90438 18.7366 5.0245 18.8169 5.12568 18.918C5.22687 19.0192 5.30713 19.1393 5.36189 19.2715C5.41665 19.4037 5.44483 19.5454 5.44483 19.6885C5.44483 19.8316 5.41665 19.9733 5.36189 20.1055C5.30713 20.2377 5.22687 20.3578 5.12568 20.459L4.98361 20.6011C4.77596 20.8087 4.4918 20.918 4.21858 20.918ZM22.9508 13.1148H22.8634C22.2623 13.1148 21.7705 12.623 21.7705 12.0219C21.7705 11.4208 22.2623 10.929 22.8634 10.929C23.4645 10.929 24 11.4208 24 12.0219C24 12.623 23.5519 13.1148 22.9508 13.1148ZM1.18033 13.1148H1.0929C0.491803 13.1148 0 12.623 0 12.0219C0 11.4208 0.491803 10.929 1.0929 10.929C1.69399 10.929 2.22951 11.4208 2.22951 12.0219C2.22951 12.623 1.78142 13.1148 1.18033 13.1148ZM19.6831 5.45355C19.3989 5.45355 19.1257 5.34426 18.9071 5.13661C18.8058 5.0355 18.7254 4.91541 18.6706 4.7832C18.6157 4.65098 18.5875 4.50926 18.5875 4.36612C18.5875 4.22299 18.6157 4.08126 18.6706 3.94904C18.7254 3.81683 18.8058 3.69674 18.9071 3.59563L19.0492 3.45355C19.1504 3.35237 19.2705 3.27211 19.4027 3.21735C19.5349 3.16259 19.6766 3.1344 19.8197 3.1344C19.9628 3.1344 20.1045 3.16259 20.2367 3.21735C20.3689 3.27211 20.489 3.35237 20.5902 3.45355C20.6913 3.55473 20.7716 3.67486 20.8264 3.80706C20.8811 3.93926 20.9093 4.08095 20.9093 4.22404C20.9093 4.36714 20.8811 4.50883 20.8264 4.64103C20.7716 4.77323 20.6913 4.89335 20.5902 4.99454L20.4481 5.13661C20.2404 5.34426 19.9672 5.45355 19.6831 5.45355ZM4.36066 5.45355C4.0765 5.45355 3.80328 5.34426 3.5847 5.13661L3.44262 4.98361C3.34144 4.88242 3.26118 4.7623 3.20642 4.6301C3.15166 4.4979 3.12348 4.35621 3.12348 4.21311C3.12348 4.07002 3.15166 3.92833 3.20642 3.79613C3.26118 3.66393 3.34144 3.54381 3.44262 3.44262C3.54381 3.34144 3.66393 3.26118 3.79613 3.20642C3.92833 3.15166 4.07002 3.12348 4.21311 3.12348C4.35621 3.12348 4.4979 3.15166 4.6301 3.20642C4.7623 3.26118 4.88242 3.34144 4.98361 3.44262L5.12568 3.5847C5.55191 4.01093 5.55191 4.69945 5.12568 5.12568C4.91803 5.34426 4.63388 5.45355 4.36066 5.45355ZM12.0219 2.22951C11.4208 2.22951 10.929 1.78142 10.929 1.18033V1.0929C10.929 0.491803 11.4208 0 12.0219 0C12.623 0 13.1148 0.491803 13.1148 1.0929C13.1148 1.69399 12.623 2.22951 12.0219 2.22951Z" fill="white"/>
                    </svg>
                  }                    
                    {mode === true ? <p>{language.modal.dark_mode}</p> : <p>{language.modal.light_mode}</p>}                    
                </button>
                <button onClick={() =>setLanguageOpen(!languageOpen)} type="button" id="language-selector" className={`max-w-120px inline-flex items-center justify-center rounded-md border gap-2 mr-4 px-4 py-2 text-sm font-medium  ${mode === true ? 'text-black' : 'text-white'} ${mode === true? 'bg-white' : 'bg-background-dark'} ${mode === true? 'border-inherit' : 'border-slate-700'}`}>                
                  <img src={`https://hatscripts.github.io/circle-flags/flags/${language.code}.svg`} width="26"/>
                  {language.name}
                  <svg
                      className="-me-1 ms-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                  >
                  <path
                      fillRule="evenodd"
                      d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                      clipRule="evenodd"
                  />
                  </svg>        
              </button>     
              {languageOpen && <div className={`rounded-md flex max-w-full ${mode === true ? 'text-black' : 'text-white'} ${mode === true? 'bg-white' : 'bg-background-dark'} ${mode === true? 'border-inherit' : 'border-slate-700'}`}> {/* Lista de idiomas */}
                  <div className="py-2 px-2 gap-2 flex flex-col w-full">
                      <button className="flex items-center gap-2" onClick={() => handleLanguageChange('en')}>
                      <img src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="26"/>               
                          English
                      </button>           
                      <button className="flex items-center gap-2" onClick={() => handleLanguageChange('pt_br')}>
                          <img src="https://hatscripts.github.io/circle-flags/flags/br.svg" width="26"/>               
                          Portuguese
                      </button>                 
                  </div>
              </div>}    
            </div>
        </div>
      )}
    </div>
  )
}

export default Modal

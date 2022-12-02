import { useState } from "react"
import { createContext, useContext } from "react"

// Ciração do Contexto
const TextContext = createContext()

// Criação do Provedor para o Contexto
export function TextProvider(props) {

    const fontSizeLocalStorage = localStorage.getItem('fontSize')
    const [fontSize, setFontSize] = useState(fontSizeLocalStorage !== null && fontSizeLocalStorage)

    function changeFontSize(fontRecieved) {

        if(fontRecieved !== fontSize) {

            setFontSize(fontRecieved)
            localStorage.setItem('fontSize', fontRecieved)

        }else{

          setFontSize('')
          localStorage.setItem('fontSize', '')

        }

    }

    return(

        <TextContext.Provider value={{ fontSize, changeFontSize }}>
            { props.children }
        </TextContext.Provider>

    )

}

export function useFontSize() {

    const context = useContext(TextContext)

    return context

}






// const currentFontSizeSaved = localStorage.getItem('currentFontSize')
//     const [currentFontSize, setCurrentFontSize] = useState(currentFontSizeSaved !== null && currentFontSizeSaved)

//     function changeFontSize(fontSize) {

//         if (fontSize !== currentFontSize) {
//             setCurrentFontSize(fontSize)
//             localStorage.setItem('currentFontSize', fontSize)
//         } else
//         {
//             setCurrentFontSize('')
//             localStorage.setItem('currentFontSize', '')
//         }
//     }

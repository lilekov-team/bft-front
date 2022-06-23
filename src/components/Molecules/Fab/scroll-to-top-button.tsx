import { ReactElement } from "react"
import IconButton from "../../Atoms/IconButton/icon-button"
import { ArrowUp } from "../../Atoms/Icons/ArrowUp"






const ScrollToTopButton:React.FC = () => {

    


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="fixed bottom-12 right-11">
            <IconButton 
            onClick={scrollToTop}
            icon={<ArrowUp 
            className="w-7"
            />}
            
            />
        </div>
    )
}




export default ScrollToTopButton
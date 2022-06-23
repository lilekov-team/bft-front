import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import ScrollToTopButton from "../../../../src/components/Molecules/Fab/scroll-to-top-button"

describe('Scroll to top button', () => {


    afterEach(() => {
        cleanup()
    })

    it('renders correctly', () => {
        render(<ScrollToTopButton/>)

        expect(screen.getByRole('button')).toBeInTheDocument()
    })



    it('calls window.scroll on click', () => {
        render(<ScrollToTopButton/>)
        let callback = jest.fn()
        window.scrollTo = callback
        fireEvent.click(screen.getByRole('button'))


        expect(callback).toHaveBeenCalledWith({"behavior": "smooth", "left": 0, "top": 0})
    })



})
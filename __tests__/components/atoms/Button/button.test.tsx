import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import Button, { ButtonVariants } from "../../../../src/components/Atoms/Button/button"



describe("Button in default state", () => {
    let onClick = jest.fn() 
    
    beforeEach(() => {
        onClick = jest.fn()
        const component = <Button variant={ButtonVariants.FILLED}  onClick={onClick}>New Button</Button>
        render(component)
    })


    afterEach(() => {
        cleanup()
        jest.clearAllMocks()
    })
    

    it ("renders button correctly", () => {
   


        expect(screen.getByText('New Button')).toBeInTheDocument()

        expect(screen.getByRole('button')).toBeInTheDocument()

    })

    

    it ("acts correctly on click", () => {

        const button = screen.getByText('New Button')

        fireEvent.click(button)
        expect(onClick).toBeCalledTimes(1)



        
        

    })


    
})




describe("Button in loading state", () => {
    let onClick = jest.fn()



    beforeEach(() => {
        onClick = jest.fn()
        const component = <Button variant={ButtonVariants.FILLED} loading onClick={onClick}>New Button</Button>
        render(component)
    })


    afterEach(() => {
        cleanup()
        jest.clearAllMocks()
    })
    


    

    it ("acts correctly on click", () => {

        const button = screen.getByText('New Button')

        fireEvent.click(button)
        expect(onClick).toBeCalledTimes(0)

    })


    it ("renders spinner", () => {

        

        expect(screen.getByText("Loading...")).toBeInTheDocument()
    })

    
})
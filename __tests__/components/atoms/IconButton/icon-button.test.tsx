
import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import IconButton from "../../../../src/components/Atoms/IconButton/icon-button"

describe("Icon button in default state", () => {
    let onClick = jest.fn() 
    
    beforeEach(() => {
        onClick = jest.fn()
        const component = <IconButton icon={<div>Icon</div>}  onClick={onClick}/>
        render(component)
    })


    afterEach(() => {
        cleanup()
        jest.clearAllMocks()
    })
    

    it ("renders button correctly", () => {


        expect(screen.getByRole('button')).toBeInTheDocument()

    })

    

    it ("acts correctly on click", () => {

        const button = screen.getByRole('button')

        fireEvent.click(button)
        expect(onClick).toBeCalledTimes(1)
    })

    it("renders icon component correctly", () => {
        expect(screen.getByText("Icon")).toBeInTheDocument()
    })
    
})

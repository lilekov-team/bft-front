import { render, screen, fireEvent, cleanup, getByText } from "@testing-library/react"
import FormField from "../../../../src/components/Atoms/FormField/form-field"







describe('Form field with label', () => {
    let onChange = jest.fn()
    let onBlur = jest.fn()
    let onFocus = jest.fn()

    beforeEach(() => {
        render(<FormField 
            value=""
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            name='text'
            type="text"
            label='Label'
            placeholder="Placeholder"
            />)
    })

    afterEach( () => {
        cleanup()
        jest.clearAllMocks()
    })

    it('renders form field ', () => {

        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })


    it('renders label ', () => {

        expect(screen.getByText('Label')).toBeInTheDocument()
    })

    it('renders placeholder when provided ', () => {

        expect(screen.getByPlaceholderText('Placeholder')).toBeInTheDocument()
    })


    it('calls onChange when edited ', () => {
        let input:HTMLInputElement = screen.getByRole('textbox')
        fireEvent.change(input, {target: {value: 'a'}})


        expect(onChange).toHaveBeenCalledWith('a')
        
    })

    it('calls onBlur when blurred ', () => {
        let input:HTMLInputElement = screen.getByRole('textbox')
        fireEvent.blur(input)


        expect(onBlur).toHaveBeenCalledTimes(1)
        
    })



    it('calls onFocus when focused ', () => {
        let input:HTMLInputElement = screen.getByRole('textbox')
        fireEvent.focus(input)


        expect(onFocus).toHaveBeenCalledTimes(1)
        
    })




})



describe('Form field with error', () => {
    let onChange = jest.fn()
    let onBlur = jest.fn()
    let onResetError = jest.fn()

    beforeEach(() => {
        render(<FormField 
            value=""
            onChange={onChange}
            onBlur={onBlur}
            name='text'
            type="text"
            label='Label'
            error="error"
            resetError={onResetError}
            />)
    })

    afterEach( () => {
        cleanup()
        jest.clearAllMocks()
    })

    it('renders error', () => {



        expect(screen.getByText('error')).toBeInTheDocument()
        
    })


    it('calls onResetError if provided when edited ', () => {
        let input:HTMLInputElement = screen.getByRole('textbox')
        fireEvent.change(input, {target: {value: 'a'}})


        expect(onResetError).toHaveBeenCalledTimes(1)
        
    })



})



describe('Phone field', () => {
    let onChange = jest.fn()
    let onBlur = jest.fn()
    let onResetError = jest.fn()

    beforeEach(() => {
        render(<FormField 
            value=""
            onChange={onChange}
            onBlur={onBlur}
            name='text'
            type="phone"
            label='Label'
            error="error"
            resetError={onResetError}
            />)
    })

    afterEach( () => {
        cleanup()
        jest.clearAllMocks()
    })




    it('calls onChange when numbers are entered', () => {
        let input:HTMLInputElement = screen.getByRole('textbox')
        fireEvent.change(input, {target: {value: '1'}})


        expect(onChange).toBeCalledWith('71_________')
        
    })

    it('doesnt call onChange when letters are entered', () => {
        let input:HTMLInputElement = screen.getByRole('textbox')
        fireEvent.change(input, {target: {value: 'a'}})


        expect(onChange).toBeCalledWith('7__________')
        
    })

})




describe('Form field with icon', () => {
    let onChange = jest.fn()
    let onBlur = jest.fn()
    let onResetError = jest.fn()

    let icon = <div aria-label="icon" />


    beforeEach(() => {
        render(<FormField 
            value=""
            onChange={onChange}
            onBlur={onBlur}
            name='text'
            type="phone"
            label='Label'
            error="error"
            resetError={onResetError}
            suffix={icon}

            />)
    })

    afterEach( () => {
        cleanup()
        jest.clearAllMocks()
    })




    it('renders icon', () => {


        expect(screen.getByLabelText('icon')).toBeInTheDocument()
        
    })


})




describe('Disabled form field', () => {
    let onChange = jest.fn()
    let onBlur = jest.fn()
    let onResetError = jest.fn()

    let icon = <div aria-label="icon" />


    beforeEach(() => {
        render(<FormField 
            value=""
            onChange={onChange}
            onBlur={onBlur}
            name='text'
            type="phone"
            label='Label'
            error="error"
            resetError={onResetError}
            suffix={icon}
            disabled

            />)
    })

    afterEach( () => {
        cleanup()
        jest.clearAllMocks()
    })




    it('doesnt react to changes', () => {


        let input:HTMLInputElement = screen.getByRole('textbox')
        

        expect(input).toHaveAttribute('disabled')
        
    })


})
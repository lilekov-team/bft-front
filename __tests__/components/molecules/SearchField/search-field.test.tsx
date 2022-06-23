import { cleanup, screen, fireEvent, render, waitFor } from "@testing-library/react"
import SearchField from "../../../../src/components/Molecules/SearchField/search-field"

export let createTimeout = (duration: number) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(true)
        },duration)
    })
}



describe('Search field', () => {


    const onOptionSelected = jest.fn()
    const onSearch = jest.fn()

    beforeEach(() => {
        render(<SearchField
            onOptionSelected={onOptionSelected}
            onSearch={onSearch}
            searchAfter={0}
            collapse
            options={[{
                label: 'First option',
                value: '1'
            },
            {
                label: 'Second option',
                value: '2'
            },
            {
                label: 'Third option',
                value: '3'
            }
            ]}
            placeholder='Search'

        />)
    })

    afterEach(() => {
        cleanup()
        jest.clearAllMocks()
    })


    it('renders search field', () => {

        expect(screen.getByLabelText('Search field')).toBeInTheDocument()

    })



    it('renders search field in collapsed state', () => {

        expect(screen.getByLabelText('Search field')).not.toHaveAttribute('aria-expanded')

    })


    it('renders search field in expanded state on focus', async () => {
        fireEvent.focus(screen.getByLabelText('Search field'))
        await createTimeout(100)
        expect(screen.getByLabelText('Search field')).toHaveAttribute('aria-expanded')
        

    })





    it('renders correct placeholder text', () => {

        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()

    })


    it('focuses the input when search field is focused', async () => {

        let field = screen.getByLabelText('Search field')

        fireEvent.focus(field)
        await createTimeout(100)
        
        expect(screen.getByRole('textbox')).toHaveFocus()
        


    })



    it('doesnt show options when not focused', () => {
        


        expect(screen.getByText('First option')).not.toBeVisible()
    })

    it('shows options menu when input is focused', async () => {

        
        let field = screen.getByLabelText('Search field')
        fireEvent.focus(field)
        await createTimeout(100)
        expect(screen.getByLabelText('Search field')).toHaveAttribute('aria-expanded')
        let input = screen.getByLabelText('text-field container')
        fireEvent.transitionEnd(input)
        await createTimeout(100)
        expect(screen.getByText('First option')).toBeVisible()

       
        
        
    })



    it('calls on search with correct value after the delay', async () => {
        let input = screen.getByRole('textbox')

        fireEvent.change(input, {target:{value: 'temp value'}})
    
    
        await waitFor(() => {
            expect(onSearch).toBeCalledWith('temp value')
        })
    })


    it('calls onOption selected with correct value on Option click', async () => {
        let input = screen.getByRole('textbox')

        fireEvent.focus(input)

        fireEvent.click(screen.getByText('First option'))
        expect(onOptionSelected).toBeCalledWith('1')
        
    })


    it('calls onOption selected with correct value on enter', async () => {
        let input = screen.getByRole('textbox')

        fireEvent.focus(input)

        fireEvent.focus(screen.getByText('First option'))
        fireEvent.keyDown(screen.getByText('First option'), {key: 'Enter', code: 'Enter', charCode: 13})
        expect(onOptionSelected).toBeCalledWith('1')
        
    })



    it('changes focus when arrow down is pressed', async () => {
        let input = screen.getByRole('textbox')

        fireEvent.focus(input)

        fireEvent.keyDown(input, {key: 'ArrowDown'})
        expect(screen.getByText('First option')).toHaveFocus()

        fireEvent.keyDown(screen.getByText('First option'), {key: 'ArrowDown'})
        expect(screen.getByText('Second option')).toHaveFocus()
        
        fireEvent.keyDown(screen.getByText('Second option'), {key: 'ArrowDown'})
        expect(screen.getByText('Third option')).toHaveFocus()

        fireEvent.keyDown(screen.getByText('Third option'), {key: 'ArrowDown'})
        expect(input).toHaveFocus()
    })


    it('changes focus when arrow up is pressed', async () => {
        let input = screen.getByRole('textbox')

        fireEvent.focus(input)

        fireEvent.keyDown(input, {key: 'ArrowUp'})
        expect(screen.getByText('Third option')).toHaveFocus()

        fireEvent.keyDown(screen.getByText('Third option'), {key: 'ArrowUp'})
        expect(screen.getByText('Second option')).toHaveFocus()
        
        fireEvent.keyDown(screen.getByText('Second option'), {key: 'ArrowUp'})
        expect(screen.getByText('First option')).toHaveFocus()

        fireEvent.keyDown(screen.getByText('First option'), {key: 'ArrowUp'})
        expect(input).toHaveFocus()
    })





})
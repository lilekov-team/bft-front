import { cleanup, render, fireEvent, screen, waitFor } from "@testing-library/react"
import Select from "../../../../src/components/Atoms/Select/select"
import { createTimeout } from "../../molecules/SearchField/search-field.test"

describe('Select component in default state', () => {
    const onChange = jest.fn()


    beforeEach(() => {
        render(<Select
            label='Select Label'
            onChange={onChange}

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
            placeholder='Select...'
        />)
    })


    afterEach(() => {
        jest.clearAllMocks()
        cleanup()
    })

    it('renders component', () => {
        expect(screen.getByLabelText('Select field')).toBeInTheDocument()
    })


    it('renders placeholder', () => {
        expect(screen.getByText('Select...')).toBeInTheDocument()
    })

    it('renders label', () => {
        expect(screen.getByText('Select Label')).toBeInTheDocument()
    })

    it('can receive focus', async () => {
        const element = screen.getByLabelText('Select field')
        element.focus()

        await waitFor(() => {
            expect(element).toHaveFocus()
        })

    })

    it('opens menu on click', async () => {
        const element = screen.getByLabelText('Select field')
        // element.focus()


        fireEvent.click(element)
        expect(element).toHaveAttribute('aria-expanded')
        await waitFor(() => {
            expect(screen.getByText('First option')).toBeVisible()
        })

    })

    it('opens menu on Enter', async () => {
        const element = screen.getByLabelText('Select field')
        element.focus()


        fireEvent.keyDown(element, {
            key: 'Enter'
        })
        expect(element).toHaveAttribute('aria-expanded')
        await waitFor(() => {
            expect(screen.getByText('First option')).toBeVisible()
        })

    })



    it('focuses first element when menu is open', async () => {
        const element = screen.getByLabelText('Select field')
        element.focus()


        fireEvent.keyDown(element, {
            key: 'Enter'
        })

        await waitFor(() => {
            expect(screen.getByText('First option')).toHaveFocus()
        })
    })

    it('correcly calls onChange when enter is pressed on option', async () => {


        let option = screen.getByText('First option')


        fireEvent.keyDown(option, {
            key: 'Enter'
        })


        expect(onChange).toHaveBeenCalledWith('1')



    })


    it('correcly calls onChange when option is clicked', async () => {


        let option = screen.getByText('First option')


        fireEvent.click(option)


        expect(onChange).toHaveBeenCalledWith('1')



    })


    it('changes focus when arrow down is pressed', async () => {
        let input = screen.getByLabelText('Select field')

        fireEvent.click(input)

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
        let input = screen.getByLabelText('Select field')

        fireEvent.click(input)

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




describe('Select component in error state', () => {
    const onChange = jest.fn()
    const resetError = jest.fn()

    beforeEach(() => {
        render(<Select
            label='Select Label'
            onChange={onChange}
            error={'error'}
            resetError={resetError}
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
            placeholder='Select...'
        />)
    })


    afterEach(() => {
        jest.clearAllMocks()
        cleanup()
    })



    it('renders error', () => {
        expect(screen.getByText('error')).toBeInTheDocument()
    })


    it('calls resetError on change', () => {

        
        let option = screen.getByText('First option')


        fireEvent.click(option)


        expect(resetError).toHaveBeenCalledTimes(1)


        
    })

})
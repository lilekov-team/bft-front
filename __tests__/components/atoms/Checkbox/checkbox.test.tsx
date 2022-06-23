import {render, screen, fireEvent, cleanup, } from '@testing-library/react'
import Checkbox from '../../../../src/components/Atoms/Checkbox/checkbox'



describe('checkbox', () => {
    const onChange = jest.fn()


    beforeEach(() => {
        render(<Checkbox
        onChange={onChange}
        checked={false}
        text='test label'
        />)
    })

    afterEach(() => {
        cleanup()
        jest.clearAllMocks()
    })



    it('renders checkbox' ,  () => {
        expect(screen.getByRole('checkbox')).toBeInTheDocument()
    })


    it('renders label' ,  () => {
        expect(screen.getByText('test label')).toBeInTheDocument()
    })

    it('calls onChange on click', () => {
        fireEvent.click(screen.getByRole('checkbox'))

        expect(onChange).toBeCalledTimes(1)
    })


    it('calls onChange on enter press', () => {
        screen.getByRole('checkbox').focus()
        fireEvent.keyDown(screen.getByRole('checkbox'), {key: 'Enter', code: 'Enter', charCode: 13})

        expect(onChange).toBeCalledTimes(1)
    })


    it('calls when clicked on label', () => {
        fireEvent.click(screen.getByText('test label'))

        expect(onChange).toBeCalledTimes(1)
    })
})
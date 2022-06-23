import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useEffect, useState } from 'react';
import FormField from './form-field';



export default {
    title: 'Components/Atoms/FormField',
    component: FormField,
    argTypes: {

        onChange: {
            control: {
                disable: true
            }
        },
        onBlur: {
            control: {
                disable: true
            }
        },
        suffix: {
            control: {
                disable: true
            }
        },
        type: {
            options: ['phone', 'email', 'text', 'password'],
            control: { type: 'radio' },
        },
    },

} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => {
    const [state, setState] = useState(args.value ?? '')

    useEffect(() => {
        setState(args.value)
    }, [args.value])

    return <FormField {...args} value={state} onChange={(v) => setState(v)} />

};




export const DefaultField = Template.bind({});
DefaultField.args = {
    value: 'form field',
    
    label: 'Label',
    error: ''
};



export const PhoneField = Template.bind({});
PhoneField.args = {
    value: 'form field',
    type: 'phone',
    label: 'Label',
    error: ''
};



export const WithIcon = Template.bind({});
WithIcon.args = {
    value: 'form field',
    
    label: 'Label',
    suffix: <img src='search.png' className='w-5 h-5'/>,
    error: ''
};
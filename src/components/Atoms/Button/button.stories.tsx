import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button, { ButtonVariants } from './button';


export default {
    title: 'Components/Atoms/Button',
    component: Button,
    argTypes: {
        variant: {
            options: [ButtonVariants.FILLED, ButtonVariants.OUTLINED],
            control: { type: 'radio' },
        },
        onClick: { action: 'clicked' } 
    },
    
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;




export const DefaultButton = Template.bind({});
DefaultButton.args = {

    variant: ButtonVariants.FILLED,
    loading: false,
    children: 'Button'
};



export const OutlinedButton = Template.bind({});
OutlinedButton.args = {

    variant: ButtonVariants.OUTLINED,
    loading: false,
    children: 'Button'
};
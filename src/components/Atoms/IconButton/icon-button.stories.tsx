import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArrowUp } from "../Icons/ArrowUp";
import IconButton from "./icon-button";

export default {
    title: 'Components/Atoms/IconButton',
    component: IconButton,
    argTypes: {
        onClick: { action: 'clicked', control: {disable: true} } ,
        icon: {control: {disable: true}}
    },

} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {


    return <IconButton {...args} />

};




export const DefaultIconButton = Template.bind({});
DefaultIconButton.args = {
    onChange: () => {},
    icon: <ArrowUp className="w-7"/>,
    className: ''
};

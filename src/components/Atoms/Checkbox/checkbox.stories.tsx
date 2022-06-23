import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import Checkbox from "./checkbox";

export default {
    title: 'Components/Atoms/CheckBox',
    component: Checkbox,
    argTypes: {
        onChange: { action: 'change', control: {disable: true} } ,
        
    },

} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
    const [check, setCheck] = useState(false)

    return <Checkbox {...args} checked={check} onChange={() => setCheck(c => !c)}/>

};




export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
    onChange: () => {},
    text: 'default label',
    error: false
};
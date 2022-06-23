import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useState } from "react";
import { CaretDown } from "../Icons/CaretDown";
import Select from "./select";

export default {
    title: 'Components/Atoms/Select',
    component: Select,
    argTypes: {

        onChange: {
            action: 'change',
            control: {
                disable: true
            }
        },

        icon: {
            control: {
                disable: true
            }
        },
        options: {
            control: {
                disable: true
            }
        }
    },

} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
    const [state, setState] = useState<string|undefined>(undefined)
    const [error, setError] = useState(args.error)

   
    useEffect(() => {
        setError(args.error)
    }, [args.error])


    // useEffect(() => {
    //     setState(args.value)
    // }, [args.value])

    return <Select<string> {...args}
    onChange={(v) => {
        args.onChange(v)
        setState(v)}
    } 
    options={args.options as any} value={state} error={error} resetError={() => setError(undefined)}/>

};




export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
    label: 'Default Select',
    options: [{
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
    ],
    placeholder: 'Please select...',
    error: '',
};


export const SelectWithCustonIcon = Template.bind({});
SelectWithCustonIcon.args = {
    label: 'With Custom Icon',
    options: [{
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
    ],
    placeholder: 'Please select...',
    error: '',
    icon: <CaretDown width={20}/>
};
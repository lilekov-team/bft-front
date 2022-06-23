import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchField, { SearchFieldProps } from "./search-field";
import {action} from '@storybook/addon-actions'
import { ReactNode } from "react";

export default {
    title: 'Components/Molecules/SearchField',
    component: SearchField,
    argTypes: {
        options: {
            control: {disable: true}
        },
        onOptionSelected: {
            action: 'selected'
        },
        onSearch: {
            action: 'search'
        }
    }
    
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = (args: SearchFieldProps<unknown> & {
    children?: ReactNode;
}
) => {
    return <SearchField<string> {...(args as  SearchFieldProps<string> & {
        children?: ReactNode;
    }
    )}/>

};




export const DefaultSearchField = Template.bind({});
DefaultSearchField.args = {
    

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
    placeholder: 'Search',
    searchAfter: 200
};


export const CollapsedSearchField = Template.bind({});
CollapsedSearchField.args = {
    collapse: true,

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
    placeholder: 'Search',
    searchAfter: 200
};

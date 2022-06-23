import { ComponentMeta, ComponentStory } from "@storybook/react";
import Typography, { ColorVariants, TextVariants } from "./typography";

export default {
    title: 'Components/Atoms/Typography',
    component: Typography,
    argTypes: {
        variant: {
            options: [TextVariants.MAIN, TextVariants.HEADER, TextVariants.MAIN_HEADER, TextVariants.BLOCKS],
            control: { type: 'radio' },
        },
        colorVariant: {

            options: [ColorVariants.BLACK, ColorVariants.BLUE, ColorVariants.DARK_BLUE, ColorVariants.GREY, ColorVariants.WHITE],

            control: {
                type: 'radio',

                labels: {
                    [ColorVariants.BLACK]: "Black", [ColorVariants.BLUE]: "Blue", [ColorVariants.DARK_BLUE]: "Dark blue", [ColorVariants.GREY]: "Grey", [ColorVariants.WHITE]: "White"
                },
            },
        },
    },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;



export const DefaultTypography = Template.bind({})

DefaultTypography.args = {
    colorVariant: ColorVariants.BLACK,
    children: "Главная кнопка",
    className: "underline",
    underline: false
}

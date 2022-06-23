import { ComponentPropsWithoutRef, HTMLAttributes, PropsWithChildren, PropsWithoutRef } from "react";


export enum TextVariants {
    MAIN = "Main",
    HEADER = "Header",
    MAIN_HEADER = "Main header",
    BLOCKS = "Block text",
    BUTTON = "Button text"
}


export enum ColorVariants {
    WHITE = "text-white",
    BLACK = "text-primary-text",
    BLUE = "text-accent",
    GREY = "text-secondary-text",
    DARK_BLUE = "text-accent-dark"
}





export type TypographyProps = {
    variant: TextVariants,
    colorVariant?: ColorVariants,
    underline?: boolean
}




const Typography: React.FC<TypographyProps & ComponentPropsWithoutRef<'p'>> = ({
    variant,
    className,
    colorVariant,
    children,
    underline,

}) => {

    let baseclassname: HTMLAttributes<HTMLElement> = { className: `font-Roboto ${colorVariant} ${underline ? 'underline' : ''} ` };


    switch (variant) {

        case TextVariants.MAIN:
            return (
                <p className={`font-normal text-lg leading-[2.125rem] `.concat(baseclassname.className!!, className ? " " + className : "")}>
                    {children}
                </p>
            )
        case TextVariants.HEADER:
            return (
                <h6 className={`font-bold text-3xl  `.concat(baseclassname.className!!, className ? " " + className : "")}>
                    {children}
                </h6>
            )
        case TextVariants.MAIN_HEADER:
            return (
                <h1 className={`font-bold text-[6.25rem] leading-[8.125rem] `.concat(baseclassname.className!!, className ? " " + className : "")}>
                    {children}
                </h1>
            )
        case TextVariants.BLOCKS:
            return (
                <p className={`font-normal text-lg leading-[1.5675rem] `.concat(baseclassname.className!!, className ? " " + className : "")}>
                    {children}
                </p>
            )

        case TextVariants.BUTTON:
            return (
                <span className={`font-normal text-lg leading-[1.3175rem] `.concat(baseclassname.className!!, className ? " " + className : "")}>
                    {children}
                </span>
            )
    }


}

Typography.defaultProps = {
    colorVariant: ColorVariants.BLACK,
    variant: TextVariants.MAIN,

}

export default Typography
import { Spinner } from "@chakra-ui/react";
import { useState } from "react";
import Typography, { TextVariants } from "../Typography/typography";



export enum ButtonVariants {
    OUTLINED = "outlined",
    FILLED = "filled"
}


export type ButtonProps = {
    onClick?: () => void,

    variant: ButtonVariants,
    loading?: boolean,
    width?: string
} & React.ComponentPropsWithoutRef<'button'>;




const Button: React.FC<ButtonProps> = ({
    variant,
    onClick,
    children,
    loading,
    disabled,
    width
}) => {

    let [hover, setHover] = useState(false)


    return (
        <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={loading || disabled ? undefined : onClick} className={`${width ? width : ''} cursor-pointer duration-200 shadow-button px-[2.625rem] py-[0.875rem] flex justify-center items-center relative  font-normal text-lg leading-[1.3175rem] border-[1px]  ${disabled ? 'bg-disabled cursor-default  text-white border-transparent' :  variant === ButtonVariants.FILLED ? 'bg-accent  hover:bg-accent-dark text-white border-transparent' : "border-accent bg-transparent text-accent hover:bg-accent hover:text-white"} ${loading ? 'cursor-default' : ''}`}>
            {
                loading &&
                <div className="absolute left-3">
                    <Spinner size='md' color={variant === ButtonVariants.FILLED ? 'white' : hover ? 'white' : 'blue.400'} />
                </div>

            }
            {children}

        </button>
    )
}



export default Button;
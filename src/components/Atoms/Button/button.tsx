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
    loading?: boolean
} & React.ComponentPropsWithoutRef<'button'>;




const Button: React.FC<ButtonProps> = ({
    variant,
    onClick,
    children,
    loading,

}) => {

    let [hover, setHover] = useState(false)


    return (
        <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={loading ? undefined : onClick} className={`duration-200 rounded-md shadow-button h-[3.25rem] desktop:h-[2.875rem] w-full max-w-[13.875rem] desktop:max-w-[24.375rem] flex justify-center items-center relative  font-normal text-lg leading-[1.3175rem] border-[1px]  ${variant === ButtonVariants.FILLED ? 'bg-accent  hover:bg-accent-dark text-white border-transparent' : "border-accent bg-transparent text-accent hover:bg-accent hover:text-white"} ${loading ? 'cursor-default' : 'cursor-pointer'}`}>
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
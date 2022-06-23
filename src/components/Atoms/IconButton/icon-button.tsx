import { ComponentPropsWithoutRef, ReactElement } from "react"

export type IconButtonProps = {
    onClick: () => void,
    icon: ReactElement,
}


const IconButton: React.FC<IconButtonProps & ComponentPropsWithoutRef<'button'>> = ({
    className,
    icon,
    onClick,
    ...props
}

) => {



    return (
        <button {...props} onClick={onClick} className={"cursor-pointer flex items-center justify-center w-[3.75rem]  h-[3.75rem]  rounded-full bg-accent".concat(" ", className ?? '')}>
            {icon}
        </button>
    )
}




export default IconButton
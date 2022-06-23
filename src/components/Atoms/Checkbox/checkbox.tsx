import { CSSProperties, ReactElement } from "react";
import { Check } from "../Icons/Check";
import { motion } from 'framer-motion'

export type CheckBoxStyles = {
    container: CSSProperties,
    label: CSSProperties
}



interface CheckboxProps {
    checked: boolean;
    onChange: (val: boolean) => void;
    text?: string | ReactElement;
    error?: boolean;
    resetError?: () => void;
    styles?: CheckBoxStyles
}



const Checkbox: React.FC<CheckboxProps> = ({
    checked,
    onChange,
    text,
    error,
    resetError,
    styles
}) => {


    const handleChange = () => {
        if (resetError) {
            resetError();
        }
        onChange(!checked);
    };





    return (
        <div className="flex flex-row items-center" style={styles?.container}>
            <button aria-checked={checked} onKeyDown={(e) => {

                if (e.key === 'Enter') {
                    e.preventDefault()
                    handleChange()
                }
            }} role='checkbox' type="button" className={`cursor-pointer m-2 w-5 h-5 border-[2px] rounded-[4px]  ${error ? 'border-error' : 'border-accent-dark'} flex flex-row items-center justify-center`} onClick={handleChange}>
                <motion.svg
                    initial={false}


                    width="15"
                    height="15"
                    viewBox={"0 0 440 440"}

                >


                    <motion.path
                        d="M 0 128.666 L 128.658 257.373 L 341.808 0"
                        transform="translate(54.917 68.947) rotate(-4 170.904 128.687)"
                        fill="transparent"
                        strokeWidth="65"
                        stroke={error ? "var(--error)" :"var(--accent-dark)"}
                        animate={{
                            pathLength: checked ? 1 : 0,

                            transition: {
                                duration: 0.2,
                                ease: 'easeIn',
                                easings: 'easeIn',


                            }
                        }}
                    />
                </motion.svg>


            </button>
            {
                text &&
                <label onClick={handleChange}  className="cursor-pointer text-primary-text text-sm" style={styles?.label}>
                    {text}
                </label>

            }
        </div>
    );
};

export default Checkbox;
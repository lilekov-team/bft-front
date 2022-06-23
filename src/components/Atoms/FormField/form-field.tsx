import { motion, Variants } from 'framer-motion'
import { ChangeEventHandler, CSSProperties, ReactElement, useEffect, useRef, useState } from "react";
import ReactInputMask from "react-input-mask";

interface InputProps {
    type: "email" | "text" | 'password' | "phone";
    onChange: (value: string) => void;
    error?: string;
    resetError?: () => void;
    name: string;
    value: string;
    label?: string;
    styles?: CSSProperties,
    placeholder?: string,
    onBlur?: () => void,
    onFocus?: () => void,
    suffix?: ReactElement,
    containerStyles?: CSSProperties,
    inputStyles?: CSSProperties,
    errorStyles?: CSSProperties,
    placeholderColorClassname?: string,
    outerRef?: any,
    disabled?: boolean,
    onAnimationEnd?: () => void
}


const variants: Variants = {
    "hidden": {
        scale: 0,
        opacity: 0,
        height: 0,
        transition: {
            duration: 0.3,
            easings: 'easeInOut'
        }
    },
    "shown": {
        scale: 1,
        opacity: 1,
        height: 20,
        transition: {
            duration: 0.3,
            easings: 'easeInOut'
        }
    },


}



const FormField: React.FC<InputProps> = ({
    error,
    onChange,
    resetError,
    type,
    name,
    value,
    label,
    styles,
    placeholder,
    onBlur,
    suffix,
    containerStyles,
    inputStyles,
    errorStyles,
    onFocus,
    placeholderColorClassname,
    outerRef,
    disabled,
    onAnimationEnd
}) => {
    const ref = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<ReactInputMask & HTMLInputElement>(null)
    const [show, setShow] = useState(false)
    const [innerError, setInnerError] = useState(error)



    useEffect(() => {
        if (error) {
            setInnerError(error)
        }
    }, [error])


    useEffect(() => {
        setShow(true)
    }, [])


    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        let value = e.target.value;

        if (type === 'phone') {
            value = value.replace(/[ +()-]/g, '')

        }


        if (resetError) {
            resetError();
        }
        onChange(value);
    };


    const focus = () => {
        if (disabled) return 
        ref.current?.focus()
    }

    return (
        <div  onClick={focus} className=" w-full flex flex-col" style={styles}>
            {
                label &&
                <label
                    className="text-primary-text text-base mb-1 px-[1.0675rem]"
                    htmlFor="custom-form-field"
                >
                    {label}
                </label>
            }
            <div aria-label='text-field container' ref={outerRef} className="w-full flex flex-row bg-light-grey px-[1.0675rem] py-[0.875rem] rounded-[0.625rem] " style={containerStyles} onTransitionEnd={onAnimationEnd}>
                {type === "phone" && show ? (
                    <ReactInputMask
                        aria-label='phone-input'
                        id="custom-form-field"
                        mask="+ 7 (999) 999 - 99 - 99"
                        maskPlaceholder={null}
                        onChange={handleChange}
                        value={value}
                        name={name}
                        ref={phoneRef}
                        placeholder='+ 7 (999) 123 - 45 - 67'
                        className={`w-full border-none focus:outline-none bg-transparent text-primary-text placeholder:${placeholderColorClassname ??  'text-secondary'} text-lg`}
                        onBlur={() => {
                            if (onBlur) {
                                onBlur()
                            }
                        }}
                        onFocus={() => {
                            if (onFocus) {
                                onFocus()
                            }
                        }}
                        style={inputStyles}
                        disabled={disabled}
                    />
                ) : (
                    <input
                        aria-label='text-input'
                        onChange={handleChange}
                        ref={ref}
                        value={value}
                        name={name}
                        type={type}
                        id="custom-form-field"
                        className={`w-full border-none focus:outline-none bg-transparent text-primary-text ${placeholderColorClassname ??  'placeholder:text-secondary'} text-lg`}
                        placeholder={placeholder}
                        onBlur={() => {
                            if (onBlur) {
                                onBlur()
                            }
                        }}
                        onFocus={() => {
                            if (onFocus) {
                                onFocus()
                            }
                        }}
                        disabled={disabled}
                        style={inputStyles}
                    />
                )}
                {
                    suffix &&
                    <div className='flex items-center justify-center'>
                        {suffix}
                    </div>
                }
            </div>
            <motion.span
                variants={variants}
                animate={error ? 'shown' : 'hidden'}
                onTransitionEnd={() => {
                    if (!error) {
                        setInnerError(undefined)
                    }
                }}
                style={errorStyles}
                className="text-xs max-w-max text-error px-[1.0675rem]" onClick={() => {
                    if (resetError) {
                        resetError()
                    }
                    if (type === 'phone') {
                        phoneRef.current?.focus()
                    } else {
                        ref.current?.focus()
                    }
                }}>
                {innerError}
            </motion.span>

        </div>
    );
};

export default FormField;
import { Popover, PopoverContent, PopoverTrigger, useOutsideClick } from "@chakra-ui/react"

import { Variants, motion } from "framer-motion"
import { ComponentPropsWithoutRef, createRef, KeyboardEventHandler, PropsWithChildren, ReactElement, RefObject, useEffect, useMemo, useRef, useState, CSSProperties, KeyboardEvent } from "react"
import { useWindowDimensions } from "../../../hooks/dimension"
import { CaretDown } from "../Icons/CaretDown"


export type SelectOption<T> = {
    value: T,
    label: string
}



interface SelectProps<T> {
    options: SelectOption<T>[],
    label?: string,
    icon?: ReactElement,
    placeholder: string,
    value?: T,
    onChange: (value: T) => void,
    error?: string,
    resetError?: () => void,
    styles?: Styles
}





interface Styles {
    container: CSSProperties,
    option: CSSProperties,
    select: CSSProperties,
    error: CSSProperties
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


const Select = <T,>(p: SelectProps<T>) => {





    const {
        options,
        label,
        icon,
        placeholder,
        value,
        onChange,
        error,
        resetError,
        styles,

    } = p




    const getCurrentOption = useMemo(() => {
        return options.find(o => o.value === value)
    }, [options, value])


    const [open, setOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLDivElement>(null)
    const [menuWidth, setMenuWidth] = useState(0)
    const { width } = useWindowDimensions()
    const [focusedIndex, setFocusedIndex] = useState(0)
    useOutsideClick({
        ref: containerRef,
        handler: () => {
            toggleMenu(false)
        }
    })

    const getInitialRefs = () => {
        let newRefs: RefObject<HTMLDivElement>[] = []
        for (let option in options) {
            newRefs.push(createRef<HTMLDivElement>())
        }


        return newRefs
    }
    const optionRefs = useRef<RefObject<HTMLDivElement>[]>(getInitialRefs())




    useEffect(() => {
        let newRefs: RefObject<HTMLDivElement>[] = []
        for (let option in options) {
            newRefs.push(createRef<HTMLDivElement>())
        }
        optionRefs.current = newRefs
    }, [options])


    const toggleMenu = (o?: boolean) => {
        if (o !== undefined) {
            setOpen(o)

        } else {
            setOpen(c => !c)
        }


    }



    useEffect(() => {
        setTimeout(() => {

            handleFocusCurrent()
        }, 200)
    }, [open])



    const handleFocusCurrent = () => {
        if (open && optionRefs.current.length > 0) {
            if (value) {
                const currentOptionIndex = options.findIndex((o) => o.value === value)
                optionRefs.current[currentOptionIndex]?.current?.focus()
                setFocusedIndex(currentOptionIndex + 1)
            } else {
                optionRefs.current[0].current?.focus()

                setFocusedIndex(1)
            }
        }
    }




    const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {

        if (e.key === 'Enter') {
            e.preventDefault()
            e.stopPropagation()
            toggleMenu()
        }

        if (open) {
            handleArrowKeys(e)

        } else {
            const currentOptionIndex = options.findIndex((o) => o.value === value)


            if (options.length > 0) {
                if (currentOptionIndex === -1) {
                    onChange(options[0].value)
                } else {
                    if (e.key === 'ArrowUp') {
                        e.preventDefault()
                        e.stopPropagation()
                        if (currentOptionIndex === 0) {
                            onChange(options[options.length - 1].value)
                        } else {
                            onChange(options[currentOptionIndex - 1].value)
                        }
                    } else if (e.key === 'ArrowDown') {
                        e.preventDefault()
                        e.stopPropagation()
                        if (currentOptionIndex === options.length - 1) {
                            onChange(options[0].value)
                        } else {
                            onChange(options[currentOptionIndex + 1].value)
                        }
                    }
                }

            }

        }
    }



    const handleArrowKeys = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === 'ArrowDown') {

            e.preventDefault()
            e.stopPropagation()
            let res = getNextElement(focusedIndex)


            if (res) {

                let { el, index } = res
                el?.focus()
                setFocusedIndex(index)
            }
        }
        if (e.key === 'ArrowUp') {
            e.preventDefault()
            e.stopPropagation()
            let res = getPreviousElement(focusedIndex)



            if (res) {

                let { el, index } = res
                el?.focus()
                setFocusedIndex(index)
            }
        }
    }


    const getNextElement = (index: number) => {
        if (optionRefs.current.length > 0) {
            if (index === optionRefs.current.length) {

                return { el: inputRef.current, index: 0 }
            } else {

                return { el: optionRefs.current[index].current, index: index + 1 }
            }
        }
    }


    const getPreviousElement = (index: number) => {
   
        if (optionRefs.current.length > 0) {
            if (index === 0) {
                return { el: optionRefs.current[optionRefs.current.length - 1].current, index: optionRefs.current.length }

            } else if (index === 1) {

                return { el: inputRef.current, index: 0 }
            } else {
                return { el: optionRefs.current[index - 2].current, index: index - 1 }
            }
        }
    }



    useEffect(() => {
        updateMenuWidth()
    }, [width])



    const updateMenuWidth = () => {
        if (inputRef.current) {
            setMenuWidth(inputRef.current.getBoundingClientRect().width)
        }
    }



    const [innerError, setInnerError] = useState(error)



    useEffect(() => {
        if (error) {
            setInnerError(error)
        }
    }, [error])



    const handleChange = (value: T) => {
        if (resetError) {
            resetError()
        }
        onChange(value)
        toggleMenu(false)
        inputRef.current?.focus()
    }


    return (
        <div className="w-full" ref={containerRef}>

            <Popover gutter={1} placement="bottom" autoFocus={false} closeOnBlur={false} matchWidth={true} isOpen={open} onClose={() => {
            }
            }>
                <PopoverTrigger >
                    <div aria-expanded={open ? undefined : true} className="w-full " style={styles?.container}>
                        <div className=" w-full flex flex-col" >
                            {
                                label &&
                                <label
                                    className="text-primary-text text-base mb-1 px-[1.0675rem]"
                                    htmlFor="custom-form-field"
                                >
                                    {label}
                                </label>
                            }
                            <div tabIndex={0} onKeyDown={handleKeyDown} onMouseDown={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                            }} aria-label="Select field"
                                aria-expanded={open ? true : undefined}
                                onClick={(e) => {

                                    toggleMenu()
                                }} ref={inputRef} className="w-full flex flex-row justify-between bg-light-grey px-[1.0675rem] py-[0.875rem] rounded-[0.625rem] min-h-[3.5rem] cursor-pointer focus:outline-2 focus:outline-secondary focus:outline" style={styles?.select} >
                                {
                                    getCurrentOption?.label ?
                                        <span className="text-primary-text text-lg">
                                            {
                                                getCurrentOption?.label
                                            }
                                        </span>
                                        :
                                        <span className="text-lg text-secondary">
                                            {placeholder}
                                        </span>
                                }

                                {

                                    <div className='flex items-center justify-center'>
                                        {icon ?? <CaretDown width={12} fill={'#A4A4A4'} />}
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
                                style={styles?.error}
                                className="text-xs max-w-max text-error px-[1.0675rem]" >
                                {innerError}
                            </motion.span>

                        </div>

                    </div>
                </PopoverTrigger>

                <PopoverContent boxShadow={'0px 2px 2px rgba(0, 0, 0, 0.16)'} _focus={{
                    outline: 'none',
                    border: 'none',
                    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.16)'
                }}
                    width={menuWidth}


                >
                    {
                        options.map((option, index) => {

                            let ref: RefObject<HTMLDivElement> | undefined = undefined

                            if (optionRefs.current.length > index) {
                                ref = optionRefs.current[index]
                            }


                            return <div tabIndex={0} onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleChange(option.value)
                                }
                                if (e.key === 'Escape') {
                                    toggleMenu(false)
                                    inputRef.current?.focus()
                                }

                                handleArrowKeys(e)
                            }} ref={ref} onClick={() => handleChange(option.value)} className=" outline-none focus:outline-none text-primary-text bg-white capitalize cursor-pointer w-full focus:bg-light-grey px-[1.0675rem] py-3" key={(option.value as any).toString()}>
                                {option.label}
                            </div>

                        })
                    }

                </PopoverContent>

            </Popover>

        </div>
    )
}


export default Select 
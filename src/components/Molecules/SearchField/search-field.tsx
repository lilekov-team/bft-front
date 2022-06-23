import { ComponentPropsWithoutRef, createRef, KeyboardEventHandler, PropsWithChildren, RefObject, useEffect, useRef, useState } from "react"
import FormField from "../../Atoms/FormField/form-field"
import SearchSVG from '../../../../assets/search.svg'
import { Search } from "../../Atoms/Icons/Search"
import { Popover, PopoverContent, PopoverTrigger, Portal } from "@chakra-ui/react"
import { useWindowDimensions } from "../../../hooks/dimension"


export interface SearchFieldOptions<T> {
    label: string,
    value: T
}


export interface SearchFieldProps<T> {

    onSearch: (value: string) => void,
    onOptionSelected: (value: T) => void,
    options: SearchFieldOptions<T>[],
    placeholder: string,
    collapse?: boolean,
    searchAfter?: number
}

let searchTimeout: NodeJS.Timeout | undefined 



const SearchField = <T,>({
    onOptionSelected,
    onSearch,
    options,
    placeholder,
    collapse,
    searchAfter
}: PropsWithChildren<SearchFieldProps<T>>) => {
    const [query, setQuery] = useState("")
    const [collapsed, setCollapsed] = useState(collapse ? true : false)
    const containerRef = useRef<HTMLDivElement>(null)
    const [showMenu, setShowMenu] = useState(false)
    const inputRef  = useRef<HTMLDivElement>(null)
    const [menuWidth, setMenuWidth] = useState(0)
    const {width} = useWindowDimensions()
    const [focusedIndex, setFocusedIndex] = useState(0)
    const getInitialRefs = () => {
        let newRefs:RefObject<HTMLDivElement>[] = []
        for (let option in options) {
            newRefs.push(createRef<HTMLDivElement>())
        }


        return newRefs
    }
    const optionRefs = useRef<RefObject<HTMLDivElement>[]>(getInitialRefs())




    useEffect(() => {
        let newRefs:RefObject<HTMLDivElement>[] = []
        for (let option in options) {
            newRefs.push(createRef<HTMLDivElement>())
        }
        optionRefs.current = newRefs
    }, [options])

    

    useEffect(() => {
        updateMenuWidth()
    }, [width])



    const updateMenuWidth = () => {
        if (inputRef.current) {
            setMenuWidth(inputRef.current.getBoundingClientRect().width)
        }
    }


    const toggleCollapse = (c: boolean) => {
        setCollapsed(c)
    }



    useEffect(() => {
        setCollapsed(collapse ? true : false)
    }, [collapse])


    const changeText = (value: string) => {
        if (searchTimeout) {
            clearTimeout(searchTimeout)
        }
        setQuery(value)

        searchTimeout = setTimeout(() => {
           
            onSearch(value)
        }, searchAfter ?? 500)
    }



    const onOption = (option: SearchFieldOptions<T>) => {
        changeText(option.label)
        onOptionSelected(option.value)
        setShowMenu(false)

    }


    const handleFocus = () => {
        
        setTimeout(() => {
            let newTarget = document.activeElement
            if (containerRef.current && !containerRef.current.contains(newTarget)) {
                
                containerRef.current?.querySelector('input')?.focus()
            }
        }, 0)
    }



    const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {

        if (e.key === 'ArrowDown') {
            e.preventDefault()
            e.stopPropagation()
            let res= getNextElement(focusedIndex)



            if (res) {
                
                let {el, index} = res
                el?.focus()
                setFocusedIndex(index)
            }
        }
        if (e.key === 'ArrowUp') {
            e.preventDefault()
            e.stopPropagation()
            let res= getPreviousElement(focusedIndex)


        

            if (res) {
                
                let {el, index} = res
                el?.focus()
                setFocusedIndex(index)
            }
        }
    }


    const getNextElement = (index: number) => {
        if ( optionRefs.current.length>0) {
            if (index === optionRefs.current.length) {

                return {el: containerRef.current?.querySelector('input'), index: 0}
            } else {

                return {el: optionRefs.current[index].current, index: index+1}
            }
        }
    }


    const getPreviousElement = (index: number) => {
    
        if ( optionRefs.current.length>0) {
            if (index === 0) {
                return {el: optionRefs.current[optionRefs.current.length -1 ].current, index: optionRefs.current.length}

            } else if (index === 1) {
                
                return {el: containerRef.current?.querySelector('input'), index: 0}
            } else {
                return {el: optionRefs.current[index - 2].current, index: index -1}
            }
        }
    }

    return (
        <div
            aria-label="Search field"
            aria-expanded={collapsed ? undefined : true}
            ref={containerRef}
            onKeyDown={handleKeyDown}
            
            onBlur={(e) => {

                setTimeout(() => {
                    let newTarget = document.activeElement
               
                    if (containerRef.current && !containerRef.current.contains(newTarget)) {
                        if (collapse) {
                            toggleCollapse(true)

                        }
                        setShowMenu(false)
                        
                    }

                }, 0)

            }}
            onFocus={handleFocus}
            tabIndex={1} className=" w-full ">
            <Popover gutter={0} placement="bottom" autoFocus={false} closeOnBlur={false}   matchWidth={true} isOpen={showMenu && options.length > 0} onClose={() => {
            }
                }>
                <PopoverTrigger >
                    <div className="w-full " >

                        <FormField
                            outerRef={inputRef}
                            value={query}
                            onChange={changeText}
                            suffix={<Search width={collapse && collapsed ? 29 : '21'} height={collapse && collapsed ? 29 : 20} color={collapse ? 'var(--white)' : undefined} />}
                            name='search-field'
                            type="text"
                            containerStyles={{


                                boxShadow: collapse ? collapsed ? 'none' : '0px 2px 5px rgba(0, 0, 0, 0.16)' : '0px 2px 5px rgba(0, 0, 0, 0.16)',
                                backgroundColor: collapse ? collapsed ? 'var(--transparent)' : 'var(--pale-blue)' : 'var(--white)',
                                maxWidth: collapsed ? '29px' : '100%',
                                padding: collapsed ? '0' : '0.875rem  1.0675rem',
                                transitionDuration: '0.3s',
                                transitionTimingFunction: 'ease-in-out',
                                color: collapse ? 'var(--white)' : undefined
                            }}
                            inputStyles={collapse ? {
                                color: collapse ? 'var(--white)' : undefined,
                                transitionDuration: '0.3s',
                                transform:  collapse && collapsed ? 'scale(0)' : 'scale(1)'
                            } : undefined}
                            onAnimationEnd={() => {
                                if (collapse && !collapsed) {
                                    setShowMenu(true)
                                    updateMenuWidth()
                                }
                            }}
                            onFocus={() => {

                                if (!collapse) {
                                    setShowMenu(true)
                                    updateMenuWidth()
                                    

                                } 
                                toggleCollapse(false)
                                setFocusedIndex(0)
                            }}
                            placeholder={placeholder}
                            placeholderColorClassname={collapse ? 'placeholder:text-white' : undefined}
                        
                        />
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


                            return <div onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    onOption(option)
                                }
                            }} onFocus={() => {
                               
                            }} ref={ref} onClick={() => onOption(option)} tabIndex={2} className=" outline-none focus:outline-none text-primary-text bg-white capitalize cursor-pointer w-full focus:bg-light-grey px-[1.0675rem] py-3" key={(option.value as any).toString()}>
                                {option.label}
                            </div>

                        })
                    }
                    
                </PopoverContent>

            </Popover>

        </div>
    )
}



export default SearchField
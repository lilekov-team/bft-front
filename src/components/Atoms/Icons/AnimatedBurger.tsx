import { motion, useMotionValue } from 'framer-motion'
import { useState } from 'react'

interface AnimatedBurgerProps {
    open: boolean
}


const AnimatedBurger = () => {
    const [open, setOpen] = useState(false)
    const length = useMotionValue(30)






    return (
        <motion.svg width={37} height={37} viewBox={'0 0 100 100'} className="cursor-pointer" onClick={() => setOpen(c => !c)}>
            <motion.path
                d={`M 10 10 L 90 10`}
                stroke="var(--grey)"
                strokeLinecap={'round'}
                strokeWidth={12}

                animate={open ? {
                    originX: 0,
                    originY: 0,
                    pathLength: 0.5,
                    rotateZ: '45deg',
                    transition: {
                        duration: 0.3
                    }
                } : {
                    originX: 0,
                    originY: 0,
                    pathLength: 1,
                    rotateZ: '0deg',
                    transition: {
                        duration: 0.3
                    }

                }}



            />
            <motion.path
                d={"M 50 50 L -7 50"}
                stroke="var(--grey)"
                strokeLinecap={'round'}
                strokeWidth={12}
                style={{
                    originX: 1,
                    
                }}
                animate={open ? {
                    
                    pathLength: 1,
                    rotateZ: '-45deg',
                    transition: {
                        duration: 0.3
                    }
                } : {
                    
                    pathLength: 0.7,
                    rotateZ: '0deg',
                    transition: {
                        duration: 0.3
                    }

                }}

            />
            <motion.path
                d={"M 50 50 L 107 50"}
                stroke="var(--grey)"
                strokeLinecap={'round'}
                strokeWidth={12}
                style={{
                    originX: 0,
                    
                }}
                animate={open ? {
                    
                    pathLength: 1,
                    rotateZ: '-45deg',
                    transition: {
                        duration: 0.3
                    }
                } : {
                    
                    pathLength: 0.7,
                    rotateZ: '0deg',
                    transition: {
                        duration: 0.3
                    }

                }}

            />
            <motion.path
                d={"M 90 90 L 10 90"}
                stroke="var(--grey)"
                strokeLinecap={'round'}
                strokeWidth={12}
                animate={open ? {
                    originX: 1,
                    originY: 1,
                    pathLength: 0.5,
                    rotateZ: '45deg',
                    transition: {
                        duration: 0.3
                    }
                } : {
                    originX: 1,
                    originY: 1,
                    pathLength: 1,
                    rotateZ: '0deg',
                    transition: {
                        duration: 0.3
                    }

                }}
            />
        </motion.svg>
    )

}



export default AnimatedBurger
import { Box, BoxProps, useColorModeValue } from "@chakra-ui/core"
import { forwardRef } from "@chakra-ui/system"
import React, { ReactElement, isValidElement, cloneElement } from "react"

export interface CardGameProps extends BoxProps {
    icon?: ReactElement,
    color: string,
    "aria-label": string,
}

export const CardGame = forwardRef<CardGameProps, "div">(
    function CardGane(props, ref) {
        const { icon, children, color, "aria-label": ariaLabel, ...rest } = props
        const element = icon || children
        const _children = isValidElement(element)
          ? cloneElement(element as any, {
              "aria-hidden": true,
              focusable: false,
        })
          : null
    
        return (
          <Box
            w="120px"
            h="121px"
            bg={useColorModeValue("#E2E2E2","#1e1e1e")}
            borderRadius={10}
            overflow="hidden"
            flexDirection="row"
            justifyContent="center"
            position="relative"
            margin="5px"
            display="inline-block"
            ref={ref}
            aria-label={ariaLabel}
            __css={{
                transitionDuration: '0s',
                transition: 'all 1s ease',
                verticalAlign: 'top',
                textDecoration: 'none',
                '&:hover': {
                    cursor: 'pointer'
                },
                '& > .circle > svg':{
                    width: '80px',
                    height: '80px',
                    fill: color,
                    transitionDuration: '5s',
                    transition: 'all 1s ease',
                    position: 'relative',
                    margin: '19px',
                    zIndex: '999',
                    transform: 'translateZ(0)'
                },
                '& > .overlay': {
                    width: '218px',
                    height: '218px',
                    borderRadius: '50%',
                    bg: color,
                    top: '250px',
                    left: '140px',
                    zIndex: 0,
                    transition: 'transform 0.3s ease-out',
                },
                '&:hover > svg': {
                    color: "#333"
                },
                '&:hover > .overlay':{
                    transform: 'scale(4) translateZ(0)',
                },
                '&:hover > .circle:after': {
                    bg: useColorModeValue("#fff","#1e1e1e")
                },
                '&:hover > .circle > svg': {
                    fill: 'white!important',
                    transition: 'transform 0.3s ease-out',
                }
            }}
            _hover={{
                bg: color
            }}
            {...rest}
          >
            <Box __css={{
                  width: '218px',
                  position: 'absolute',
                  height: '218px',
                  borderRadius: '50%',
                  background: color,
                  top: '250px',
                  left: '140px',
                  zIndex: 0,
                  transition: 'transform 0.3s ease-out'
            }} className="overlay"/>
            <Box className="circle">
                {_children}
            </Box>
          </Box>
        )
      },
)
// {
//     return(
//         <Box style={css`

//         `}>
//             <Box>
//                 <IconContext.Provider value={{ color: color}}>

//                 </IconContext.Provider>
//             </Box>
//         </Box>
//     );
// }
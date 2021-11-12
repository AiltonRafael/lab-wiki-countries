import { createBreakpoints } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})

export const theme = extendTheme({
    styles: {
      global: {
        "html": {
          heigth: '100vh'
        },
        "body": {
            maxHeight: '100%',
        }
      },
    }, 
    colors: {
        100: '#198ff4'
    },
    breakpoints
  })
  
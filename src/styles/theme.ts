import { extendTheme, Theme } from "@chakra-ui/react";


export const theme = extendTheme<Theme>({
  colors: {
    gray: {
      // "900": 'cyan'
    },
    white: '#F5F8FA'
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      '.chakra-divider': {
        borderColor: '#47585B !important',
        opacity: 1,
      },
    }
  }

})

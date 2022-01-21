// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    primary: '#4F2890',
    secondary: '#F0CDB3',
    'background-color': '#231F2E',
    'foreground-color': '#342E44',
    'font-default': '#eee',
    'font-link-default': '#ccc'
  }
})

export default theme;
import { createMuiTheme } from '@material-ui/core/styles'

const lightTheme = createMuiTheme(({
    palette: {
        type: 'light',
        primary: {
          main: '#8b44ce',
        },
        secondary: {
          main: '#f50057',
        },
        background: {
          default: '#52d0a6',
          paper: '#589271',
        },
      },
}))

const darkTheme = createMuiTheme(({
    palette: {
        type: 'dark',
        primary: {
          main: '#7cbb0e',
        },
        secondary: {
          main: '#f50057',
        },
        background: {
          default: '#fdcc0f',
          paper: '#a2a14c',
        },
      },
}))

export { lightTheme, darkTheme }
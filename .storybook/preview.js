import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/styles/global-styles.js'
import { theme } from '../src/styles/theme.js'

export const parameters = {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: theme.colors.white,
        },
        {
          name: 'dark',
          value: theme.colors.PrimaryColor,
        },
      ],
    },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  ),
]

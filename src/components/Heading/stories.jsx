import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import { Heading } from '.'

export default {
  title: 'Heading',
  component: Heading,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const Light = (args) => <Heading {...args} />
export const Dark = (args) => <Heading {...args} />

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
}

Dark.args = {
  children: 'O texto está claro',
  colorDark: false,
}

import { Footer } from '.'

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `
      <p><a href="#">Feito com ❤ por Dedealtograu </a></p>
    `,
  },
}

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  )
}

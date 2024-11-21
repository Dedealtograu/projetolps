import { SectionContainer } from '.'

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas, voluptate aspernatur, mollitia, ea
          quas dolorum voluptatum voluptatem fugiat voluptate. Quisquam voluptas, voluptate aspernatur, mollitia, ea
          quas dolorum voluptatum voluptatem fugiat voluptate. Quisquam
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
}

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  )
}

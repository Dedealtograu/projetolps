import { TextComponent } from '.'

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit dolorem est. Autem, blanditiis officia quod, pariatur ut molestias quo amet consequatur cupiditate esse similique tenetur illum? Omnis, qui eaque.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
}

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  )
}

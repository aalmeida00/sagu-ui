import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Switch, { SwitchProps } from '.'

export default {
  title: 'Switch',
  component: Switch,
  args: {},
  argTypes: {
    colors: {
      control: false
    }
  }
} as Meta

export const Default: StoryFn<SwitchProps> = (args) => {
  return <Switch {...args} />
}

export const DefaultChecked: StoryFn<SwitchProps> = (args) => {
  return <Switch {...args} defaultChecked />
}

export const Disabled: StoryFn<SwitchProps> = (args) => {
  return <Switch {...args} disabled />
}

export const Customized: StoryFn<SwitchProps> = (args) => {
  return (
    <div
      style={{
        display: 'grid',
        gridGap: '10px'
      }}
    >
      <p>Switch without text</p>
      <Switch
        {...args}
        colors={{ dot: '#7ec4fa', bgChecked: 'purple', bgUnchecked: 'hotpink' }}
      />
      <br />
      <p>Switch with text</p>
      <Switch
        {...args}
        label="Dark mode?"
        colors={{ dot: 'beige', bgChecked: 'purple', bgUnchecked: '#81fd9c' }}
      />
      <br />
      <p>Switch with defaultValue</p>
      <Switch
        {...args}
        label="Dark mode?"
        defaultChecked
        colors={{ dot: 'green', bgChecked: 'purple', bgUnchecked: 'hotpink' }}
      />
      <br />
    </div>
  )
}

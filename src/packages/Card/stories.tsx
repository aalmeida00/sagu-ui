import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Card, { CardProps } from '.'

import { mock as imgMock } from '../Slider/mock'

export default {
  title: 'Card',
  component: Card,
  args: {
    images: [imgMock[4]],
    title: 'Premmium',
    content:
      'The Premium plan is made for businesses that are managing 10 or more subscriptions and offers additional benefits like single sign-on.',
    cta: 'Get now',
    handleClick: () => console.log('ok')
  }
} as Meta

export const Default: StoryFn<CardProps> = (args) => <Card {...args} />

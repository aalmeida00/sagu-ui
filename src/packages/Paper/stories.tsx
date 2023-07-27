import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { theme } from '../../styles'

import Paper, { PaperProps } from '.'

export default {
  title: 'Paper',
  component: Paper,
  args: {
    active: true,
    placement: 'bottom'
  }
} as Meta

export const Default: StoryFn<PaperProps> = (args) => (
  <div
    style={{
      position: 'relative',
      width: '10rem',
      height: '10rem',
      background: theme.colors.primary.lighter
    }}
  >
    <Paper {...args}>
      <div
        style={{
          width: '10rem',
          height: '10rem'
        }}
      />
    </Paper>
  </div>
)

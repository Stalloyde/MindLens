import Button from './Button.vue'
import '../../assets/main.css'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: { control: { type: 'select' }, options: ['primary', 'secondary'] },
    content: {
      control: { type: 'select' },
      options: ['leftIconText', 'rightIconText', 'icon', 'text']
    }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryButtonLeftIconText = {
  args: {
    type: 'primary',
    content: 'leftIconText'
  }
}

export const PrimaryButtonRightIconText = {
  args: {
    type: 'primary',
    content: 'rightIconText'
  }
}

export const PrimaryButtonIconText = {
  args: {
    type: 'primary',
    content: 'icon'
  }
}

export const PrimaryButtonText = {
  args: {
    type: 'primary',
    content: 'text'
  }
}

export const SecondaryButtonLeftIconText = {
  args: {
    type: 'secondary',
    content: 'leftIconText'
  }
}

export const SecondaryButtonRightIconText = {
  args: {
    type: 'secondary',
    content: 'rightIconText'
  }
}

export const SecondaryButtonIcon = {
  args: {
    type: 'secondary',
    content: 'icon'
  }
}

export const SecondaryButtonText = {
  args: {
    type: 'secondary',
    content: 'text'
  }
}

import Notification from './Notification.vue'
import '../../assets/main.css'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Notification',
  component: Notification,
  tags: ['autodocs'],
  argTypes: {
    notificationType: {
      control: { type: 'select' },
      options: ['info', 'error', 'warning', 'success']
    },
    notificationContent: {
      control: { type: 'select' },
      options: ['all', 'content', 'title', 'titleContent']
    }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NotificationInfo = {
  args: {
    notificationType: 'info',
    notificationContent: 'all'
  }
}

export const NotificationError = {
  args: {
    notificationType: 'error',
    notificationContent: 'all'
  }
}

export const NotificationWarning = {
  args: {
    notificationType: 'warning',
    notificationContent: 'all'
  }
}

export const NotificationSuccess = {
  args: {
    notificationType: 'success',
    notificationContent: 'all'
  }
}

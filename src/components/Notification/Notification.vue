<script setup>
import MainSection from './MainSection.vue'
import ErrorIcon from '../icons/error-circle.svg'
import InfoIcon from '../icons/info-circle.svg'
import SuccessIcon from '../icons/success.svg'
import WarningIcon from '../icons/warning.svg'
import CrossIcon from '../icons/cross.svg'

defineProps({
  notificationType: { type: String, default: 'info' },
  notificationContent: { type: String, default: 'all' }
})

const iconMap = {
  info: InfoIcon,
  error: ErrorIcon,
  warning: WarningIcon,
  success: SuccessIcon
}
</script>

<template>
  <dialog open :class="[notificationType, notificationContent]">
    <div>
      <img class="icon" :src="iconMap[notificationType]" />
    </div>
    <MainSection :notificationContent="notificationContent" :notificationType="notificationType" />
    <div><img class="closeIcon" :src="CrossIcon" /></div>
  </dialog>
</template>

<style scoped>
dialog {
  display: flex;
  width: 720px;
  border-radius: 4px;
  padding: 24px 24px;
  gap: 12px;
  margin: 10px;
}

.all {
  height: 184px;
}

.content {
  height: 48px;
  align-items: center;
}

.titleContent {
  height: 128px;
}

.title {
  height: 80px;
  align-items: center;
}

.info {
  background-color: #f4faff;
  border: 1px solid #2c75dd;
}

.error {
  background-color: #fef5f5;
  border: 1px solid #cc3123;
}
.warning {
  background-color: #fdf3e1;
  border: 1px solid #dc5a00;
}
.success {
  background-color: #f8fff2;
  border: 1px solid #008700;
}

.icon {
  height: 32px;
  width: 32px;
}

.closeIcon {
  height: 20px;
  width: 20px;
}

@media (width < 730px) {
  .all {
    width: 330px;
    height: 312px;
  }

  .titleContent {
    width: 330px;
    height: 200px;
  }

  .content,
  .title {
    width: 330px;
  }
}
</style>

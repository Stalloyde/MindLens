<script setup>
import MainSection from './MainSection.vue'
import ErrorIcon from './icons/error-circle.svg'
import InfoIcon from './icons/info-circle.svg'
import SuccessIcon from './icons/success.svg'
import WarningIcon from './icons/warning.svg'
import CrossIcon from './icons/cross.svg'

defineProps({
  notificationType: { type: String, default: 'info' },
  notificationContent: { type: String, default: 'all' }
})
</script>

<template>
  <dialog open v-if="notificationType === 'info'" :class="[notificationType, notificationContent]">
    <div>
      <img class="icon" :src="InfoIcon" />
    </div>
    <MainSection :notificationContent="notificationContent" :notificationType="notificationType" />
    <div><img class="closeIcon" :src="CrossIcon" /></div>
  </dialog>

  <dialog open v-if="notificationType === 'error'" :class="[notificationType, notificationContent]">
    <div>
      <img class="icon" :src="ErrorIcon" />
    </div>
    <MainSection :notificationContent="notificationContent" :notificationType="notificationType" />
    <div><img class="closeIcon" :src="CrossIcon" /></div>
  </dialog>

  <dialog
    open
    v-if="notificationType === 'warning'"
    :class="[notificationType, notificationContent]"
  >
    <div>
      <img class="icon" :src="WarningIcon" />
    </div>
    <MainSection :notificationContent="notificationContent" :notificationType="notificationType" />
    <div><img class="closeIcon" :src="CrossIcon" /></div>
  </dialog>

  <dialog
    open
    v-if="notificationType === 'success'"
    :class="[notificationType, notificationContent]"
  >
    <div>
      <img class="icon" :src="SuccessIcon" />
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

main {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 8px;
  height: 136px;
  width: 596px;
}

.action {
  display: flex;
  gap: 16px;
}

.icon {
  height: 32px;
  width: 32px;
}

.closeIcon {
  height: 20px;
  width: 20px;
}
</style>

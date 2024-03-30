<script setup>
import Button from './Button.vue'

defineProps({
  notificationType: { type: String, default: 'info' },
  notificationContent: { type: String, default: 'all' }
})
</script>

<template>
  <main v-if="notificationContent === 'all'">
    <div class="title">A short descriptive header</div>
    <div class="content">
      This is a paragraph of information with additional supporting detail or links to help the user
      understand what they should do.
    </div>
    <div class="action">
      <Button notificationType="notificationType" type="secondary" content="text" />
      <Button notificationType="notificationType" content="text" />
    </div>
  </main>

  <main v-if="notificationContent === 'content'">
    <div class="content">A short descriptive header</div>
  </main>

  <main v-if="notificationContent === 'titleContent'">
    <div class="title">A short descriptive header</div>
    <div class="content">
      This is a paragraph of information with additional supporting detail or links to help the user
      understand what they should do.
    </div>
  </main>

  <main v-if="notificationContent === 'title'">
    <div class="title">A short descriptive header</div>
  </main>
</template>

<style scoped>
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
  width: 596px;
}

.action {
  display: flex;
  gap: 16px;
}

.content {
  font-weight: normal;
}
</style>

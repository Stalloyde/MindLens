<script setup>
import { computed } from 'vue'
import Button from '../Button/Button.vue'

const props = defineProps({
  notificationType: { type: String, default: 'info' },
  notificationContent: { type: String, default: 'all' }
})

const hasTitle = computed(() => {
  if (
    props.notificationContent === 'all' ||
    props.notificationContent === 'titleContent' ||
    props.notificationContent === 'title'
  ) {
    return true
  }
  return false
})

const hasContent = computed(() => {
  if (
    props.notificationContent === 'all' ||
    props.notificationContent === 'titleContent' ||
    props.notificationContent === 'content'
  ) {
    return true
  }
  return false
})

const hasAction = computed(() => {
  return props.notificationContent === 'all' ? true : false
})
</script>

<template>
  <main>
    <div v-if="hasTitle" class="title">A short descriptive header</div>
    <div v-if="hasContent && hasTitle" class="content">
      This is a paragraph of information with additional supporting detail or links to help the user
      understand what they should do.
    </div>
    <div v-if="hasContent && !hasTitle" class="content">A short descriptive header</div>

    <div v-if="hasAction" class="action">
      <Button :notificationType="notificationType" type="secondary" content="text" />
      <Button :notificationType="notificationType" content="text" />
    </div>
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
  gap: 8px;
  width: 596px;
  line-height: 24px;
  justify-content: space-between;
}

.action {
  display: flex;
  gap: 16px;
}

.content {
  font-weight: normal;
}

@media (width < 730px) {
  .action {
    flex-direction: column;
    height: 104px;
    justify-content: flex-end;
  }
}
</style>

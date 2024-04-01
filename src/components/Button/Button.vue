<script setup>
import ButtonIcon from './ButtonIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  type: { type: String, default: 'primary' },
  content: { type: String, default: 'leftIconText' },
  notificationType: { type: String, default: 'info' }
})

const leftIconText = computed(() => {
  return props.content === 'leftIconText' ? true : false
})

const rightIconText = computed(() => {
  return props.content === 'rightIconText' ? true : false
})

const text = computed(() => {
  return props.content === 'text' ? true : false
})

const icon = computed(() => {
  return props.content === 'icon' ? true : false
})
</script>

<template>
  <button :class="[type, content, notificationType]">
    <ButtonIcon v-if="leftIconText" :type="type" />
    <p v-if="!icon || text">Action</p>
    <ButtonIcon v-if="icon" :type="type" />
    <ButtonIcon v-if="rightIconText" :type="type" />
  </button>
</template>

<style scoped>
button {
  display: flex;
  padding: 6px 12px;
  gap: 4px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
}

.primary {
  background-color: #f7ba50;
  border: 0px;
  color: #0c0d0d;
}

.secondary {
  background-color: #ffffff;
  border: 1px solid #c75100;
  color: #c75100;
}

.primary:hover,
.secondary:hover {
  box-shadow:
    0px 6px 10px 0px #00000024,
    0px 1px 18px 0px #0000001f;
}

.primary:hover {
  background-color: #f5ab2b;
}

.leftIconText,
.rightIconText {
  width: 130px;
  height: 40px;
}

.text {
  width: 98px;
  height: 40px;
}

.icon {
  width: 40px;
  height: 40px;
}

.info .primary {
  background-color: #f7ba50;
  color: #0c0d0d;
}

.info .secondary {
  background-color: #ffffff;
  border: 1px solid #c75100;
  color: #c75100;
}

.error .primary {
  background-color: #cc3123;
  color: #ffffff;
  border: 1px solid #cc3123;
}

.error .secondary {
  background-color: #ffffff;
  color: #cc3123;
  border: 1px solid #cc3123;
}

.warning .primary {
  background-color: #c75100;
  color: #ffffff;
  border: 1px solid #dc5a00;
}
.warning .secondary {
  background-color: #ffffff;
  color: #c75100;
  border: 1px solid #dc5a00;
}

.success .primary {
  background-color: #008700;
  color: #ffffff;
  border: 1px solid #008700;
}
.success .secondary {
  background-color: #ffffff;
  color: #008700;
  border: 1px solid #008700;
}
</style>

<script setup>
import ButtonIcon from './ButtonIcon.vue'
defineProps({
  type: { type: String, default: 'primary' },
  content: { type: String, default: 'leftIconText' }
})
</script>

<template>
  <button v-if="content === 'leftIconText'" :class="[type, content]">
    <ButtonIcon :type="type" />
    <p>Action</p>
  </button>

  <button v-if="content === 'rightIconText'" :class="[type, content]">
    <p>Action</p>
    <ButtonIcon :type="type" />
  </button>

  <button v-if="content === 'text'" :class="[type, content]">
    <p>Action</p>
  </button>

  <button v-if="content === 'icon'" :class="[type, content]">
    <ButtonIcon :type="type" />
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
</style>

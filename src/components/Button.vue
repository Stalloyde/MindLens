<script setup>
import Icon from './Icon.vue'
defineProps(['type', 'content'])
</script>

<template>
  <button v-if="content === 'leftIconText'" :class="type">
    <Icon :type="type" />
    <p>Action</p>
  </button>

  <button v-else-if="content === 'rightIconText'" :class="type">
    <p>Action</p>
    <Icon :type="type" />
  </button>

  <button v-else-if="content === 'text'" :class="type">
    <p>Action</p>
  </button>

  <button v-else-if="content === 'icon'" :class="type">
    <Icon :type="type" />
  </button>
</template>

<style scoped>
button {
  display: flex;
  padding: 6px 12px;
  gap: 4px;
  border-radius: 8px;
  align-items: center;
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
</style>

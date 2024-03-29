<script setup>
import IconPrimary from './icons/arrow-right-primary.svg'
import IconSecondary from './icons/arrow-right-secondary.svg'
defineProps(['type'])
</script>

<template>
  <button :class="type">
    <p>
      <img v-if="type === 'primary'" :src="IconPrimary" />
      <img v-else :src="IconSecondary" />
    </p>
    <p>Action</p>
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

img {
  height: 24px;
  width: 24px;
}
</style>

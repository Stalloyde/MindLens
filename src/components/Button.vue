<script setup>
defineProps(['type'])
</script>

<template>
  <button :class="type">
    <p>Icon</p>
    <p>Action</p>
  </button>
</template>

<style scoped>
button {
  display: flex;
  padding: 6px 12px;
  gap: 4px;
  border-radius: 8px;
}

.primary {
  background-color: #f7ba50;
  border: 0px;
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
</style>

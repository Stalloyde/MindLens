<script setup>
import IconPrimary from './icons/arrow-right-primary.svg'
import IconSecondary from './icons/arrow-right-secondary.svg'
defineProps(['type', 'content'])
</script>

<template>
  <img v-if="type === 'primary'" :src="IconPrimary" />
  <img v-else :src="IconSecondary" />
</template>

<style scoped>
img {
  height: 24px;
  width: 24px;
}
</style>

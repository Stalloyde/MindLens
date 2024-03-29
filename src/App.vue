<script setup>
import Button from './components/Button.vue'
</script>

<template>
  <div>
    <Button />
  </div>
  <div>
    <Button type="primary" content="leftIconText" />
  </div>
  <div>
    <Button type="primary" content="rightIconText" />
  </div>
  <div>
    <Button type="primary" content="text" />
  </div>
  <div>
    <Button type="primary" content="icon" />
  </div>

  <br />

  <div>
    <Button type="secondary" content="leftIconText" />
  </div>
  <div>
    <Button type="secondary" content="rightIconText" />
  </div>
  <div>
    <Button type="secondary" content="text" />
  </div>
  <div>
    <Button type="secondary" content="icon" />
  </div>
</template>

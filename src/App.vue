<script setup>
import Button from './components/Button.vue'
</script>

<template>
  <div>
    <Button />
    Default Button
  </div>
  <div>
    <Button type="primary" content="leftIconText" />
    Primary Button, Left Icon & Text
  </div>
  <div>
    <Button type="primary" content="rightIconText" />
    Primary Button, Right Icon & Text
  </div>
  <div>
    <Button type="primary" content="text" />
    Primary Button, Text
  </div>
  <div>
    <Button type="primary" content="icon" />
    Primary Button, Icon
  </div>

  <br />

  <div>
    <Button type="secondary" content="leftIconText" />
    Secondary Button, Left Icon & Text
  </div>
  <div>
    <Button type="secondary" content="rightIconText" />
    Secondary Button, Right Icon & Text
  </div>
  <div>
    <Button type="secondary" content="text" />
    Secondary Button, Text
  </div>
  <div>
    <Button type="secondary" content="icon" />
    Secondary Button, Icon
  </div>
</template>

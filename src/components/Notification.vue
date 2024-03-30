<script setup>
import Button from './Button.vue'
import ErrorIcon from './icons/error-circle.svg'
import InfoIcon from './icons/info-circle.svg'
import SuccessIcon from './icons/success.svg'
import WarningIcon from './icons/warning.svg'
import CrossIcon from './icons/cross.svg'

defineProps({
  type: { type: String, default: 'info' }
})
</script>

<template>
  <dialog open v-if="type === 'info'" class="container">
    <div>
      <img class="icon" :src="InfoIcon" />
    </div>
    <div class="main">
      <div class="title">A short descriptive header</div>
      <div class="content">
        This is a paragraph of information with additional supporting detail or links to help the
        user understand what they should do.
      </div>
      <div class="action">
        <Button type="secondary" content="text" />
        <Button content="text" />
      </div>
    </div>
    <div><img class="closeIcon" :src="CrossIcon" /></div>
  </dialog>

  <dialog open v-if="type === 'error'" class="container">
    <div>
      <img class="icon" :src="ErrorIcon" />
    </div>
    <div class="main">
      <div class="title">A short descriptive header</div>
      <div class="content">
        CrossIcon CrossIcon CrossIcon CrossIcon This is a paragraph of information with additional
        supporting detail or links to help the user understand what they should do.
      </div>
      <div class="action">
        <Button type="secondary" content="text" />
        <Button content="text" />
      </div>
    </div>
    <div><img class="closeIcon" :src="CrossIcon" /></div>
  </dialog>

  <dialog open v-if="type === 'warning'" class="container">
    <div>
      <img class="icon" :src="WarningIcon" />
    </div>
    <div class="main">
      <div class="title">A short descriptive header</div>
      <div class="content">
        This is a paragraph of information with additional supporting detail or links to help the
        user understand what they should do.
      </div>
      <div class="action">
        <Button type="secondary" content="text" />
        <Button content="text" />
      </div>
    </div>
    <div><img class="closeIcon" :src="CrossIcon" /></div>
  </dialog>

  <dialog open v-if="type === 'success'" class="container">
    <div>
      <img class="icon" :src="SuccessIcon" />
    </div>
    <div class="main">
      <div class="title">A short descriptive header</div>
      <div class="content">
        This is a paragraph of information with additional supporting detail or links to help the
        user understand what they should do.
      </div>
      <div class="action">
        <Button type="secondary" content="text" />
        <Button content="text" />
      </div>
    </div>
    <div><img class="closeIcon" :src="CrossIcon" /></div>
  </dialog>
</template>

<style scoped>
dialog {
  display: flex;
  width: 720px;
  height: 184px;
  background-color: #f4faff;
  border: 1px solid #2c75dd;
  border-radius: 4px;
  padding: 24px 24px;
  gap: 12px;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 8px;
  height: 136px;
  width: 596px;
}

.action {
  display: flex;
  gap: 16px;
}

.content {
  font-weight: normal;
}

.icon {
  height: 32px;
  width: 32px;
}

.closeIcon {
  height: 20px;
  width: 20px;
}
</style>

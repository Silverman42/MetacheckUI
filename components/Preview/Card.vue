<template>
  <div>
    <h4 v-if="hasHeading === true" class="card-heading">{{ headingText }}</h4>
    <div class="card">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hasHeading: {
      type: Boolean,
      default: true,
    },
    headingText: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
@import '@/components/Preview/Card.css';
</style>

<template>
  <div class="mb-14 cursor-pointer">
    <span
      v-if="hasHeading === true"
      class="
        inline-block
        w-auto
        rounded-3xl
        py-2
        px-4
        text-sm
        mb-4
        border
        dark:border-gray-800
      "
    >
      <span class="card-heading mb-0">
        {{ headingText }}
      </span>
    </span>
    <div
      :class="{
        card: hasLayout === true,
      }"
    >
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
    hasLayout: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style>
@import '@/components/Preview/Card.css';
</style>

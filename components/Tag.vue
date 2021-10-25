<template>
  <span class="tag" :class="[getColor]"><slot /></span>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    getColor() {
      return `tag-${this.color}`
    },
  },
}
</script>

<style scoped>
.tag {
  @apply inline-block capitalize px-3 py-1 border rounded-full;
}
.tag-blue {
  @apply bg-blue-200 border-blue-500;
}

.tag-gray {
  @apply bg-gray-200 border-gray-500 text-gray-600;
}

.tag-green {
  @apply bg-green-200 border-green-500 text-green-700;
}

.tag-purple {
  @apply bg-purple-200 border-purple-500 text-purple-700;
}

.tag-yellow {
  @apply bg-yellow-200 border-yellow-500 text-yellow-700;
}

.tag-primary {
  @apply bg-primary-200 border-primary-500 text-primary-700;
}

.tag-secondary {
  @apply bg-secondary-200 border-secondary-500 text-secondary-700;
}

.tag-red {
  @apply bg-red-200 border-red-500 text-red-700;
}
</style>

<template>
  <input
    v-bind="$attrs"
    :value="value"
    :type="type"
    class="input-base"
    @input="input($event)"
  />
</template>

<script>
export default {
  name: 'Base',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    hasMaxLength: {
      type: Boolean,
      default: false,
    },
    maxLength: {
      type: Number,
      default: 0,
    },
    hasMinLength: {
      type: Boolean,
      default: false,
    },
    minLength: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    input(event) {
      if (this.hasMinLength) {
        return this.checkMinLength(event.target.value, this.minLength)
      }
      if (this.hasMaxLength) {
        return this.checkMaxLength(event.target.value, this.maxLength)
      }
      return this.$emit('input', `${event.target.value}`)
    },
    checkMinLength(value, length) {
      if (String(value).length >= length) {
        this.$emit('input', `${value}`)
      }
      this.$forceUpdate()
    },
    checkMaxLength(value, length) {
      if (String(value).length <= length) {
        this.$emit('input', `${value}`)
      }
      this.$forceUpdate()
    },
  },
}
</script>
<style scoped>
@import '@/components/Input/Base.css';
</style>

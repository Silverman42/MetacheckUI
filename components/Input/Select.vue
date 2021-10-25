<template>
  <div class="select-container" tabindex="-1">
    <select
      v-bind="$attrs"
      :id="id"
      ref="select"
      v-model="selected"
      class="select"
      :disabled="disabled == true || loading == true"
    >
      <slot></slot>
    </select>
    <div class="select-dropdown-icon">
      <svg
        class="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectInput',
  inheritAttrs: false,
  props: {
    error: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Number, Boolean],
      default() {
        return ''
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      id: 'id' + Math.floor(Math.random() * 50000000),
      selected: this.value,
    }
  },
  watch: {
    selected(selected) {
      this.$emit('input', selected)
    },
  },
  methods: {
    input(event) {
      return this.$emit('input', event)
    },
    focus() {
      this.$refs.select.focus()
    },
    select() {
      this.$refs.select.select()
    },
    setSelectionRange(start, end) {
      this.$refs.select.setSelectionRange(start, end)
    },
  },
}
</script>

<style scoped>
@import '@/components/Input/Select.css';
</style>

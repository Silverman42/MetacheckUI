<template>
  <label
    class="flex justify-between items-center cursor-pointer w-full"
    :for="`switch-${id}`"
  >
    <div class="flex-grow pr-3">
      <div>
        <slot />
      </div>
      <small v-if="error !== null" class="text-secondary-500 text-xs">{{
        error
      }}</small>
    </div>
    <div class="inline-block w-auto">
      <input :id="`switch-${id}`" v-model="checked" type="checkbox" hidden />
      <div class="switch" tabindex="-1">
        <span></span>
      </div>
    </div>
  </label>
</template>

<script>
export default {
  name: 'SwitchInput',
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: [Boolean, Number],
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      id: 'id' + Math.floor(Math.random() * 50000000),
      checked: this.value,
    }
  },
  watch: {
    checked(newVal, oldVal) {
      return this.$emit('input', newVal)
    },
    value(newVal, oldVal) {
      this.checked = newVal
    },
  },
}
</script>

<style scoped>
@import '@/components/Input/Switch.css';
</style>

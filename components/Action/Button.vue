<template>
  <button
    class="btn"
    :type="type"
    :class="{
      'btn-block': hasFullWidth,
      'btn-sm': size === 'sm',
      'btn-md': size === 'md',
      'btn-lg': size === 'lg',
      'btn-xs': size === 'xs',
      'btn-rounded': rounded === true,
      'btn-primary': primary === true && inverse === false,
      'btn-secondary': primary === false && inverse === false,
      'btn-primary-inverse': primary === true && inverse === true,
      'btn-secondary-inverse': primary === false && inverse === true,
    }"
    :disabled="disabledState"
    :form="form"
    @click="trigger($event)"
  >
    <slot name="icon"></slot>
    <slot>Button</slot>
  </button>
</template>
<script>
export default {
  props: {
    form: {
      type: String,
      default: '',
    },
    inverse: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: 'md',
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'primary',
    },
    hasFullWidth: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    extraClass: {
      type: String,
      default: '',
    },
  },
  computed: {
    disabledState() {
      if (this.loading === true || this.disabled === true) {
        return true
      }
      return false
    },
  },
  methods: {
    trigger(event) {
      this.$emit('click', event)
    },
  },
}
</script>

<style scoped>
@import '@/components/Action/Buttons.css';
</style>

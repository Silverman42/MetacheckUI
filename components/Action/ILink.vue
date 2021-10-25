<template>
  <nuxt-link :to="to" class="btn" :class="[...makeBtnStyle()]">
    <slot name="icon"></slot>
    <slot>Button</slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Object],
      default() {
        return '/'
      },
    },
    colorType: {
      type: String,
      default: 'primary',
    },
    hasFullWidth: {
      type: Boolean,
      default: true,
    },
    isRounded: {
      type: Boolean,
      default: true,
    },
    hasInverse: {
      type: Boolean,
      default: false,
    },
    hasBorder: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: 'md',
    },
  },
  data() {
    return {
      colorBuild: '',
    }
  },
  methods: {
    addColorType() {
      if (this.colorType === 'primary' && this.hasInverse) {
        return 'btn-primary-inverse'
      }
      if (this.colorType === 'secondary' && this.hasInverse) {
        return 'btn-secondary-inverse'
      }
      if (this.colorType === 'primary') {
        return 'btn-primary'
      }
      return 'btn-secondary'
    },
    removeBorder() {
      return this.hasBorder === false ? 'btn-borderless' : ''
    },
    addRoundedCorners() {
      return this.isRounded === true ? 'btn-rounded' : ''
    },
    addFullWidth() {
      return this.hasFullWidth ? 'btn-block' : ''
    },
    changeSize() {
      if (this.size === 'md') return 'btn-md'
      if (this.size === 'sm') return 'btn-sm'
      if (this.size === 'lg') return 'btn-lg'
      if (this.size === 'xs') return 'btn-xs'
    },
    makeBtnStyle() {
      return [
        this.addColorType(),
        this.removeBorder(),
        this.addRoundedCorners(),
        this.addFullWidth(),
        this.changeSize(),
      ]
    },
  },
}
</script>

<style scoped>
@import '@/components/Action/Buttons.css';
</style>

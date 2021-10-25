<template>
  <div>
    <textarea
      v-bind="$attrs"
      :id="id"
      ref="input"
      :value="value"
      class="input-textarea"
      rows="5"
      @input="input($event)"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'TextareaInput',
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
      type: String,
      default: '',
    },
  },
  data() {
    return {
      id: 'id' + Math.floor(Math.random() * 50000000),
    }
  },
  methods: {
    input(event) {
      return this.$emit('input', event.target.value)
    },
    focus() {
      this.$refs.input.focus()
    },
    select() {
      this.$refs.input.select()
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end)
    },
  },
}
</script>

<style scoped>
@import '@/components/Input/Base.css';
</style>

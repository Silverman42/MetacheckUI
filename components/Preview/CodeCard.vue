<template>
  <div class="code-container">
    <div class="btn-container">
      <action-button
        :disabled="disabled"
        size="xs"
        :pressed="pressed"
        :has-full-width="false"
        @click="copyToClipBoard"
        >{{ buttonText }}</action-button
      >
    </div>
    <code-highlighter :language="language">
      <pre>
        <code ref="code">
            <slot/>
        </code>
      </pre>
    </code-highlighter>
  </div>
</template>

<script>
import { component as CodeHighlighter } from 'vue-code-highlight'
export default {
  components: {
    CodeHighlighter,
  },
  props: {
    language: {
      type: String,
      default: 'html',
    },
  },
  data() {
    return {
      id: '',
      buttonText: 'Copy',
      disabled: false,
      pressed: false,
    }
  },
  mounted() {
    this.id = this.generateId()
  },
  methods: {
    generateId() {
      return `${Math.ceil(Math.random() * 8997)}${Math.ceil(
        Math.random() * 8997
      )}`
    },
    copyToClipBoard() {
      const vm = this
      const code = this.$refs.code.innerText
      this.pressed = true
      navigator.clipboard.writeText(code).then(() => {
        vm.setButtonText()
        setTimeout(() => {
          vm.resetButtonText()
          vm.pressed = false
        }, 1000)
      })
    },
    setButtonText() {
      this.buttonText = 'Copied'
      this.disabled = true
    },
    resetButtonText() {
      this.buttonText = 'Copy'
      this.disabled = false
    },
  },
}
</script>

<style scoped>
.code-container {
  @apply relative;
}
.btn-container {
  @apply absolute top-0 right-0 pt-2 pr-2;
}
</style>

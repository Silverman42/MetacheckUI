<template>
  <aside
    class="
      h-screen
      bottom-0
      top-0
      right-0
      fixed
      z-40
      bg-white
      block
      w-screen
      md:w-3/4
      overflow-y-auto
    "
  >
    <div class="max-w-4xl mx-auto px-5 pb-8">
      <header class="py-5 flex sticky top-0 bg-white z-50 items-center mb-5">
        <button
          class="text-gray-500 hover:text-primary-600"
          @click="closeModal"
        >
          <arrow-left-icon size="1.3x"></arrow-left-icon>
        </button>
        <p class="text-xl ml-5 font-bold capitalize"><slot>Header</slot></p>
      </header>
      <section>
        <slot name="body" />
      </section>
    </div>
  </aside>
</template>

<script>
import { ArrowLeftIcon } from 'vue-feather-icons'
export default {
  components: {
    ArrowLeftIcon,
  },
  props: {
    isopen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      body: document.querySelector('body'),
    }
  },
  mounted() {
    const vm = this
    vm.body.classList.add('overflow-y-hidden')
    window.addEventListener('keyup', this.handler)
  },
  destroyed() {
    this.body.classList.remove('overflow-y-hidden')
  },
  methods: {
    closeModal() {
      return this.$emit('update:isopen', false)
    },
    handler(e) {
      e.preventDefault()
      if (e.key === 'Escape') {
        window.removeEventListener('keyup', this.handler)
        this.closeModal()
      }
    },
  },
}
</script>

<style></style>

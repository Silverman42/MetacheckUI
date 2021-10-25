<template>
  <div class="modal-backdrop" @click="closeModal"></div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
  },
}
</script>

<style scoped>
.modal-backdrop {
  @apply fixed top-0 right-0 bottom-0 h-screen w-screen z-40 cursor-pointer;
  background: rgba(12, 12, 12, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}
</style>

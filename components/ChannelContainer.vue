<template>
  <custom-scrollbar class="scrollbar">
    <channel><i class="icofont-brand-google icofont-3x"></i></channel>
    <channel><i class="icofont-facebook icofont-2x"></i></channel>
    <channel><i class="icofont-twitter icofont-2x"></i></channel>
    <channel><i class="icofont-linkedin icofont-2x"></i></channel>
    <channel><i class="icofont-pinterest icofont-2x"></i></channel>
    <channel><i class="icofont-slack icofont-2x"></i></channel>
  </custom-scrollbar>
</template>

<script>
import CustomScrollbar from 'vue-custom-scrollbar'
import 'vue-custom-scrollbar/dist/vueScrollbar.css'
export default {
  components: {
    CustomScrollbar,
  },
}
</script>

<style scoped>
.scrollbar {
  @apply flex w-full items-center overflow-x-auto pb-8;
}
</style>

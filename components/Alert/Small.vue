<template>
  <div class="">
    <div class="alert">
      <div class="icon">
        <img :src="alertImage" :alt="type" />
      </div>
      <div class="text-heading">
        <h5>{{ heading }}</h5>
        <p>{{ body }}</p>
      </div>
      <button class="close" @click="closeAlert">
        <x-icon size="1.2x" />
      </button>
    </div>
  </div>
</template>

<script>
import { XIcon } from 'vue-feather-icons'
export default {
  components: {
    XIcon,
  },
  props: {
    type: {
      type: String,
      default: '',
    },
    heading: {
      type: String,
      default: '',
    },
    body: {
      type: String,
      default: '',
    },
  },
  computed: {
    alertImage() {
      return this.type === 'success'
        ? `/img/success_logo.png`
        : `/img/error_logo.png`
    },
  },
  mounted() {
    setTimeout(() => {
      this.closeAlert()
    }, 5000)
  },
  methods: {
    closeAlert() {
      this.$emit('closeAlert')
    },
  },
}
</script>

<style>
@import '@/components/Alert/Alert.css';
</style>

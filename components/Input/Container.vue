<template>
  <div class="input-container">
    <div class="label">
      <label class="label-title" for="email"> {{ label }} </label>
      <button v-if="getDescription.state == true" class="label-description">
        <div class="label-description_text">{{ description }}</div>
        <span>?</span>
      </button>
    </div>
    <div>
      <slot />
    </div>
    <span v-if="getError.state == true" class="error">{{
      getError.value
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  computed: {
    getError() {
      return this.getPropStateAndValue(this.error)
    },
    getDescription() {
      return this.getPropStateAndValue(this.description)
    },
  },
  methods: {
    getPropStateAndValue(prop = '') {
      if (prop.length > 0) {
        return {
          value: prop,
          state: true,
        }
      }
      return {
        value: prop,
        state: false,
      }
    },
  },
}
</script>

<style scoped>
@import '@/components/Input/Container.css';
</style>

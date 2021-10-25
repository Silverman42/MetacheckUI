<template>
  <label
    :for="id"
    class="file-container"
    :class="{
      'cursor-not-allowed': disabled == true,
      'cursor-pointer': disabled == false,
    }"
  >
    <input
      v-bind="$attrs"
      :id="id"
      type="file"
      class="hidden"
      @input="input($event)"
    />
    <div class="flex items-center">
      <span v-if="fileCount > 0" class="file-counter">{{ fileCount }}</span>
      <span class="file-name">{{ fileName | truncateFileName }}</span>
    </div>
    <div class="action">Browse</div>
  </label>
</template>

<script>
export default {
  filters: {
    truncateFileName(name) {
      if (name.length > 19) {
        return name.substring(0, 18) + '..'
      }
      return name
    },
  },
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      id: 'id' + Math.floor(Math.random() * 50000000),
      fileName: 'Choose File..',
      fileCount: 0,
    }
  },
  methods: {
    input(event) {
      this.changeFileName(event.target.files)
      this.getFileCount(event.target.files)
      return this.$emit('input', event.target.files[0])
    },
    changeFileName(file) {
      this.fileName = file[0].name
    },
    getFileCount(file) {
      this.fileCount = parseInt(file.length)
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
@import '@/components/Input/File.css';
</style>

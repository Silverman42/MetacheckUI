<template>
  <label class="channel" :for="id" z-index="1">
    <input :id="id" type="checkbox" name="" />
    <span class="title"><slot /></span>
    <div class="bg"></div>
  </label>
</template>

<script>
export default {
  data() {
    return {
      id: '',
    }
  },
  mounted() {
    this.id = this.generateId()
  },
  methods: {
    generateId() {
      return Math.ceil(Math.random() * 1999999999)
    },
  },
}
</script>

<style scoped>
.channel {
  min-width: 4rem;
  @apply rounded-full cursor-pointer overflow-hidden inline-block w-16 h-16 relative p-5 bg-gray-300 dark:bg-primaryBg2;
  @apply flex items-center justify-center mr-3;
}

.channel input {
  @apply absolute h-1 w-1 invisible;
}

.channel .bg {
  z-index: 1;
  @apply absolute h-full w-full top-0 transition-all ease-in-out duration-300 left-0 bottom-0;
}

.channel .title {
  @apply inline-block z-10 text-gray-700 transition-colors ease-in-out duration-300 dark:text-primary-600;
}

.channel input:checked ~ .bg,
.channel:hover input:checked ~ .bg {
  @apply bg-primary-500;
}

.channel:hover .bg {
  @apply bg-primary-300 dark:bg-primary-800;
}

.channel input:checked ~ .title,
.channel:hover .title {
  @apply inline-block z-10 text-white dark:text-primaryBg;
}
</style>

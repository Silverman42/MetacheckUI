<template>
  <header
    class="
      py-3
      lg:sticky
      top-0
      w-full
      border-b
      z-30
      dark:border-primaryBg2 dark:bg-primaryBg
    "
  >
    <nav
      class="mx-auto max-w-6xl flex flex-wrap px-8 items-center justify-between"
    >
      <div class="lg:inline-block block w-full py-3 lg:w-auto">
        <a class="w-14 block mx-auto" href="#">
          <img
            src="/MetaCheck_single.svg"
            class="w-full h-auto"
            alt="metacheck logo"
          />
        </a>
      </div>
      <div class="lg:inline-flex w-full py-3 lg:w-6/12 flex items-stretch">
        <slot />
      </div>
      <ul
        class="
          inline-flex
          items-center
          fixed
          bottom-0
          w-full
          left-0
          py-4
          lg:relative lg:w-auto
          justify-center
          md:justify-end
          dark:bg-primaryBg
        "
      >
        <li class="mr-10">
          <a href="#" class="dark:text-primary-100 dark:hover:text-primary-300"
            >Guide</a
          >
        </li>
        <li class="mr-10">
          <a class="dark:text-primary-100 dark:hover:text-primary-300" href="#"
            >Metainfo</a
          >
        </li>
        <li>
          <a class="dark:text-primary-100 dark:hover:text-primary-300" href="#"
            >Github</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      url: '',
    }
  },
  methods: {
    fetchMeta() {
      this.$emit('searchUrl', this.url)
    },
  },
}
</script>

<style></style>

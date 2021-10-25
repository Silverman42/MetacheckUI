<template>
  <header class="py-6 w-full border-b dark:border-primaryBg2 dark:bg-primaryBg">
    <nav class="mx-auto max-w-6xl flex px-8 items-center justify-between">
      <a href="#">
        <img src="" class="w-10" alt="metacheck logo" />
      </a>
      <div class="w-6/12 lg:w-5/12 flex items-stretch">
        <input-base></input-base>
        <action-button :has-full-width="false" size="xs">
          <search-icon size="1.2x"></search-icon>
        </action-button>
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
import { SearchIcon } from 'vue-feather-icons'
export default {
  components: {
    SearchIcon,
  },
}
</script>

<style></style>

<template>
  <div class="mb-14">
    <figure class="mb-5 w-32">
      <img
        src="/MetaCheck.svg"
        class="w-full h-auto"
        alt="metacheck bottom logo"
      />
    </figure>
    <p class="text-sm text-gray-600 mb-5 dark:text-gray-400">
      Metacheck is a free open-source tool for generating/checking metatags and
      metadata for webpages
    </p>
    <p class="text-xs text-gray-600 mb-5 dark:text-gray-400">
      Built with
      <a
        href="https://www.nuxtjs.org/"
        target="_blank"
        class="dark:text-primary-300 dark:hover:text-primary-500"
        >NuxtJs</a
      >
      ,
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        class="dark:text-primary-300 dark:hover:text-primary-500"
        >TailwindCSS</a
      >
      and
      <span class="text-primary-300 inline-block dark:text-primary-500">
        <heart-icon size="1.3x"></heart-icon>
      </span>

      by
      <a
        href="https://sundev.netlify.app"
        target="_blank"
        class="dark:text-primary-300 dark:hover:text-primary-500"
        >Sylvester Uche Nkeze</a
      >
    </p>
  </div>
</template>

<script>
import { HeartIcon } from 'vue-feather-icons'
export default {
  components: {
    HeartIcon,
  },
}
</script>

<style></style>

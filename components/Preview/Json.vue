<template>
  <div>
    <p class="dark:text-gray-300 text-sm mb-8">
      The code snippet below is useful for metatag structuring in metadata npm
      packages like
      <a
        href="https://vue-meta.nuxtjs.org/"
        target="_blank"
        class="dark:text-primary-300 dark:hover:text-primary-500"
        >Vuemeta</a
      >
    </p>
    <preview-code-card language="javascript">
      {{ getJSONData }}
    </preview-code-card>
  </div>
</template>

<script>
export default {
  computed: {
    getJSONData() {
      return `
      head: {
        title: 'my website title',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'my website description'
          },
          {
            property: 'twitter:card',
            content: 'summary_large_image'
          },
          {
            property: 'twitter:url',
            content: 'https://metatags.io/'
          },
          {
            property: 'twitter:title',
            content: 'https://metatags.io/'
          },
          {
            property: 'twitter:description',
            content: 'https://metatags.io/'
          },
          {
            property: 'twitter:description',
            content: 'https://metatags.io/'
          },
        ],
      }
      `
    },
  },
}
</script>

<style></style>

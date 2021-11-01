<template>
  <div>
    <p class="dark:text-gray-300 text-sm mb-8">
      Copy and paste the snippet below to the head object of your JAMstack or
      SPA webpage, if you are using a library like
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
  props: {
    schema: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    getJSONData() {
      return `
      head: {
        title: '${this.schema.title}',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: '${this.schema.description?.content}'
          },
          {
            property: 'twitter:card',
            content: 'summary_large_image'
          },
          {
            property: 'twitter:url',
            content: '${this.schema.url}'
          },
          {
            property: 'twitter:title',
            content: '${this.schema['twitter:title']?.content}'
          },
          {
            property: 'twitter:description',
            content: '${this.schema['twitter:description']?.content}'
          },
          {
            property: 'twitter:image',
            content: '${this.schema['code_twitter:image']?.content}'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:url',
            content: '${this.schema.url}'
          },
          {
            property: 'og:title',
            content: '${this.schema['og:title']?.content}'
          },
          {
            property: 'og:description',
            content: '${this.schema['og:description']?.content}'
          },
          {
            property: 'og:image',
            content: '${this.schema['code_og:image']?.content}'
          },
        ],
      }
      `
    },
  },
}
</script>

<style></style>

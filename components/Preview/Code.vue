<template>
  <preview-card :has-heading="false">
    <div class="code-sample">
      <samp> {{ getTitle }} </samp><br />
      <samp>
        <code>
          {{ getFacebookTags }}
        </code>
      </samp>
    </div>
  </preview-card>
</template>

<script>
export default {
  computed: {
    getTitle() {
      return `
        <title>My new home page</title>
      `
    },
    getFacebookTags() {
      return `
      <meta property="og:type" content="website">
      <meta property="og:url" content="https://metatags.io/">
      <meta property="og:title" content="Meta Tags — Preview, Edit and Generate">
      <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
      <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">
      `
    },
  },
}
</script>

<style scoped>
.code-sample {
  @apply text-xs dark:text-primary-500 px-4 py-6 overflow-x-auto;
}
</style>

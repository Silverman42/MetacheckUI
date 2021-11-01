<template>
  <preview-card heading-text="Google" :has-layout="false">
    <h1 class="text-blue-600 text-xl">{{ getSchema.title }}</h1>
    <span class="inline-flex text-green-600 text-xs w-auto">
      {{ getSchema.url }}
    </span>
    <br />
    <p class="text-gray-300 text-sm">
      {{ getSchema.description.content }}
    </p>
  </preview-card>
</template>

<script>
import schema from '~/assets/mixins/fetchMetaSchema'
export default {
  mixins: [schema],
}
</script>

<style></style>

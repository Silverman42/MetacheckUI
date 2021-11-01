<template>
  <preview-card heading-text="Linkedin">
    <img
      :src="getSchema.image"
      class="h-60 w-full object-cover object-center"
      alt=""
    />
    <div class="p-4 border-t dark:border-primaryBg3">
      <h3
        class="
          text-lg text-white
          font-bold
          block
          overflow-hidden overflow-ellipsis
        "
      >
        {{ getSchema.title }}
      </h3>
      <span
        class="
          text-xs
          lowercase
          text-gray-600
          block
          overflow-hidden overflow-ellipsis
        "
        >{{ getSchema.url }}</span
      >
    </div>
  </preview-card>
</template>

<script>
import schema from '~/assets/mixins/fetchMetaSchema'
export default {
  mixins: [schema],
  computed: {
    getSchema() {
      return {
        url: this.schema.url,
        image: this.schema['og:image']?.content,
        title: this.schema['og:title']?.content || this.schema.title,
      }
    },
  },
}
</script>

<style></style>

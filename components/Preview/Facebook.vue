<template>
  <preview-card heading-text="Facebook">
    <img
      :src="getSchema.image"
      class="h-60 w-full object-cover object-center"
      alt=""
    />
    <div class="p-4 border-t dark:border-primaryBg3">
      <span
        class="
          text-sm
          uppercase
          text-gray-400
          block
          overflow-hidden overflow-ellipsis
        "
        >{{ getSchema.url }}</span
      >

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
      <p class="text-xs text-gray-400 block overflow-hidden overflow-ellipsis">
        {{ getSchema.description }}
      </p>
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
        description:
          this.schema['og:description']?.content ||
          this.schema.description?.content,
        title: this.schema['og:title']?.content || this.schema.title,
      }
    },
  },
}
</script>

<style></style>

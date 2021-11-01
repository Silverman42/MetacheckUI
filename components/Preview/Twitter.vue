<template>
  <preview-card heading-text="Twitter">
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
      <p class="text-xs text-gray-400 block overflow-hidden overflow-ellipsis">
        {{ getSchema.description }}
      </p>
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
        image: this.schema['twitter:image']?.content,
        description:
          this.schema['twitter:description']?.content ||
          this.schema.description?.content,
        title: this.schema['twitter:title']?.content || this.schema.title,
      }
    },
  },
}
</script>

<style></style>

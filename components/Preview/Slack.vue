<template>
  <preview-card heading-text="Slack" :has-layout="false">
    <div class="border-l-2 dark:border-gray-500 w-10/12 pl-3">
      <div class="flex items-center">
        <img src="" class="h-5 w-auto mr-3" alt="" />
        <p class="dark:text-gray-400 text-xs">{{ getSchema.url }}k</p>
      </div>
      <h2 class="text-lg text-blue-500 font-bold">
        {{ getSchema.title }}
      </h2>
      <p class="dark:text-gray-200 text-sm">
        {{ getSchema.description }}
      </p>
      <img
        :src="getSchema.image"
        class="
          h-60
          w-full
          object-cover
          rounded-lg
          border
          mt-4
          dark:border-primaryBg3 dark:bg-primaryBg2
          object-center
        "
        alt=""
      />
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

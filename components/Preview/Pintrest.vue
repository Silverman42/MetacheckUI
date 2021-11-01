<template>
  <preview-card heading-text="Pinterest" :has-layout="false">
    <div class="w-8/12 md:w-6/12">
      <img
        :src="getSchema.image"
        class="
          w-full
          object-cover object-center
          rounded-lg
          h-28
          border
          dark:border-primaryBg3 dark:bg-primaryBg2
        "
        alt=""
      />
      <div class="flex justify-between p-3">
        <p class="text-md text-white font-bold">
          {{ getSchema.title }}
        </p>
        <span class="text-gray-400">
          <more-vertical-icon size="1.3x" />
        </span>
      </div>
    </div>
  </preview-card>
</template>

<script>
import { MoreVerticalIcon } from 'vue-feather-icons'
import schema from '~/assets/mixins/fetchMetaSchema'
export default {
  components: {
    MoreVerticalIcon,
  },
  mixins: [schema],
  computed: {
    getSchema() {
      return {
        image: this.schema['og:image']?.content,
        title: this.schema['og:title']?.content || this.schema.title,
      }
    },
  },
}
</script>

<style></style>

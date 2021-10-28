<template>
  <preview-card heading-text="Pinterest" :has-layout="false">
    <div class="w-8/12 md:w-6/12">
      <img
        src="/screenshot.png"
        class="
          w-full
          object-cover object-center
          rounded-lg
          h-28
          border
          dark:border-primaryBg2
        "
        alt=""
      />
      <div class="flex justify-between p-3">
        <p class="text-md text-white font-bold">
          Metacheck - Generating and Checking metatags
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
export default {
  components: {
    MoreVerticalIcon,
  },
}
</script>

<style></style>

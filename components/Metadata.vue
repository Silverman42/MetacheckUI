<template>
  <section
    class="
      border-r
      min-h-screen
      dark:border-primaryBg2
      py-8
      px-8
      hidden
      lg:block
      w-4/12
      lg:sticky lg:top-20
      top-0
      lg:self-start
    "
  >
    <section-header>Metadata</section-header>
    <form id="generateMeta" action="" @submit.prevent="generateMetadata"></form>
    <div class="my-8">
      <input-container label="Title">
        <input-base v-model="title" form="generateMeta"></input-base>
      </input-container>
    </div>
    <div class="my-8">
      <input-container label="Description">
        <input-textarea
          v-model="description"
          form="generateMeta"
        ></input-textarea>
      </input-container>
    </div>
    <div class="my-8">
      <input-container label="Image">
        <input-file @input="getImage($event)"></input-file>
      </input-container>
    </div>
    <div class="my-8">
      <action-button form="generateMeta" type="submit">Generate</action-button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      image: '',
    }
  },
  methods: {
    generateMetadata() {},
    getImage($event) {
      console.log($event)
    },
  },
}
</script>

<style></style>

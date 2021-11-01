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
        <input-base
          :value="getMetaData.title"
          @input="changeTitle($event)"
        ></input-base>
      </input-container>
    </div>
    <div class="my-8">
      <input-container label="Description">
        <input-textarea
          :value="getMetaData.description"
          @input="changeDescription($event)"
        ></input-textarea>
      </input-container>
    </div>
    <div class="my-8">
      <input-container label="Image">
        <input-file @input="changeImage($event)"></input-file>
      </input-container>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
  computed: {
    getMetaData() {
      return {
        title: this.title,
        description: this.description,
      }
    },
  },
  methods: {
    changeDescription(event) {
      this.$emit('changeDescription', event)
    },
    changeTitle(event) {
      this.$emit('changeTitle', event)
    },
    changeImage(event) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.$emit('changeImage', e.target.result)
      }
      reader.readAsDataURL(event)
    },
  },
}
</script>

<style></style>

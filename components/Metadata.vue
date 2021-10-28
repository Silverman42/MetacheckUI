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
    <div class="my-8">
      <input-container label="Title">
        <input-base></input-base>
      </input-container>
    </div>
    <div class="my-8">
      <input-container label="Description">
        <input-textarea></input-textarea>
      </input-container>
    </div>
    <div class="my-8">
      <input-container label="Image">
        <input-file></input-file>
      </input-container>
    </div>
  </section>
</template>

<script>
export default {
  data() {},
}
</script>

<style></style>

<template>
  <div class="font-sans dark">
    <navbar />
    <div class="dark:bg-primaryBg min-h-screen">
      <div
        class="
          mx-auto
          max-w-6xl
          flex flex-wrap
          lg:flex-nowrap
          items-stretch
          justify-center
        "
      >
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
          "
        >
          <h2
            class="
              text-xs
              dark:text-primary-300
              text-primary-600
              font-bold
              uppercase
              tracking-widest
            "
          >
            Metadata
          </h2>
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
        <section
          class="
            lg:border-r lg:min-h-screen
            border-b border-r-0
            lg:border-b-0
            py-8
            px-8
            dark:border-primaryBg2
            w-full
            lg:w-6/12
          "
        >
          <div class="mb-10">
            <h2
              class="
                text-xs
                dark:text-primary-300
                text-primary-600
                font-bold
                uppercase
                tracking-widest
                mb-8
              "
            >
              CHANNELS
            </h2>
            <channel-container />
          </div>
          <div>
            <h2
              class="
                text-xs
                dark:text-primary-300
                text-primary-600
                font-bold
                uppercase
                tracking-widest
                mb-8
              "
            >
              PREVIEW
            </h2>
            <div>
              <tab :tabs="tabs" :default-active-tab="defaultTab">
                <template #tab-body-webview>
                  <preview-google></preview-google>
                  <preview-facebook></preview-facebook>
                  <preview-twitter></preview-twitter>
                  <preview-linkedin></preview-linkedin>
                  <preview-pinterest></preview-pinterest>
                  <preview-slack></preview-slack>
                </template>
                <template #tab-body-code>
                  <preview-code></preview-code>
                </template>
                <template #tab-body-json>
                  <preview-json></preview-json>
                </template>
              </tab>
            </div>
          </div>
        </section>
        <section class="lg:min-h-screen py-8 px-8 w-full lg:w-3/12">
          <bottom />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-custom-scrollbar/dist/vueScrollbar.css'
export default {
  data() {
    return {
      tabs: ['webview', 'code', 'json'],
      defaultTab: 'webview',
    }
  },
  mounted() {
    this.setDarkMode()
  },
  methods: {
    saveDarkMode(state = true) {
      if (state === true) {
        localStorage.setItem('theme', 'dark')
      } else {
        localStorage.removeItem('theme')
      }
    },
    setDarkMode() {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
  },
}
</script>

<style>
@import '@/components/Preview/CodeHigh.css';
.scrollbar {
  @apply flex w-full items-center overflow-x-auto pb-8;
}
</style>

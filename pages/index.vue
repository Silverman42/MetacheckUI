<template>
  <div class="font-sans dark">
    <header
      class="py-6 w-full border-b dark:border-primaryBg2 dark:bg-primaryBg"
    >
      <nav class="mx-auto max-w-6xl flex px-8 items-center justify-between">
        <a href="#">
          <img src="" class="w-10" alt="metacheck logo" />
        </a>
        <div>
          <input-base></input-base>
        </div>
        <ul
          class="
            inline-flex
            items-center
            fixed
            bottom-0
            w-full
            left-0
            py-4
            lg:relative lg:w-auto
            justify-center
            md:justify-end
          "
        >
          <li class="mr-10">
            <a
              href="#"
              class="dark:text-primary-100 dark:hover:text-primary-300"
              >Guide</a
            >
          </li>
          <li>
            <a
              class="dark:text-primary-100 dark:hover:text-primary-300"
              href="#"
              >Metainfo</a
            >
          </li>
        </ul>
      </nav>
    </header>
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
        <section class="lg:min-h-screen px-6 w-full lg:w-2/12"></section>
      </div>
    </div>
  </div>
</template>

<script>
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
</style>

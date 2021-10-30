<template>
  <div class="font-sans dark">
    <navbar>
      <form id="urlForm" @submit.prevent="getMetaData()"></form>
      <input-base v-model="url" form="urlForm"></input-base>
      <action-button
        type="submit"
        form="urlForm"
        :has-full-width="false"
        size="xs"
      >
        <search-icon size="1.2x"></search-icon>
      </action-button>
    </navbar>
    <div class="dark:bg-primaryBg min-h-screen">
      <div class="section-container">
        <metadata />
        <section class="channel-section">
          <div class="mb-10">
            <section-header>Channels</section-header>
            <channel-container @channelToggle="filterChannels($event)" />
          </div>
          <div>
            <section-header>Preview</section-header>
            <div>
              <tab :tabs="tabs" :default-active-tab="defaultTab">
                <template #tab-body-webview>
                  <preview-google
                    v-if="filteredChannels.hasOwnProperty('google')"
                  />
                  <preview-facebook
                    v-if="filteredChannels.hasOwnProperty('facebook')"
                  />
                  <preview-twitter
                    v-if="filteredChannels.hasOwnProperty('twitter')"
                  />
                  <preview-linkedin
                    v-if="filteredChannels.hasOwnProperty('linkedin')"
                  />
                  <preview-pintrest
                    v-if="filteredChannels.hasOwnProperty('pinterest')"
                  />
                  <preview-slack
                    v-if="filteredChannels.hasOwnProperty('slack')"
                  />
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
        <bottom />
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-custom-scrollbar/dist/vueScrollbar.css'
import { SearchIcon } from 'vue-feather-icons'
export default {
  components: {
    SearchIcon,
  },
  data() {
    return {
      tabs: ['webview', 'code', 'json'],
      defaultTab: 'webview',
      filteredChannels: {},
      url: 'http://sundev.netlify.app',
      loading: false,
    }
  },
  computed: {},
  mounted() {
    this.setDarkMode()
    this.getMetaData()
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
    filterChannels(channels) {
      this.filteredChannels = {}
      for (const channel of channels) {
        this.$set(this.filteredChannels, `${channel}`, true)
      }
    },
    getMetaData() {
      this.loading = true
      this.$axios.get(`/api/fetch?url=${this.url}`).then((response) => {
        this.loading = false
        console.log(response.data)
      })
    },
  },
}
</script>

<style>
@import '@/components/Preview/CodeHigh.css';
.scrollbar {
  @apply flex w-full items-center overflow-x-auto pb-8;
}
::selection {
  @apply dark:bg-primary-600 dark:text-primary-100;
}

.channel-section {
  @apply border-b border-r-0 py-8 px-8 dark:border-primaryBg2 w-full;
}

.section-container {
  @apply mx-auto max-w-6xl flex flex-wrap items-stretch justify-center;
}

@screen lg {
  .channel-section {
    @apply w-6/12 border-b-0 border-r min-h-screen;
  }
  .section-container {
    @apply flex-nowrap;
  }
}
</style>

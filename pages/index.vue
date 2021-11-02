<template>
  <div class="font-sans dark">
    <navbar>
      <form id="urlForm" @submit.prevent="getMetaData()"></form>
      <input-base v-model="url" form="urlForm"></input-base>
      <action-button
        type="submit"
        form="urlForm"
        :loading="loading"
        :has-full-width="false"
        size="xs"
      >
        <search-icon size="1.2x"></search-icon>
      </action-button>
    </navbar>
    <div class="dark:bg-primaryBg min-h-screen">
      <div class="section-container">
        <metadata
          :title="title"
          :description="metaSchema.description.content"
          @changeDescription="setDescription($event)"
          @changeTitle="setTitle($event)"
          @changeImage="setImage($event)"
        />
        <section class="channel-section">
          <div class="mb-10">
            <section-header>Channels</section-header>
            <channel-container @channelToggle="filterChannels($event)" />
          </div>
          <div>
            <section-header>Preview</section-header>
            <div v-if="loading">
              <skeleton-preview />
            </div>
            <div v-else>
              <tab :tabs="tabs" :default-active-tab="defaultTab">
                <template #tab-body-webview>
                  <preview-google
                    v-if="filteredChannels.hasOwnProperty('google')"
                    :schema="{ ...metaSchema, ...extraSchema }"
                  />
                  <preview-facebook
                    v-if="filteredChannels.hasOwnProperty('facebook')"
                    :schema="{ ...metaSchema, ...extraSchema }"
                  />
                  <preview-twitter
                    v-if="filteredChannels.hasOwnProperty('twitter')"
                    :schema="{ ...metaSchema, ...extraSchema }"
                  />
                  <preview-linkedin
                    v-if="filteredChannels.hasOwnProperty('linkedin')"
                    :schema="{ ...metaSchema, ...extraSchema }"
                  />
                  <preview-pintrest
                    v-if="filteredChannels.hasOwnProperty('pinterest')"
                    :schema="{ ...metaSchema, ...extraSchema }"
                  />
                  <preview-slack
                    v-if="filteredChannels.hasOwnProperty('slack')"
                    :schema="{ ...metaSchema, ...extraSchema }"
                  />
                </template>
                <template #tab-body-code>
                  <preview-code
                    :schema="{ ...metaSchema, ...extraSchema }"
                  ></preview-code>
                </template>
                <template #tab-body-json>
                  <preview-json
                    :schema="{ ...metaSchema, ...extraSchema }"
                  ></preview-json>
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
import defaultSchema from '~/assets/defaultMetaSchema'
export default {
  components: {
    SearchIcon,
  },
  data() {
    return {
      tabs: ['webview', 'code', 'json'],
      defaultTab: 'webview',
      filteredChannels: {},
      title: '',
      url: 'http://sundev.netlify.app',
      loading: false,
      metaSchema: { ...defaultSchema },
    }
  },
  computed: {
    extraSchema() {
      return {
        title: this.title,
        url: this.url,
      }
    },
  },
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
    resetMetaSchema() {
      this.setDescription('')
      this.setTitle('')
      this.setImage('')
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
      this.resetMetaSchema()
      this.$axios
        .get(`/api/fetch?url=${this.url}`)
        .then((response) => {
          this.loading = false
          this.structureResponse(response.data)
        })
        .catch(() => {
          this.loading = false
        })
    },
    structureResponse(response) {
      this.title = response?.pageTitle
      for (const data of response.data) {
        if (data.name === null && data.property === null) {
          continue
        }
        this.metaSchema[data.name || data.property] = data
      }
      // sync meta image for webview with meta image for code view
      this.metaSchema['code_og:image'].content =
        this.metaSchema['og:image'].content
      this.metaSchema['code_twitter:image'].content =
        this.metaSchema['twitter:image'].content
    },
    setDescription(description = '') {
      this.metaSchema.description.content = description
      this.metaSchema['og:description'].content = description
      this.metaSchema['twitter:description'].content = description
    },
    setTitle(title = '') {
      this.title = title
      this.metaSchema['twitter:title'].content = title
      this.metaSchema['og:title'].content = title
    },
    setImage(imageUrl = '') {
      this.metaSchema['og:image'].content = imageUrl
      this.metaSchema['twitter:image'].content = imageUrl
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

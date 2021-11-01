<template>
  <div>
    <p class="dark:text-gray-300 text-sm mb-8">
      Copy the generated HTML code and place it between the
      <code class="text-gray-500">head</code> tag of your webpage
    </p>
    <preview-code-card>
      {{ getTitle }}
      {{ getMetaData }}
      {{ getFacebookTags }}
      {{ getTwitterTags }}
    </preview-code-card>
  </div>
</template>

<script>
import schema from '~/assets/mixins/fetchMetaSchema'
export default {
  mixins: [schema],
  computed: {
    getTitle() {
      return `
      <title>${this.schema.title}</title>
      `
    },
    getFacebookTags() {
      return `
      <!--Facebook / Opengraph metatags-->
      <meta property="og:type" content="website">
      <meta property="og:url" content="${
        this.schema['og:url']?.content || this.schema.url
      }">
      <meta property="og:title" content="${this.schema['og:title']?.content}">
      <meta property="og:description" content="${
        this.schema['og:description']?.content
      }">
      <meta property="og:image" content="${
        this.schema['code_og:image']?.content
      }">
      `
    },
    getTwitterTags() {
      return `
      <!--Twitter metatags-->
      <meta property="twitter:card" content="summary_large_image">
      <meta property="twitter:url" content="${
        this.schema['twitter:url']?.content || this.schema.url
      }">
      <meta property="twitter:title" content="${
        this.schema['twitter:title']?.content
      }">
      <meta property="twitter:description" content="${
        this.schema['twitter:description']?.content
      }">
      <meta property="twitter:image" content="${
        this.schema['code_twitter:image']?.content
      }">
      `
    },
    getMetaData() {
      return `
      <!--Metadata-->
      <meta name="title" content="${this.schema.title}">
      <meta name="description" content="${this.schema.description.content}">
      `
    },
  },
}
</script>

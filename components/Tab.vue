<template>
  <keep-alive>
    <div>
      <header>
        <ul class="tab-header">
          <li
            v-for="(tab, index) in tabArray"
            :key="index"
            class="tab-btns"
            :class="{ active: activeTab == tab }"
            @click="setActiveTab(tab)"
          >
            <slot :name="createTabSlotName(tab)">{{ tab }}</slot>
          </li>
        </ul>
      </header>
      <main class="tab-body">
        <slot :name="getTabBodyName"></slot>
      </main>
    </div>
  </keep-alive>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      },
    },
    defaultActiveTab: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      activeTab: this.defaultActiveTab,
      tabArray: this.tabs,
    }
  },
  computed: {
    getTabBodyName() {
      return `tab-body-${this.activeTab}`
    },
  },
  methods: {
    generateRandomKeys() {
      return Math.ceil(Math.random() * 500000000)
    },
    createTabSlotName(tab) {
      return `tab-${tab}`
    },
    setActiveTab(tab) {
      this.activeTab = tab
      this.$emit('tabSwitch', tab)
    },
  },
}
</script>

<style scoped>
.tab-header {
  @apply flex items-center justify-center border-b dark:border-primaryBg2 list-none overflow-x-auto;
}
.tab-btns {
  @apply p-3 cursor-pointer text-gray-600 dark:text-gray-400 px-5 inline-block w-auto border-b-4 border-transparent text-sm capitalize whitespace-nowrap;
  @apply transition-all duration-200 ease-in;
}
.tab-btns:hover,
.tab-btns.active {
  @apply border-primary-600 text-primary-600;
}

.tab-body {
  @apply py-5;
}

@screen md {
  .tab-header {
    @apply flex-wrap;
  }
}
</style>

export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    notFound: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    dataLoadComplete() {
      return this.isLoading === false && this.notFound === false
    },
    dataLoadFailed() {
      return this.isLoading === false && this.notFound === true
    },
    dataLoadPartial() {
      return this.isLoading === true || this.notFound === true
    },
    fetchData() {
      return this.data || {}
    },
  },
}

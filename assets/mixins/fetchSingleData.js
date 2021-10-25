export default {
  data() {
    return {
      data: {},
      loading: true,
      notFound: false,
      fetchURL: '',
    }
  },
  computed: {
    wasNotFound() {
      return this.loading === true || this.notFound === true
    },
  },
  async fetch() {
    await this.getData()
  },
  methods: {
    getData() {
      const vm = this
      this.loading = true
      this.$axios
        .get(this.fetchURL)
        .then((response) => {
          vm.loading = false
          vm.data = response.data.data
        })
        .catch(() => {
          vm.loading = false
          vm.notFound = true
        })
    },
  },
}

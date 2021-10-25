export default {
  data() {
    return {
      loading: true,
      currentPage: 1,
      lastPage: 1,
      data: [],
      prevStatus: true,
      nextStatus: true,
      dataCount: 0,
      url: '',
    }
  },
  methods: {
    fetchData({ page = 1, search = '', filter = {} } = {}) {
      this.loading = true
      const vm = this
      this.$axios
        .get(vm.url, {
          params: {
            page,
            search,
            ...filter,
          },
        })
        .then((response) => {
          const data = vm.fetchResponseData(response)
          vm.loading = false
          vm.currentPage = data.current_page
          vm.lastPage = data?.last_page
          vm.data = data?.data || []
          vm.prevStatus = data?.prev_page_url !== null
          vm.nextStatus = data?.next_page_url !== null
          vm.dataCount = data?.data.length || 0
        })
        .catch(() => {
          vm.loading = false
        })
    },
    fetchNext() {
      window.scrollTo(0, 0)
      this.fetchData({
        page: this.currentPage + 1,
      })
    },
    fetchPrev() {
      window.scrollTo(0, 0)
      this.fetchData({
        page: this.currentPage - 1,
      })
    },
    fetchResponseData(response = {}) {
      return response?.data?.data
    },
  },
}

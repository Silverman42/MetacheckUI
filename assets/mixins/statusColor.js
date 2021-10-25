export default {
  methods: {
    getStatusColor(status) {
      if (status === 'active') return 'green'
      if (status === 'inactive') return 'red'
      if (status === 'pending') return 'gray'
      return 'purple'
    },
  },
}

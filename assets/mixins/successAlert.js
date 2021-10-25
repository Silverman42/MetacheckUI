export default {
  methods: {
    successAlert(message = '') {
      this.$store.commit('alert/PUSH_ALERT', {
        type: 'success',
        heading: 'Success',
        body: message,
      })
    },
  },
}

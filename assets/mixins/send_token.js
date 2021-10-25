import { AUTH } from '~/assets/API_endpoints'

export default {
  data() {
    return {
      mixinToken: '',
    }
  },
  methods: {
    mixinSendToken(email = '') {
      const vm = this
      vm.$axios
        .post(AUTH.RESET_TOKEN, {
          email,
        })
        .then((response) => {
          vm.mixinToken = response
        })
    },
  },
}

export default function ({ $axios, store, redirect }) {
  $axios.onResponse(() => {
    store.commit('validation/EMPTY_ERROR')
  })
  $axios.onRequest((config) => {
    config.headers.common.Authorization = `Bearer ${store.state.auth.token}`
  })
  $axios.onError((error) => {
    store.commit('validation/EMPTY_ERROR')
    const code = parseInt(error.response && error.response.status)
    if ([400, 404, 403, 500].includes(code)) {
      store.commit('alert/PUSH_ALERT', {
        type: 'error',
        heading: 'Error',
        body: error.response?.data?.message,
      })
    }
    if (code === 401) {
      redirect('/')
      store.commit('alert/PUSH_ALERT', {
        type: 'error',
        heading: 'Error',
        body: error.response?.data?.message,
      })
    }
    if (code === 422) {
      store.commit('validation/SET_ERROR', error.response?.data?.errors)
    }
  })
}

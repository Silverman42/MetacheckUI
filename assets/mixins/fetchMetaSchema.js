export default {
  props: {
    schema: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    getSchema() {
      return this.schema
    },
  },
}

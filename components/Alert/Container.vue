<template>
  <div
    v-if="alertCount > 0"
    class="
      fixed
      h-1
      z-50
      overflow-visible
      flex flex-col
      items-end
      w-full
      px-3
      top-0
      left-0
    "
  >
    <transition-group appear="" name="alert-list" tag="div">
      <template v-for="(alert, index) in alerts">
        <alert-small
          :key="index"
          :type="alert.type"
          :heading="alert.heading"
          :body="alert.body"
          @closeAlert="closeAlert(index)"
        />
      </template>
    </transition-group>
  </div>
</template>

<script>
export default {
  computed: {
    alerts() {
      return this.$store.state.alert.alerts
    },
    alertCount() {
      return this.$store.state.alert.alerts.length
    },
  },
  methods: {
    closeAlert(alertIndex) {
      this.$store.commit('alert/REMOVE_ALERT', alertIndex)
    },
  },
}
</script>

<style scoped>
.alert-list {
  transition: all 1s;
}

.alert-list-enter,
.alert-list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.alert-list-leave-active {
  position: absolute;
}
</style>

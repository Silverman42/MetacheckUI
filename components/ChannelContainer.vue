<template>
  <custom-scrollbar class="scrollbar">
    <channel :channels="channels" value="google" @toggle="syncChannels($event)"
      ><i class="icofont-brand-google icofont-3x"></i
    ></channel>
    <channel
      :channels="channels"
      value="facebook"
      @toggle="syncChannels($event)"
      ><i class="icofont-facebook icofont-2x"></i
    ></channel>
    <channel :channels="channels" value="twitter" @toggle="syncChannels($event)"
      ><i class="icofont-twitter icofont-2x"></i
    ></channel>
    <channel
      :channels="channels"
      value="linkedin"
      @toggle="syncChannels($event)"
      ><i class="icofont-linkedin icofont-2x"></i
    ></channel>
    <channel
      :channels="channels"
      value="pinterest"
      @toggle="syncChannels($event)"
      ><i class="icofont-pinterest icofont-2x"></i
    ></channel>
    <channel :channels="channels" value="slack" @toggle="syncChannels($event)"
      ><i class="icofont-slack icofont-2x"></i
    ></channel>
  </custom-scrollbar>
</template>

<script>
import CustomScrollbar from 'vue-custom-scrollbar'
export default {
  components: {
    CustomScrollbar,
  },
  data() {
    return {
      channels: ['google', 'facebook'],
    }
  },
  mounted() {
    this.$emit('channelToggle', this.channels)
  },
  methods: {
    syncChannels(e) {
      this.channels = e
      this.$emit('channelToggle', this.channels)
    },
  },
}
</script>

<style scoped></style>

<template>
    <div class="video-container iq-main-slider">
      <video class="video d-block" controls loop>
         <source src="../../../assets/video/sample-video.mp4" type="video/mp4">
      </video>
   </div>
</template>
<script>
export default {
  name: 'BannerVideo',
  components: {
  },
  mounted () {
    if ('videoId' in this.$route.params) {
      console.log(this.$route.params.videoId)
    }
  },
  data () {
    return {
    }
  }
}
</script>

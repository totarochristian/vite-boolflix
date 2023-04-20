<template>
  <div class="youtubeVideo">
    <iframe :src="'https://www.youtube.com/embed/'+videoKey+'?autoplay=1&loop=1&controls=1&mute='+mute+'&enablejsapi=1&rel=0&playlist='+videoKey" frameborder="0"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'YoutubeVideoComponent',
    props:{
      videoKey: String
    },
    data(){
      return {
        mute: true
      }
    },
    mounted(){
      this.mute = true;
    }
  }
</script>

<style lang="scss" scoped>
  .youtubeVideo{
    iframe{
      width: 100%;
      height: 80vh;
      object-fit: cover;
    }
  }
</style>
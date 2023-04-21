<template>
  <div class="youtubeVideo">
    <iframe :src="'https://www.youtube.com/embed/'+videoKey+'?autoplay=1&loop=1&controls=1&mute='+mute+'&enablejsapi=1&rel=0&playlist='+playlist" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>
  export default {
    name: 'YoutubeVideoComponent',
    props:{
      videoKey: String,
      playlist: String
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
      height: 100%;
      object-fit: cover;
    }
  }
</style>
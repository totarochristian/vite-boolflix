<template>
  <main class="px-4 d-flex flex-column justify-content-start align-items-center gap-4">
    <CarouselComponent :endPoint="store.apiSettings.endPoints.film.popular" title="Popular movies"/>
    <CarouselComponent :endPoint="store.apiSettings.endPoints.film.topRated" title="Top rated movies"/>
    <CarouselComponent :endPoint="store.apiSettings.endPoints.film.nowPlaying" title="Now playing movies"/>
    <CarouselComponent :endPoint="store.apiSettings.endPoints.film.upcoming" title="Upcoming movies"/>
    <CarouselComponent :endPoint="store.apiSettings.endPoints.tv.popular" title="Popular TV shows"/>
    <CarouselComponent :endPoint="store.apiSettings.endPoints.tv.topRated" title="Top rated TV shows"/>
    <CarouselComponent :endPoint="store.apiSettings.endPoints.tv.airingToday" title="TV shows airing today"/>

    <CardInfoComponent />
  </main>
</template>

<script>
  import CarouselComponent from '../subMain/main/CarouselComponent.vue';
  import CardInfoComponent from '../subMain/general/CardInfoComponent.vue';
  import { store } from '../../data/store';
  export default {
    name: 'MainComponent',
    components:{
      CarouselComponent,
      CardInfoComponent
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
  main{
    overflow-y: auto;
  }
</style>
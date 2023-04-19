<template>
  <main class="px-4 d-flex flex-column justify-content-start align-items-center gap-4">
    <CarouselComponent :endPoint="store.apiSettings.endPoints.film.popular" title="Film popolari"/>
    <CarouselComponent :endPoint="store.apiSettings.endPoints.film.topRated" title="Film più votati"/>
    <CarouselComponent :endPoint="store.apiSettings.endPoints.film.nowPlaying" title="Film ora al cinema"/>
    <CarouselComponent :endPoint="store.apiSettings.endPoints.film.upcoming" title="Film che usciranno a breve"/>
    <CarouselComponent :endPoint="store.apiSettings.endPoints.tv.popular" title="Serie TV popolari"/>
    <CarouselComponent :endPoint="store.apiSettings.endPoints.tv.topRated" title="Serie TV più votate"/>
    <CarouselComponent :endPoint="store.apiSettings.endPoints.tv.airingToday" title="Serie tv in onda oggi"/>

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
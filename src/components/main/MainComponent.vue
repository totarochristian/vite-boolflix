<template>
  <main class="px-4 d-flex flex-column justify-content-start align-items-center gap-4">
    <CarouselComponent :endPoint="store.apiSettings.endPoints.film.popular" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[0]"/>
    <CarouselComponent :endPoint="store.apiSettings.endPoints.film.topRated" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[1]"/>
    <CarouselComponent :endPoint="store.apiSettings.endPoints.film.nowPlaying" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[2]"/>
    <CarouselComponent :endPoint="store.apiSettings.endPoints.film.upcoming" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[3]"/>
    <CarouselComponent :endPoint="store.apiSettings.endPoints.tv.popular" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[4]"/>
    <CarouselComponent :endPoint="store.apiSettings.endPoints.tv.topRated" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[5]"/>
    <CarouselComponent :endPoint="store.apiSettings.endPoints.tv.airingToday" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[6]"/>

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
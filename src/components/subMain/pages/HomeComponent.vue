<template>
  <div class="w-100 h-100 page">
    <HeroComponent :languageIndex="store.settings.currentLanguageIndex" v-if="pageIndex == 0" />
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.film.popular" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[0]" v-if="pageIndex == 0 || pageIndex == 1 || pageIndex == 4"/>
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.film.topRated" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[1]" v-if="pageIndex == 0 || pageIndex == 1 || pageIndex == 5"/>
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.film.nowPlaying" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[2]" v-if="pageIndex == 0 || pageIndex == 1"/>
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.film.upcoming" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[3]" v-if="pageIndex == 0 || pageIndex == 1 || pageIndex == 3"/>
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.tv.popular" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[4]" v-if="pageIndex == 0 || pageIndex == 2 || pageIndex == 4"/>
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.tv.topRated" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[5]" v-if="pageIndex == 0 || pageIndex == 2 || pageIndex == 5 "/>
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.tv.airingToday" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[6]" v-if="pageIndex == 0 || pageIndex == 2 || pageIndex == 3"/>
  </div>
</template>

<script>
  import CarouselComponent from '../main/CarouselComponent.vue';
  import HeroComponent from '../main/HeroComponent.vue';
  import { store } from '../../../data/store';
  export default {
    name: 'HomeComponent',
    components:{
      CarouselComponent,
      HeroComponent
    },
    props:{
      pageIndex: Number
    },
    data(){
      return{
        store,
        scroll: null
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>
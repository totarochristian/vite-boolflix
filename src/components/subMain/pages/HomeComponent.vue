<template>
  <div class="w-100 h-100" :class="{'d-none': !store.settings.currentMenuSectionIndexOpened == 0}">
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.film.popular" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[0]"/>
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.film.topRated" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[1]"/>
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.film.nowPlaying" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[2]"/>
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.film.upcoming" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[3]"/>
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.tv.popular" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[4]"/>
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.tv.topRated" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[5]"/>
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.tv.airingToday" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[6]"/>
  </div>
</template>

<script>
  import CarouselComponent from '../main/CarouselComponent.vue';
  import { store } from '../../../data/store';
  export default {
    name: 'HomeComponent',
    components:{
      CarouselComponent,
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
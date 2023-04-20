<template>
  <div class="w-100 h-100" :class="{'d-none': store.settings.currentMenuSectionIndexOpened != 2}">
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.tv.popular" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[4]"/>
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.tv.topRated" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[5]"/>
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.tv.airingToday" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[6]"/>
  </div>
</template>

<script>
  import CarouselComponent from '../main/CarouselComponent.vue';
  import { store } from '../../../data/store';
  export default {
    name: 'TvSeriesComponent',
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
<template>
  <div class="w-100 h-100 page" :class="{'d-none': store.settings.currentMenuSectionIndexOpened != 3}">
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.film.upcoming" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[3]"/>
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.tv.airingToday" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[6]"/>
  </div>
</template>

<script>
  import CarouselComponent from '../main/CarouselComponent.vue';
  import { store } from '../../../data/store';
  export default {
    name: 'UpcomingComponent',
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
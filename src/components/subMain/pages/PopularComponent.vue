<template>
  <div class="w-100 h-100 page" :class="{'d-none': store.settings.currentMenuSectionIndexOpened != 4}">
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.film.popular" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[0]"/>
    <CarouselComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.tv.popular" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[4]"/>
  </div>
</template>

<script>
  import CarouselComponent from '../main/CarouselComponent.vue';
  import { store } from '../../../data/store';
  export default {
    name: 'PopularComponent',
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
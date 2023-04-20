<template>
  <div class="w-100 h-100" :class="{'d-none': store.settings.currentMenuSectionIndexOpened != -1}">
    <MatrixComponent :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.tv.popular" :title="store.settings.languages[store.settings.currentLanguageIndex].carouselsTitles[4]"/>
  </div>
</template>

<script>
  import MatrixComponent from '../main/MatrixComponent.vue';
  import { store } from '../../../data/store';
  export default {
    name: 'SearchComponent',
    components:{
      MatrixComponent,
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
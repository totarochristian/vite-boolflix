<template>
  <div class="w-100 h-100" :class="{'d-none': (store.settings.currentMenuSectionIndexOpened != -1 || !store.menuSettings.textToSearch)}">
    <MatrixComponent :searchText="store.menuSettings.textToSearch" :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.film.search" :title="store.settings.languages[store.settings.currentLanguageIndex].search[1]"/>
    <MatrixComponent :searchText="store.menuSettings.textToSearch" :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.tv.search" :title="store.settings.languages[store.settings.currentLanguageIndex].search[2]"/>
  </div>
  <div class="w-100 h-100 d-flex justify-content-center align-items-center" :class="{'d-none': (store.settings.currentMenuSectionIndexOpened != -1 || store.menuSettings.textToSearch)}">
    <h5>Inserisci un termine da cercare.</h5>
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
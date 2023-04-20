<template>
  <div class="w-100 h-100" :class="{'d-none': (store.settings.currentMenuSectionIndexOpened != -1 || !store.menuSettings.textToSearch) || noResultFounded}">
    <MatrixComponent :searchText="store.menuSettings.textToSearch" :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.film.search" :title="store.settings.languages[store.settings.currentLanguageIndex].search[1]" @no-result-founded="(res) => noResultFounded = res"/>
    <MatrixComponent :searchText="store.menuSettings.textToSearch" :languageIndex="store.settings.currentLanguageIndex" :endPoint="store.apiSettings.endPoints.tv.search" :title="store.settings.languages[store.settings.currentLanguageIndex].search[2]" @no-result-founded="(res) => noResultFounded = res"/>
  </div>
  <div class="w-100 h-100 d-flex justify-content-center align-items-center" :class="{'d-none': (store.settings.currentMenuSectionIndexOpened != -1 || (store.menuSettings.textToSearch && !noResultFounded))}">
    <h5 v-if="!store.menuSettings.textToSearch">{{ store.settings.languages[store.settings.currentLanguageIndex].search[3] }}</h5>
    <h5 v-if="noResultFounded && store.menuSettings.textToSearch">{{ store.settings.languages[store.settings.currentLanguageIndex].search[4] }} <strong>{{ store.menuSettings.textToSearch }}</strong>.</h5>
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
        store,
        noResultFounded: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  h5{
    font-weight: lighter;
    strong{
      font-weight: bold;
    }
  }
</style>
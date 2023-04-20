<template>
  <div id="searchComponent" class="p-4 d-flex justify-content-center align-items-center">
    <div id="searchComponentBack" class="ps-4 d-flex align-items-center gap-4">
      <i class="fs-4 fa-solid fa-arrow-left" @click="store.menuSettings.isSearchBarOpened = false"></i>
    </div>
    <div id="searchComponentActions" class="d-flex align-items-center gap-1">
      <i class="fs-4 fa-solid fa-magnifying-glass"></i>
      <input class="col-12" type="text" name="searchInputText" id="searchInputText" :placeholder="store.settings.languages[store.settings.currentLanguageIndex].search" v-model="store.menuSettings.textToSearch">
    </div>
  </div>
  <div>
    
  </div>
</template>

<script>
  import { store } from '../../../data/store'
  export default {
    name: 'SearchComponent',
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
  #searchComponent{
    width: 100%;
    height: 100%;
    position: relative;
    i{
      cursor: pointer;
    }
    #searchComponentActions{
      input{
        background-color: black;
        border: 0;
        color: #999999;
        outline: 2px solid #999999;
        &:hover{
          color: white;
          outline: 2px solid white;
        }
      }
    }
    #searchComponentBack{
      position: absolute;
      left: 0;
    }
  }
</style>
<template>
  <div id="searchBarClosingDiv" @click.self="store.menuSettings.isSearchBarOpened = false;" :class="{'removeVeil': store.settings.currentMenuSectionIndexOpened == -1}">
    <div id="searchComponent" class="p-4 d-flex justify-content-center align-items-center">
      <div id="searchComponentBack" class="ps-4 d-flex align-items-center gap-4">
        <i class="fs-4 fa-solid fa-arrow-left" @click="store.menuSettings.isSearchBarOpened = false; store.settings.currentMenuSectionIndexOpened = 0;"></i>
      </div>
      <div id="searchComponentActions" class="d-flex align-items-center gap-1">
        <i class="fs-4 fa-solid fa-magnifying-glass"></i>
        <input class="col-12" type="text" name="searchInputText" id="searchInputText" :placeholder="store.settings.languages[store.settings.currentLanguageIndex].search[0]" v-model="store.menuSettings.textToSearch" @keyup="store.settings.currentMenuSectionIndexOpened = -1;">
      </div>
    </div>
  </div>
</template>

<script>
  import { store } from '../../../data/store'
  export default {
    name: 'SearchBarComponent',
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
  #searchBarClosingDiv{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 2000;
    overflow: hidden;
    &.removeVeil{
      background-color: rgba(0, 0, 0, 0);
    }
    #searchComponent{
      position: relative;
      top: 0;
      left: 0;
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
  }
</style>
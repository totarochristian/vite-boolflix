<template>
  <div id="menuComponent" class="p-4 d-flex justify-content-between align-items-center">
    <div id="menuComponentTitle" class="d-flex align-items-center gap-4">
      <i class="fs-4 fa-solid fa-bars text-white" @click="store.menuSettings.isSectionsOpened = true"></i>
      <h3 class="fw-bold">Boolflix</h3>
    </div>
    <div id="menuComponentActions" class="d-flex align-items-center gap-4">
      <i class="fs-4 pe-4 fa-solid fa-magnifying-glass" @click="ShowSearchBar"></i>
      <i class="fs-4 fa-solid fa-ellipsis pe-4" @click="store.menuSettings.isSettingsOpened = true"></i>
    </div>
  </div>
</template>

<script>
  import { store } from '../../../data/store';
  export default {
    name: 'MenuComponent',
    data(){
      return{
        store
      }
    },
    methods:{
      ShowSearchBar(){
        store.settings.previousMenuSectionIndexOpened = store.settings.currentMenuSectionIndexOpened;
        store.menuSettings.isSearchBarOpened = true;
        if(store.menuSettings.textToSearch){
          store.settings.currentMenuSectionIndexOpened = -1;
        }
          
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../../assets/styles/partial/variables' as *;
  #menuComponent{
    width: 100%;
    height: 100%;
    i{
      cursor: pointer;
    }
    h3{
      color: $titleColor;
    }
  }
</style>
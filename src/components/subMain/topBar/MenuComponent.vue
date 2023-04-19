<template>
  <div id="menuComponent" class="p-4 d-flex justify-content-between align-items-center">
    <div id="menuComponentTitle" class="d-flex align-items-center gap-4">
      <i class="fs-4 fa-solid fa-bars text-white" @click="store.menuSettings.isSectionsOpened = true"></i>
      <h3>Boolflix</h3>
    </div>
    <div id="menuComponentActions" class="d-flex align-items-center gap-4">
      <i class="fs-4 pe-4 fa-solid fa-magnifying-glass" @click="store.menuSettings.isSearchBarOpened = true"></i>
      <i class="fs-4 fa-solid fa-ellipsis"></i>
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
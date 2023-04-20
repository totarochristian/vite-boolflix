<template>
  <div id="sectionsClosingDiv" @click.self="store.menuSettings.isSectionsOpened = false;"></div>
  <div id="sectionsComponent" class="col-6 col-md-4 col-lg-3 d-flex flex-column gap-1">
    <div id="sectionsComponentHeader" class="p-4 d-flex justify-content-end align-items-center">
      <i class="fs-4 fa-solid fa-xmark" @click="store.menuSettings.isSectionsOpened = false"></i>
    </div>
    <div id="sectionsComponentContent" class="d-flex flex-column justify-content-center align-items-center">
      <div v-for="(section, index) in store.settings.languages[store.settings.currentLanguageIndex].menu" class="fs-5 col-12 section px-4 py-3" :class="{'active fw-bold': index == store.settings.currentMenuSectionIndexOpened}" @click="ChangeActiveSection(index)">
        {{ section }}
      </div>
    </div>
  </div>
</template>

<script>
  import { store } from '../../../data/store';
  export default {
    name: 'SectionsComponent',
    data(){
      return{
        store
      }
    },
    methods:{
      ChangeActiveSection(index){
        store.menuSettings.isSectionsOpened = false;
        store.settings.currentMenuSectionIndexOpened = index;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../../assets/styles/partial/variables' as *;
  #sectionsClosingDiv{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 500;
    overflow: hidden;
  }
  #sectionsComponent{
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: $sectionsBackgroundColor;
    i{
      cursor: pointer;
    }
    .section{
      cursor: pointer;
      border-left: 8px solid transparent;
      &:hover{
        background-color: $sectionsHoverBackgroundColor;
      }
    }
    .active, .section:hover{
        border-color: $titleColor;
      }
  }
</style>
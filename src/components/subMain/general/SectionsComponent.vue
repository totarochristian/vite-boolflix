<template>
  <div id="sectionsComponent" class="col-6 col-md-4 col-lg-3 d-flex flex-column gap-1">
    <div id="sectionsComponentHeader" class="p-4 d-flex justify-content-end align-items-center">
      <i class="fs-4 fa-solid fa-xmark" @click="store.menuSettings.isSectionsOpened = false"></i>
    </div>
    <div id="sectionsComponentContent" class="d-flex flex-column justify-content-center align-items-center">
      <div v-for="section in store.menuSettings.sections" class="fs-5 col-12 section px-4 py-3" :class="{'active fw-bold': section.isActive}" @click="ChangeActiveSection(section.name)">
        {{ section.name }}
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
      ChangeActiveSection(name){
        store.menuSettings.sections.forEach((section) => {
          section.isActive = section.name != name ? false : true;
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../../assets/styles/partial/variables' as *;
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
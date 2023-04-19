<template>
  <header>
    <MenuComponent v-if="!store.menuSettings.isSearchBarOpened"/>
    <SearchComponent v-if="store.menuSettings.isSearchBarOpened"/>
    <SectionsComponent v-if="store.menuSettings.isSectionsOpened"/>
  </header>
</template>

<script>
  import MenuComponent from '../subMain/topBar/MenuComponent.vue';
  import SearchComponent from '../subMain/topBar/SearchComponent.vue';
  import SectionsComponent from '../subMain/general/SectionsComponent.vue';
  import { store } from '../../data/store'
  export default {
    name: 'TopBarComponent',
    components: {
      MenuComponent,
      SearchComponent,
      SectionsComponent
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
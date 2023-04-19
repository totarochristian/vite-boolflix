<template>
  <header>
    <MenuComponent v-if="!store.menuSettings.isSearchBarOpened"/>
    <SearchComponent v-if="store.menuSettings.isSearchBarOpened"/>
  </header>
</template>

<script>
  import MenuComponent from '../subMain/topBar/MenuComponent.vue';
  import SearchComponent from '../subMain/topBar/SearchComponent.vue';
  import { store } from '../../data/store'
  export default {
    name: 'TopBarComponent',
    components: {
      MenuComponent,
      SearchComponent
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
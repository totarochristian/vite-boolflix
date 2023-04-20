<template>
  <header>
    <MenuComponent v-if="!store.menuSettings.isSearchBarOpened"/>
    <SearchBarComponent v-if="store.menuSettings.isSearchBarOpened"/>
    <SectionsComponent v-if="store.menuSettings.isSectionsOpened"/>
    <SettingsComponent v-if="store.menuSettings.isSettingsOpened"/>
  </header>
</template>

<script>
  import MenuComponent from '../subMain/topBar/MenuComponent.vue';
  import SearchBarComponent from '../subMain/topBar/SearchBarComponent.vue';
  import SectionsComponent from '../subMain/general/SectionsComponent.vue';
  import SettingsComponent from '../subMain/general/SettingsComponent.vue';
  import { store } from '../../data/store'
  export default {
    name: 'TopBarComponent',
    components: {
      MenuComponent,
      SearchBarComponent,
      SectionsComponent,
      SettingsComponent
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
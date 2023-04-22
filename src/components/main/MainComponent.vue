<template>
  <main class="px-4 d-flex flex-column justify-content-start align-items-center gap-4" @scroll="handleScroll">
    <HomeComponent :pageIndex="store.settings.currentMenuSectionIndexOpened" />
    <SearchComponent />
    <CardInfoComponent :card="store.selectedCarouselCard.carouselCardData" />
  </main>
</template>

<script>
  import HomeComponent from '../subMain/pages/HomeComponent.vue';
  import SearchComponent from '../subMain/pages/SearchComponent.vue';
  import CardInfoComponent from '../subMain/general/CardInfoComponent.vue';
  import { store } from '../../data/store';
  export default {
    name: 'MainComponent',
    components:{
      CardInfoComponent,
      HomeComponent,
      SearchComponent
    },
    data(){
      return{
        store
      }
    },
    methods: {
      handleScroll(event) {
        store.menuSettings.isScrollOnTop = event.currentTarget.scrollTop <= 0;
      }
    }
  }
</script>

<style lang="scss" scoped>
  main{
    overflow-y: auto;
  }
</style>
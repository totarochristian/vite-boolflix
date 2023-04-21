<template>
  <main class="px-4 d-flex flex-column justify-content-start align-items-center gap-4" @scroll="handleScroll">
    <HomeComponent />
    <FilmComponent />
    <TvSeriesComponent />
    <UpcomingComponent />
    <PopularComponent />
    <TopRatedComponent />
    <SearchComponent />
    <CardInfoComponent :card="store.selectedCarouselCard.carouselCardData" />
  </main>
</template>

<script>
  import HomeComponent from '../subMain/pages/HomeComponent.vue';
  import FilmComponent from '../subMain/pages/FilmComponent.vue';
  import TvSeriesComponent from '../subMain/pages/TvSeriesComponent.vue';
  import UpcomingComponent from '../subMain/pages/UpcomingComponent.vue';
  import PopularComponent from '../subMain/pages/PopularComponent.vue';
  import TopRatedComponent from '../subMain/pages/TopRatedComponent.vue';
  import SearchComponent from '../subMain/pages/SearchComponent.vue';
  import CardInfoComponent from '../subMain/general/CardInfoComponent.vue';
  import { store } from '../../data/store';
  export default {
    name: 'MainComponent',
    components:{
      CardInfoComponent,
      HomeComponent,
      FilmComponent,
      TvSeriesComponent,
      UpcomingComponent,
      PopularComponent,
      TopRatedComponent,
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
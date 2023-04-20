<template>
  <main class="px-4 d-flex flex-column justify-content-start align-items-center gap-4">
    <HomeComponent />
    <FilmComponent />
    <TvSeriesComponent />
    <UpcomingComponent />
    <PopularComponent />
    <TopRatedComponent />
    <CardInfoComponent />
  </main>
</template>

<script>
  import HomeComponent from '../subMain/pages/HomeComponent.vue';
  import FilmComponent from '../subMain/pages/FilmComponent.vue';
  import TvSeriesComponent from '../subMain/pages/TvSeriesComponent.vue';
  import UpcomingComponent from '../subMain/pages/UpcomingComponent.vue';
  import PopularComponent from '../subMain/pages/PopularComponent.vue';
  import TopRatedComponent from '../subMain/pages/TopRatedComponent.vue';
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
      TopRatedComponent
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
  main{
    overflow-y: auto;
  }
</style>
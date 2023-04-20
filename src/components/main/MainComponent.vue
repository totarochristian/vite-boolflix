<template>
  <main class="px-4 d-flex flex-column justify-content-start align-items-center gap-4">
    <HomeComponent />
    <CardInfoComponent />
  </main>
</template>

<script>
  import HomeComponent from '../subMain/pages/HomeComponent.vue';
  import CardInfoComponent from '../subMain/general/CardInfoComponent.vue';
  import { store } from '../../data/store';
  export default {
    name: 'MainComponent',
    components:{
      CardInfoComponent,
      HomeComponent
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
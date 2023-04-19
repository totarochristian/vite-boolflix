<template>
  <main class="p-4 d-flex flex-column justify-content-start align-items-center gap-2">
    <CarouselComponent :endPoint="store.apiSettings.endPoints.popular" title="Film"/>
  </main>
</template>

<script>
  import CarouselComponent from '../subMain/main/CarouselComponent.vue';
  import { store } from '../../data/store';
  export default {
    name: 'MainComponent',
    components:{
      CarouselComponent
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
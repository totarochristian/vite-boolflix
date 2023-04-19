<template>
  <main class="p-4 d-flex flex-column justify-content-start align-items-center gap-2">
    <CarouselComponent />
  </main>
</template>

<script>
import CarouselComponent from '../subMain/main/CarouselComponent.vue';
  export default {
    name: 'MainComponent',
    components:{
      CarouselComponent
    }
  }
</script>

<style lang="scss" scoped>
  
</style>
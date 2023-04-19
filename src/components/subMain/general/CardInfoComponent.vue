<template>
  <div id="cardInfoClosingDiv" :class="{'d-none': !store.selectedCarouselCard.isOpened}" @click="store.selectedCarouselCard.isOpened = false">
    <div id="cardInfoComponent" class="col-11 col-md-8 col-lg-6 d-flex flex-column justify-content-center align-items-center">
      Card info component
    </div>
  </div>
</template>

<script>
  import { store } from '../../../data/store';
  export default {
    name: 'CardInfoComponent',
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../../assets/styles/partial/variables' as *;
  #cardInfoClosingDiv{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 2000;
    #cardInfoComponent{
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: $sectionsBackgroundColor;
      color: $bodyColor;
    }
  }
</style>
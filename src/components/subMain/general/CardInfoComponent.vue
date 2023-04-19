<template>
  <div id="cardInfoClosingDiv" :class="{'d-none': !store.selectedCarouselCard.isOpened}" @click="store.selectedCarouselCard.isOpened = false" v-if="store.selectedCarouselCard.carouselCardData">
    <div id="cardInfoComponent" class="col-11 col-md-8 col-lg-5 d-flex flex-column justify-content-start align-items-center">
      <div id="cardInfoComponentHeader">
        <i class="fs-3 fa-solid fa-xmark" @click="store.selectedCarouselCard.isOpened = false"></i>
        <img :src="GetImageUrl(store.selectedCarouselCard.carouselCardData)" :alt="store.selectedCarouselCard.carouselCardData.title">
        <h3 class="px-4">{{ store.selectedCarouselCard.carouselCardData.title }}</h3>
        <span></span>
      </div>
      <div id="cardInfoComponentContent">
        <p class="p-4">{{ store.selectedCarouselCard.carouselCardData.overview }}</p>
      </div>
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
    },
    methods:{
      GetImageUrl(data){
        let tmp = store.apiSettings.imageBaseUrl + data.backdrop_path;
        return tmp;
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
    overflow: hidden;
    #cardInfoComponent{
      height: calc(100% - 2rem);
      margin-top: 2rem;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: $sectionsBackgroundColor;
      color: $bodyColor;
      #cardInfoComponentHeader{
        width: 100%;
        height: 45vh;
        position: relative;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        h3{
          position: absolute;
          bottom: 0.8rem;
          left: 1rem;
        }
        span{
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2rem;
          background: linear-gradient(0, $sectionsBackgroundColor, transparent);
        }
        i{
          position: absolute;
          top: 1rem;
          right: 1rem;
          cursor: pointer;
          &:hover{
            transform: scale(1.2);
          }
        }
      }
    }
  }
</style>
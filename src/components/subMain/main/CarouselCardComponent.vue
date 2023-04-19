<template>
  <div class="carouselCard" :class="{'d-none': !cardData.show}" @click="OpenCardInfo()">
    <img :src="GetImageUrl(cardData.data)" :alt="cardData.data.title">
  </div>
</template>

<script>
  import { store } from '../../../data/store';
  export default {
    name: 'CarouselCardComponent',
    props:{
      cardData: Object
    },
    data(){
      return{
        store
      }
    },
    methods:{
      GetImageUrl(data){
        let tmp = store.apiSettings.imageBaseUrl + data.poster_path;
        return tmp;
      },
      OpenCardInfo(){
        store.selectedCarouselCard.carouselCardData = this.cardData.data;
        store.selectedCarouselCard.isOpened = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .carouselCard{
    width: calc(100% / 9);
    height: 100%;
    cursor: pointer;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
<template>
  <div class="carouselCard" :class="{'d-none': !cardData.show}" @click="OpenCardInfo()" v-if="!store.menuSettings.showMoreInfoInCarouselCard">
    <img :src="GetImageUrl(cardData.data)" :alt="cardData.data.title">
  </div>
  <div class="carouselCard flip-card" :class="{'d-none': !cardData.show}" @click="OpenCardInfo()" v-if="store.menuSettings.showMoreInfoInCarouselCard">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="GetImageUrl(cardData.data)" :alt="cardData.data.title">
      </div>
      <div class="flip-card-back p-3">
        <h5>{{cardData.data.title}}</h5> 
        <p>{{ReduceString(cardData.data.overview)}}</p> 
      </div>
    </div>
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
        let tmp = data.poster_path ? store.apiSettings.imageBaseUrl + data.poster_path : "/images/Image_not_available_vert.png";
        return tmp;
      },
      OpenCardInfo(){
        store.selectedCarouselCard.carouselCardData = this.cardData.data;
        store.selectedCarouselCard.isOpened = true;
      },
      ReduceString(stringVar){
        if(stringVar.length>100)
          stringVar = stringVar.substring(0,99) + " [...]";
        return stringVar;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../../assets/styles/partial/variables' as *;
  .carouselCard{
    min-width: 192px;
    height: 290px;
    cursor: pointer;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .flip-card {
    background-color: transparent;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: $sectionsBackgroundColor;
    color: black;
  }

  .flip-card-back {
    background-color: $sectionsBackgroundColor;
    transform: rotateY(180deg);
  }
</style>
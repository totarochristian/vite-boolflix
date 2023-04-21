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
        <p>{{GetOverviewString()}}</p>
        <StarsComponent :voteAverage="cardData.data.vote_average" class="justify-content-center mb-3"/>
        <div class="d-flex justify-content-between align-items-center">
          <span v-if="cardData.data.release_date">{{('' + cardData.data.release_date).substring(0,4)}}</span>
          <span v-if="cardData.data.first_air_date">{{('' + cardData.data.first_air_date).substring(0,4)}}</span>
          <img class="flag" :src="'/images/flags/'+cardData.data.original_language+'.svg'" :alt="cardData.data.original_language+' flag'">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import StarsComponent from '../general/StarsComponent.vue';
  import { store } from '../../../data/store';
  export default {
    name: 'CarouselCardComponent',
    props:{
      cardData: Object
    },
    components:{
      StarsComponent
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
      GetOverviewString(){
        let stringVar = this.cardData.data.overview;
        if(this.cardData.data.title.length + this.cardData.data.overview.length > 100)
          stringVar = stringVar.substring(0,(80 - this.cardData.data.title.length)) + " [...]";
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
    .flag{
      width: 30px;
      height: auto;
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
<template>
  <div id="cardInfoClosingDiv" :class="{'d-none': !store.selectedCarouselCard.isOpened}" @click.self="CloseCardInfo" v-if="store.selectedCarouselCard.carouselCardData">
    <div id="cardInfoComponent" class="col-11 col-md-8 col-lg-5 d-flex flex-column justify-content-start align-items-center">
      <div id="cardInfoComponentHeader">
        <div class="w-100 h-100">
          <i id="stopTrailers" class="fs-3 fa-solid fa-xmark" @click="CloseCardInfo"></i>
          <img :src="GetImageUrl(store.selectedCarouselCard.carouselCardData)" :alt="store.selectedCarouselCard.carouselCardData.title" :class="{'d-none': store.selectedCarouselCard.playVideos}" >
          <YoutubeVideoComponent id="cardInfoHero" :videoKey="youtubeVideoKeyList[0]" :playlist="playlistString" :class="{'d-none': !store.selectedCarouselCard.playVideos}" />
          <h3 class="px-4">{{ store.selectedCarouselCard.carouselCardData.title }}</h3>
          <i id="playTrailers" class="fs-1 fa-solid fa-play" @click="PlayTrailers" :class="{'d-none': store.selectedCarouselCard.playVideos || youtubeVideoKeyList.length == 0}"></i>
          <i id="returnStart" class="fs-3 fa-solid fa-arrow-left" :class="{'d-none': !store.selectedCarouselCard.playVideos || youtubeVideoKeyList.length == 0}" @click="ReturnStart"></i>
        </div>
      </div>
      <div id="cardInfoComponentContent" class="w-100 p-4">
        <div class="w-100 p-4 d-flex justify-content-between align-items-center flex-wrap">
          <StarsComponent :voteAverage="store.selectedCarouselCard.carouselCardData.vote_average"/>
          <span v-if="store.selectedCarouselCard.carouselCardData.release_date">{{('' + store.selectedCarouselCard.carouselCardData.release_date).substring(0,4)}}</span>
          <span v-if="store.selectedCarouselCard.carouselCardData.first_air_date">{{('' + store.selectedCarouselCard.carouselCardData.first_air_date).substring(0,4)}}</span>
          <span class="adultOnly px-1" v-if="store.selectedCarouselCard.carouselCardData.adult">18+</span>
        </div>
        <div class="w-100 p-4 d-flex justify-content-center align-items-center flex-wrap gap-4">
          <div class="d-flex justify-content-between align-items-center flex-column">
            <span class="fs-5 fw-bold mb-2">{{store.settings.languages[store.settings.currentLanguageIndex].cardInfo[0]}}</span>
            <span>{{ store.selectedCarouselCard.carouselCardData.original_title }}</span>
          </div>
          <div class="d-flex justify-content-between align-items-center flex-column">
            <span class="fs-5 fw-bold mb-2">{{store.settings.languages[store.settings.currentLanguageIndex].cardInfo[1]}}</span>
            <img class="flag" :src="'/images/flags/'+store.selectedCarouselCard.carouselCardData.original_language+'.svg'" :alt="store.selectedCarouselCard.carouselCardData.original_language+' flag'">
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center flex-column">
          <span class="fs-5 fw-bold">{{store.settings.languages[store.settings.currentLanguageIndex].cardInfo[2]}}</span>
          <p class="p-4">{{ store.selectedCarouselCard.carouselCardData.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { store } from '../../../data/store';
  import axios from 'axios';
  import StarsComponent from './StarsComponent.vue';
  import YoutubeVideoComponent from '../general/YoutubeVideoComponent.vue';
  export default {
    name: 'CardInfoComponent',
    data(){
      return{
        store,
        youtubeVideoKeyList: [],
        playlistString: ''
      }
    },
    props:{
      card: Object
    },
    watch:{
      card: function(res){
        this.InitializeData();
      }
    },
    methods:{
      GetImageUrl(data){
        let tmp = data.backdrop_path ? store.apiSettings.imageBaseUrl + data.backdrop_path : "/images/Image_not_available_hor.png";
        return tmp;
      },
      InitializeData(){
        if(store.selectedCarouselCard.carouselCardData){
          this.youtubeVideoKeyList = [];
          this.playlistString = '';
          let endPoint = store.selectedCarouselCard.carouselCardData.first_air_date ? store.apiSettings.endPoints.tv.base : store.apiSettings.endPoints.film.base;
          let url = store.apiSettings.baseUrl + endPoint + store.selectedCarouselCard.carouselCardData.id + "/videos?api_key=" + store.apiSettings.apiKey + "&language=" + store.settings.languages[store.settings.currentLanguageIndex].id;
          axios.get(url).then((res) => {
              //for each data retrieved by the api, add the first key of a teaser or trailer in the list of youtube video key
              for(let i=0; i<res.data.results.length; i++){
                if(res.data.results[i].type=="Teaser" || res.data.results[i].type=="Trailer"){
                  this.youtubeVideoKeyList.push(res.data.results[i].key);
                  this.playlistString += this.playlistString ? "," + res.data.results[i].key : res.data.results[i].key;
                }
              }
          }).catch((err) => {
              console.log(err);
          }).finally(() => {
              //code to execute ever
          });
        }
      },
      CloseCardInfo(){
        this.youtubeVideoKeyList = [];
        this.playlistString = '';
        store.selectedCarouselCard.isOpened = false;
        store.selectedCarouselCard.playVideos = false;
      },
      PlayTrailers(){
        this.InitializeData();
        store.selectedCarouselCard.playVideos = true;
      },
      ReturnStart(){
        this.InitializeData();
        store.selectedCarouselCard.playVideos = false;
      }
    },
    components:{
      StarsComponent,
      YoutubeVideoComponent
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
        div:first-child{
          position: relative;
        }
        #cardInfoHero{
          height: 45vh;
        }
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
          cursor: pointer;
          &:hover{
            transform: scale(1.2);
          }
        }
        #stopTrailers{
          top: 1rem;
          right: 1rem;
        }
        #playTrailers{
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }
        #returnStart{
          top: 1rem;
          left: 1rem;
        }
      }
      #cardInfoComponentContent{
        overflow-y: auto;
        .adultOnly{
          border: 1px solid;
        }
        .flag{
          width: 30px;
          height: auto;
        }
      }
    }
  }
</style>
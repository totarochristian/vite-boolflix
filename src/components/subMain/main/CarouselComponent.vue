<template>
  <div class="carousel d-flex flex-column">
    <h4>{{ title }}</h4>
    <div class="carouselImages d-flex gap-3">
      <div class="carouselCard" v-for="cardData in carouselData" :class="{'d-none': !cardData.show}">
        <img :src="GetImageUrl(cardData.data)" :alt="cardData.data.title">
      </div>
      <button class="prev" @click="ShowNextPrev(-1)" :class="{'d-none': offset.start==0}">
        <i class="fs-4 fa-solid fa-chevron-left"></i>
      </button>
      <button class="next" @click="ShowNextPrev(1)" :class="{'d-none': offset.end==carouselData.length-1}">
        <i class="fs-4 fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
  import { store } from '../../../data/store';
  import axios from 'axios';
  export default {
    name: 'CarouselComponent',
    props: {
      endPoint: String,
      title: String
    },
    data(){
      return{
        store,
        offset: {
          start: 0,
          end: 8
        },
        carouselData: []
      }
    },
    methods:{
      GetCarouselCardsData(){
        let url = store.apiSettings.baseUrl + this.endPoint + '?api_key=' + store.apiSettings.apiKey + '&language=it';
        axios.get(url).then((res) => {
             console.log(res.data.results);
             res.data.results.forEach((data,index)=>{
              this.carouselData.push({ data: data, show: index < 9 ? true : false});
             });
         }).catch((err)=>{
          console.log(err)
         }).finally(()=>{
          //eseguita sempre
          console.log(this.carouselData);
         });
      },
      GetImageUrl(data){
        let tmp = store.apiSettings.imageBaseUrl + data.poster_path;
        return tmp;
      },
      ShowNextPrev(direction){
        if(direction>0){
          this.offset.start = this.offset.end+1 < this.carouselData.length ? this.offset.start+1 : this.offset.start;
          this.offset.end = this.offset.end+1 < this.carouselData.length ? this.offset.end+1 : this.offset.end;
        }else if(direction<0){
          this.offset.start = this.offset.start-1 >= 0 ? this.offset.start-1 : this.offset.start;
          this.offset.end = this.offset.start-1 >= 0 ? this.offset.end-1 : this.offset.end;
        }
        this.carouselData.forEach((elem,index)=>{
          if(index>=this.offset.start && index<=this.offset.end)
            elem.show = true;
          else
            elem.show = false;
        })
      }
    },
    mounted(){
      this.GetCarouselCardsData();
    }
  }
</script>

<style lang="scss" scoped>
  .carousel{
    width: 100%;
    height: auto;
    padding: 1rem 0;
    .carouselImages{
      width: 100%;
      height: 30vh;
      position: relative;
      &:hover .next,&:hover .prev{
        visibility: visible;
      }
      .next,.prev{
        visibility: hidden;
        width: 3rem;
        height: 100%;
        outline: none;
        border: none;
        position: absolute;
        top: 0;
        background-color: rgba(0, 0, 0, 0.507);
        color: white;
        &:hover{
          background-color: rgba(0, 0, 0, 0.61);
        }
      }
      .next{
        right: 0;
      }
      .prev{
        left: 0;
      }
    }
  }
  .carouselCard{
    width: calc(100% / 9);
    height: 100%;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
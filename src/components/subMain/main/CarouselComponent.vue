<template>
  <div ref="myElement" class="carousel d-flex flex-column">
    <h4>{{ title }}</h4>
    <div class="carouselImages d-flex justify-content-center gap-3">
      <CarouselCardComponent v-for="cardData in carouselData" :card-data="cardData"/>
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
  import CarouselCardComponent from './CarouselCardComponent.vue';
  import { store } from '../../../data/store';
  import axios from 'axios';
  export default {
    name: "CarouselComponent",
    props: {
        endPoint: String,
        title: String,
        languageIndex: Number
    },
    data() {
        return {
            store,
            offset: {
                start: 0,
                end: 0
            },
            carouselData: []
        }
    },
    watch:{
      languageIndex: function(val){
        //When the user change the language in the settings, the carousel data will be updated with the watcher of the language index
        this.GetCarouselCardsData();
      }
    },
    methods: {
        GetCarouselCardsData() {
            let url = store.apiSettings.baseUrl + this.endPoint + "?api_key=" + store.apiSettings.apiKey + "&language=" + store.settings.languages[store.settings.currentLanguageIndex].id;
            axios.get(url).then((res) => {
                //reset the carousel data array
                this.carouselData = [];
                //for each data retrieved by the api, add the element in the carousel data, fixing some data problems
                res.data.results.forEach((data, index) => {
                  data.title = data.title ? data.title : (data.name ? data.name : store.settings.languages[store.settings.currentLanguageIndex].errors[0]);
                  data.overview = data.overview ? data.overview : store.settings.languages[store.settings.currentLanguageIndex].errors[1];
                  this.carouselData.push({ data: data, show: index < 9 ? true : false });
                });
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                //code to execute ever
            });
        },
        ShowNextPrev(direction) {
            if (direction > 0) {
                this.offset.start = this.offset.end + 1 < this.carouselData.length ? this.offset.start + 1 : this.offset.start;
                this.offset.end = this.offset.end + 1 < this.carouselData.length ? this.offset.end + 1 : this.offset.end;
            }
            else if (direction < 0) {
                this.offset.end = this.offset.start - 1 >= 0 ? this.offset.end - 1 : this.offset.end;
                this.offset.start = this.offset.start - 1 >= 0 ? this.offset.start - 1 : this.offset.start;
            }
            this.carouselData.forEach((elem, index) => {
                if (index >= this.offset.start && index <= this.offset.end)
                    elem.show = true;
                else
                    elem.show = false;
            });
        },
        ScreenSizeChanged(){
          const element = this.$refs.myElement;
          if(element && element.offsetWidth){
            const width = element.offsetWidth;
            let sizeOneCard = 192;
            let numOfElementsToShow = Math.trunc(width / sizeOneCard);
            let tmpNewEnd = this.offset.start + numOfElementsToShow;
            this.offset.start = tmpNewEnd < this.carouselData.length ? this.offset.start : (this.carouselData.length - 2 - numOfElementsToShow >= 0 ? this.carouselData.length - numOfElementsToShow : 0);
            this.offset.end = this.offset.start + numOfElementsToShow - 1;
            this.ShowNextPrev(0);
          }
        }
    },
    mounted() {
      this.GetCarouselCardsData();
    },
    updated(){
      this.ScreenSizeChanged();
    },
    components: { CarouselCardComponent },
    created() {
      window.addEventListener("resize", this.ScreenSizeChanged);
    },
    destroyed() {
      window.removeEventListener("resize", this.ScreenSizeChanged);
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
      height: 290px;
      position: relative;
      overflow-x: hidden;
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
</style>
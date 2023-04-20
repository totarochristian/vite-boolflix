<template>
  <div class="matrixarousel d-flex flex-column">
    <h4>{{ title }}</h4>
    <div class="matrixImages d-flex justify-content-center align-items-center flex-wrap gap-3">
      <CarouselCardComponent v-for="cardData in carouselData" :card-data="cardData"/>
    </div>
  </div>
</template>

<script>
  import CarouselCardComponent from './CarouselCardComponent.vue';
  import { store } from '../../../data/store';
  import axios from 'axios';
  export default {
    name: 'MatrixComponent',
    props: {
        endPoint: String,
        title: String,
        languageIndex: Number,
        searchText: String,
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
      },
      searchText: function(val){
        //When the user change the search text in the settings, the matrix data will be updated with the watcher of the searchText
        this.GetCarouselCardsData();
      }
    },
    methods: {
        GetCarouselCardsData() {
            let url = store.apiSettings.baseUrl + this.endPoint + "?api_key=" + store.apiSettings.apiKey + "&language=" + store.settings.languages[store.settings.currentLanguageIndex].id;
            if(this.searchText)
              url+="&query="+this.searchText;
            axios.get(url).then((res) => {
                //reset the carousel data array
                this.carouselData = [];
                //for each data retrieved by the api, add the element in the carousel data, fixing some data problems
                res.data.results.forEach((data, index) => {
                  data.title = data.title ? data.title : (data.name ? data.name : store.settings.languages[store.settings.currentLanguageIndex].errors[0]);
                  data.overview = data.overview ? data.overview : store.settings.languages[store.settings.currentLanguageIndex].errors[1];
                  this.carouselData.push({ data: data, show: true });
                });
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                //code to execute ever
            });
        }
    },
    mounted() {
      this.GetCarouselCardsData();
    },
    components: { CarouselCardComponent }
  }
</script>

<style lang="scss" scoped>
  .matrixCarousel{
    width: 100%;
    height: auto;
    padding: 1rem 0;
    .matrixImages{
      width: 100%;
      height: 100%;
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
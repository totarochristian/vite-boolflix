<template>
  <YoutubeVideoComponent :videoKey="youtubeVideoKeyList[0]" :playlist="playlistString"/>
</template>

<script>
  import YoutubeVideoComponent from '../general/YoutubeVideoComponent.vue';
  import { store } from '../../../data/store';
  import axios from 'axios';
  export default {
    name: 'HeroComponent',
    components:{
      YoutubeVideoComponent
    },
    data(){
      return{
        moviesIdList: [],
        youtubeVideoKeyList: [],
        playlistString: ''
      }
    },
    props:{
      languageIndex: Number
    },
    watch:{
      languageIndex: function(val){
        //When the user change the language in the settings, the hero data will be updated with the watcher of the language index
        this.InitializeData();
      }
    },
    methods: {
      InitializeData(){
        let url = store.apiSettings.baseUrl + store.apiSettings.endPoints.film.popular + "?api_key=" + store.apiSettings.apiKey + "&language=" + store.settings.languages[store.settings.currentLanguageIndex].id;
        axios.get(url).then((res) => {
            this.moviesIdList = [];
            //for each data retrieved by the api, add the id in the list of movies id
            res.data.results.forEach((data) => {
              this.moviesIdList.push(data.id);
            });
            this.youtubeVideoKeyList = [];
            this.playlistString = '';
            this.moviesIdList.forEach((movieId)=>{
              let url = store.apiSettings.baseUrl + store.apiSettings.endPoints.film.base + movieId + "/videos?api_key=" + store.apiSettings.apiKey + "&language=" + store.settings.languages[store.settings.currentLanguageIndex].id;
              axios.get(url).then((res) => {
                console.log(res.data);
                  //for each data retrieved by the api, add the first key of a teaser or trailer in the list of youtube video key
                  for(let i=0; i<res.data.results.length; i++){
                    if(res.data.results[i].type=="Teaser" || res.data.results[i].type=="Trailer"){
                      this.youtubeVideoKeyList.push(res.data.results[i].key);
                      this.playlistString += this.playlistString ? "," + res.data.results[i].key : res.data.results[i].key;
                      break;
                    }
                  }
              }).catch((err) => {
                  console.log(err);
              }).finally(() => {
                  //code to execute ever
              });
            });
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            //code to execute ever
        });
      }
    },
    mounted(){
      this.InitializeData();
    }
  }
</script>

<style lang="scss" scoped>

</style>
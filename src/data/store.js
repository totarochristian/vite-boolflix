import { reactive } from 'vue';

export const store = reactive({
  settings: {
    languages: [
      {
        id: "it",
        menu: ["Home","Film","Serie TV","In arrivo","Popolari","Più votate"],
        search: "Cerca",
        carouselsTitles: ["Film popolari","Film più votati","FIlm al cinema","Film in arrivo","Serie TV popolari","Serie TV più votate","Serie TV oggi in onda"]
      },
      {
        id: "en-US",
        menu: ["Home","Film","TV series","Upcoming","Popular","Top rated"],
        search: "Search",
        carouselsTitles: ["Popular movies","Top rated movies","Now playing movies","Upcoming movies","Popular TV shows","Top rated TV shows","TV shows airing today"]
      }
    ],
    currentLanguageIndex: 1,
    currentMenuSectionIndexOpened: 0
  },
  apiSettings: {
    apiKey: 'd93c8fdeed5c57d0324a3c09acc8dd75',
    baseUrl: 'https://api.themoviedb.org/3/',
    imageBaseUrl: 'https://image.tmdb.org/t/p/original',
    endPoints:{
      film: {
        popular: 'movie/popular/',
        topRated: 'movie/top_rated/',
        nowPlaying: 'movie/now_playing',
        upcoming: 'movie/upcoming'
      },
      tv: {
        popular: 'tv/popular/',
        topRated: 'tv/top_rated/',
        airingToday: 'tv/airing_today'
      }
    }
  },
  menuSettings: {
    isSectionsOpened: false,
    isSearchBarOpened: false,
    textToSearch: '',
    sections: []
  },
  selectedCarouselCard: {
    isOpened: false,
    carouselCardData: null
  }
});
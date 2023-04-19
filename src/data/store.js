import { reactive } from 'vue';

export const store = reactive({
  apiSettings: {
    apiKey: 'd93c8fdeed5c57d0324a3c09acc8dd75',
    baseUrl: 'https://api.themoviedb.org/3/',
    imageBaseUrl: 'https://image.tmdb.org/t/p/original',
    endPoints:{
      popular: 'movie/popular/',
      topRated: 'movie/top_rated/',
      upcoming: 'movie/upcoming',
      nowPlaying: 'movie/now_playing',
      latest: 'movie/latest'
    }
  },
  menuSettings: {
    isSectionsOpened: false,
    isSearchBarOpened: false,
    textToSearch: '',
    sections: [
      {
        name: "Home",
        isActive: true
      },
      {
        name: "Film",
        isActive: false
      },
      {
        name: "Serie Tv",
        isActive: false
      },
      {
        name: "In arrivo",
        isActive: false
      },
      {
        name: "Popolari",
        isActive: false
      },
      {
        name: "Più votati",
        isActive: false
      }
    ]
  }
});
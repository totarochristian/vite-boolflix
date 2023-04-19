import { reactive } from 'vue';

export const store = reactive({
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
        name: "TV series",
        isActive: false
      },
      {
        name: "Upcoming",
        isActive: false
      },
      {
        name: "Popular",
        isActive: false
      },
      {
        name: "Top rated",
        isActive: false
      }
    ]
  },
  selectedCarouselCard: {
    isOpened: false,
    carouselCardData: null
  }
});
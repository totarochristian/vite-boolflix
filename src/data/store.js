import { reactive } from 'vue';

export const store = reactive({
  settings: {
    languages: [
      {
        id: "it",
        description: "italian",
        menu: ["Home","Film","Serie TV","In arrivo","Popolari","Più votate"],
        search: ["Cerca","Film","Serie TV","Inserisci un termine da cercare.","Nessun risultato per la tua ricerca di "],
        carouselsTitles: ["Film popolari","Film più votati","FIlm al cinema","Film in arrivo","Serie TV popolari","Serie TV più votate","Serie TV oggi in onda"],
        settings: ["Impostazioni","Seleziona lingua:"],
        errors: ["Titolo non trovato","Descrizione non trovata"]
      },
      {
        id: "en-US",
        description: "english",
        menu: ["Home","Movies","TV series","Upcoming","Popular","Top rated"],
        search: ["Search","Movies","TV series","Enter a search term.","No results for your search for "],
        carouselsTitles: ["Popular movies","Top rated movies","Now playing movies","Upcoming movies","Popular TV shows","Top rated TV shows","TV shows airing today"],
        settings: ["Settings","Select language:"],
        errors: ["Title not founded","Overview not founded"]
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
        upcoming: 'movie/upcoming',
        search: 'search/movie'
      },
      tv: {
        popular: 'tv/popular/',
        topRated: 'tv/top_rated/',
        airingToday: 'tv/airing_today',
        search: 'search/tv'
      }
    }
  },
  menuSettings: {
    isSettingsOpened: false,
    isSectionsOpened: false,
    isSearchBarOpened: false,
    textToSearch: ''
  },
  selectedCarouselCard: {
    isOpened: false,
    carouselCardData: null
  }
});
import { reactive } from 'vue';

export const store = reactive({
  apiSettings: {
    apiKey: 'd93c8fdeed5c57d0324a3c09acc8dd75',
    baseUrl: 'https://api.themoviedb.org/3/'
  },
  menuSettings: {
    isSearchBarOpened: true,
    textToSearch: '',
    sections: ["Home", "Film", "Serie Tv", "In arrivo", "Popolari", "Più votati"]
  }
});
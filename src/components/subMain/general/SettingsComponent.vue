<template>
  <div id="settingsClosingDiv" @click.self="store.menuSettings.isSettingsOpened = false">
    <div id="settingsComponent" class="col-11 col-md-8 col-lg-5 d-flex flex-column justify-content-start align-items-center">
      <div id="settingsComponentHeader" class="p-4 text-center">
        <i id="close" class="fs-3 fa-solid fa-xmark" @click="store.menuSettings.isSettingsOpened = false"></i>
        <div class="w-100 d-flex justify-content-center align-items-center gap-3">
          <i class="fs-4 fa-solid fa-sliders"></i>
          <h3>{{store.settings.languages[store.settings.currentLanguageIndex].settings[0]}}</h3>
        </div>
      </div>
      <div id="settingsComponentContent" class="p-4 d-flex flex-column justify-content-center align-items-center">
        <div class="w-100 p-2 d-flex gap-3 justify-content-center align-items-start flex-column">
          <div class="form-check d-flex gap-3 justify-content-center">
            <input class="form-check-input" type="checkbox" v-model="store.menuSettings.showMoreInfoInCarouselCard" id="showMoreInfoInCarouselCard">
            <label class="form-check-label" for="flexCheckChecked">
              <h5>{{store.settings.languages[store.settings.currentLanguageIndex].settings[2]}}</h5>
            </label>
          </div>
          <div class="d-flex gap-3 justify-content-center align-items-center">
            <h5>{{store.settings.languages[store.settings.currentLanguageIndex].settings[1]}}</h5>
            <select id="languageSelect" class="form-select" v-model="store.settings.currentLanguageIndex">
              <option v-for="(lang, index) in store.settings.languages" :selected="index == store.settings.currentLanguageIndex" :value="index">{{ lang.description }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { store } from '../../../data/store';
  export default {
    name: 'SettingsComponent',
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../../assets/styles/partial/variables' as *;
  #settingsClosingDiv{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 2000;
    overflow: hidden;
    #settingsComponent{
      max-width: 530px;
      height: 60%;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: $sectionsBackgroundColor;
      color: $bodyColor;
      #settingsComponentHeader{
        width: 100%;
        position: relative;
        #close{
          position: absolute;
          top: 1rem;
          right: 1rem;
          cursor: pointer;
          &:hover{
            transform: scale(1.2);
          }
        }
      }
      #settingsComponentContent{
        width: 100%;
        select{
          width: auto;
        }
      }
    }
  }
</style>
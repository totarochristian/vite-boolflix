<template>
  <TopBarComponent />
  <MainComponent />
</template>

<script>
  import TopBarComponent from './components/main/TopBarComponent.vue';
  import MainComponent from './components/main/MainComponent.vue';
  export default {
    name: 'App',
    components: {
      TopBarComponent,
      MainComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>

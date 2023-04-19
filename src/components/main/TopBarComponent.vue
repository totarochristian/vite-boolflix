<template>
  <header>
    <MenuComponent />
  </header>
</template>

<script>
  import MenuComponent from '../subMain/MenuComponent.vue';
  export default {
    name: 'TopBarComponent',
    components: {
      MenuComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>
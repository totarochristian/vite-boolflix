<template>
  <div class="d-flex gap-2">
    <i class="fa-solid fa-star" v-for="num in Math.trunc(voteAverage)"></i>
    <i class="fa-solid fa-star-half-stroke" v-if="voteAverage % 1 >= 0.5"></i>
  </div>
</template>

<script>
  export default {
    name: 'StarsComponent',
    props:{
      voteAverage: Number
    }
  }
</script>

<style lang="scss" scoped>

</style>
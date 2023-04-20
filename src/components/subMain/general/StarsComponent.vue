<template>
  <div class="d-flex gap-2">
    <i class="fa-solid fa-star" v-for="num in filledStar"></i>
    <i class="fa-solid fa-star-half-stroke" v-if="halfStar"></i>
    <i class="fa-regular fa-star" v-for="num in emptyStar"></i>
  </div>
</template>

<script>
  export default {
    name: 'StarsComponent',
    props:{
      voteAverage: Number
    },
    data(){
      return{
        filledStar: 0,
        halfStar: 0,
        emptyStar: 0
      }
    },
    mounted(){
      this.filledStar = Math.trunc(this.voteAverage);
      this.halfStar = this.voteAverage % 1 >= 0.5;
      this.emptyStar = 10 - this.filledStar - this.halfStar;
    }
  }
</script>

<style lang="scss" scoped>

</style>
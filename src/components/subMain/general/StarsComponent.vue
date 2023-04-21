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
        maxStarsToDisplay: 5,
        filledStar: 0,
        halfStar: 0,
        emptyStar: 0
      }
    },
    methods:{
      DefineNumberOfStars(){
        let voteTemp = (this.voteAverage * this.maxStarsToDisplay) / 10;
        this.filledStar = Math.trunc(voteTemp);
        this.halfStar = voteTemp % 1 >= 0.5;
        this.emptyStar = this.maxStarsToDisplay - this.filledStar - this.halfStar;
      }
    },
    updated(){
      this.DefineNumberOfStars();
    },
    mounted(){
      this.DefineNumberOfStars();
    }
  }
</script>

<style lang="scss" scoped>

</style>
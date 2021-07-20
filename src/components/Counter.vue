<template>
     <div class="card_footer__like">
             <img
             @click="counterUp"
             src="../assets/img/Vector.svg" alt="">
             <p>{{counter}}</p>
    </div>
</template>

<script>
export default {
  name: 'Counter',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    counterUp () {
      return this.counter++
    }
  }
}
</script>

<style lang="scss">
.card_footer__like{
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        margin-right: 5px;

    }
}

</style>

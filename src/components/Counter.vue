<template>
     <div>
       <div class="card_footer__like">
               <img
               @click="counterUp"
               src="../assets/img/Vector.svg" alt="">
               <p>{{counter}}</p>
      </div>
     </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Counter',
  data () {
    return {
      counter: this.$store.state.posts.data.like

    }
  },
  methods: {
    counterUp () {
      return this.counter++
    },
    ...mapActions([
      'GET_POSTS'
    ])
  },
  computed: {
    ...mapGetters([
      'POSTS'
    ])
  },
  mounted () {
    this.GET_POSTS()
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

<template>
 <div>
   <div class="container">
    <div class="card-container">
       <div
       v-for="post in POSTS"
       :key="post.id"
       class="card">
         <div class="card_logo">
           <div class="card_logo__image">
             <img src="../assets/image_23.png" alt="">
           </div>
           <div class="card_logo__name">
             <p>#{{post.tag}}</p>
           </div>
         </div>
         <div class="card_title">
           <p>{{post.name}}</p>
         </div>
         <div class="card_subtitle">
           <p>{{post.description}}</p>
         </div>
         <div class="card_footer">
           <div class="card_footer__date">
             <p>{{post.date}}</p>
           </div>
           <Counter/>
         </div>
       </div>
    </div>
   </div>
 </div>
</template>

<script>
import Counter from '../components/Counter.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  components: {
    Counter
  },
  data () {
    return {

    }
  },

  methods: {
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

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
*{
padding: 0;
margin: 0;
border: 0;
}
html,body{
height: 100%;
width: 100%;
font-size: 100%;
line-height: 1;
font-size: 14px;
-ms-text-size-adjust: 100%;
-moz-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}

.container {
  max-width: 1920px;
  height: 1548px;
  margin: 0 auto;
  // border: 1px solid black;
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(450px,1fr));
  // grid-template-rows: repeat(auto-fit, minmax(450px,1fr));
  position: relative;

  padding: 0;
  .card-container{
    max-width: 1920px;
    height: 1100px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px,1fr));
    grid-template-rows: 450px 450px;
    position: relative;
    grid-row-gap: 20px;
    grid-column-gap: 15px;
    padding: 0;
    margin: 182px 30px;
    // border: 1px solid black;
    .card{
    position: relative;
    padding: 0;
    width: 450px;
    height: 450px;
     border: 1px solid black;
    &_logo{
      &__name{
        width: 102px;
        height: 33px;
        position: absolute;
        margin-left: 18px;
        top: 208px;
        background: rgba(141, 190, 80, 0.5);
        border-radius: 4px;
        p{
          position: relative;
          top: 4px;
          color: white;
          font-family: 'Ubuntu';
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 22px;
        }
      }
      &__image{
        width: 450px;
        height: 250px;
        img{
          margin: 0 10px;
          position: absolute;
          top: 0;
          left: 0;

          object-fit: cover;

        }

      }
    }
    .card_title{
      padding: 0;
      margin: 21px 18px;
      p{
        text-align: left;
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #000000;
      }
    }
    .card_subtitle{
      padding: 0;
      margin: 28px 18px ;
      p{
        text-align: left;
        font-family: Ubuntu;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 22px;
        color: #666565;
      }
    }
    .card_footer{
      margin: -5px 18px;

      height: 30px;
      // border: 1px solid black;
      display: flex;
      justify-content: space-between;
      &__date{

        color:black;
        // border: 1px solid black;
        p{
          font-family: Ubuntu;
          font-style: italic;
          font-weight: normal;
          font-size: 13px;
          line-height: 22px;
          color: #909599;
        }
      }

    }
    }
  }

}

</style>

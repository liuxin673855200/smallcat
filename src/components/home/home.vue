<template>
<div>
        <HomeheadComponent></HomeheadComponent>
      <FootComponent></FootComponent>
      </div>
</template>

<script>
import BannerComponent from '../common/banner';
import HomeheadComponent from './homehead';
import FootComponent from '../common/foot';
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    BannerComponent,
    HomeheadComponent,
    FootComponent,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 @import '../../assets/css/bootstrap.css';
  @import '../../assets/css/style.css';
    @import '../../assets/css/swipebox.css';
</style>
</style>

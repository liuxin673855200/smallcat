<template>
  <div>
        <AboutheadComponent></AboutheadComponent>
        <AbouttwoComponent></AbouttwoComponent>
         <FootComponent></FootComponent>
        <CopyComponent></CopyComponent>
   </div>
</template>

<script>
// import BannerComponent from '../common/banner';
import AboutheadComponent from './abouthead';
import AbouttwoComponent from './abouttwo';
import CopyComponent from '../common/copy';
import FootComponent from '../common/foot';
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    AboutheadComponent,
    AbouttwoComponent,
    CopyComponent,
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

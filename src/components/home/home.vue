<template>
  <div>
        <HomeheadComponent></HomeheadComponent>
        <AboutComponent> </AboutComponent>
        <CopyrightsComponent></CopyrightsComponent>
        <GalleryComponent></GalleryComponent>
        <BlogComponent></BlogComponent>
        <CfamilyComponent></CfamilyComponent>

        <FootComponent></FootComponent>
        <CopyComponent></CopyComponent>
   </div>
</template>

<script>
// import BannerComponent from '../common/banner';
import HomeheadComponent from './homehead';
import AboutComponent from './about';

import CopyrightsComponent from './copyrights';
import GalleryComponent from './gallery';
import BlogComponent from './blog';
import CfamilyComponent from './c-family';
import CopyComponent from '../common/copy';
import FootComponent from '../common/foot';
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    // BannerComponent,
    HomeheadComponent,
    AboutComponent,
    CopyrightsComponent,
    GalleryComponent,
    BlogComponent,
    CfamilyComponent,
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
</style>

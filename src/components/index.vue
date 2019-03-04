
<template>
<div>
  <HeadComponent></HeadComponent>
	<BannerComponent></BannerComponent>
	<FootComponent></FootComponent>
</div>
</template>

<script>
import BannerComponent from './common/banner';
import HeadComponent from './common/foot';
import FootComponent from './common/foot';
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    BannerComponent,
    HeadComponent,
    FootComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

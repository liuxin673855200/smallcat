<template>
  <div id="home" class="header">
	<HeadComponent></HeadComponent>
  <BannerComponent></BannerComponent>
		</div>
</template>
<script>
import HeadComponent from '../common/head';
import BannerComponent from '../common/banner';
export default {
data:function(){
  return{

  }
},
components:{
  HeadComponent,
  BannerComponent
}
}
</script>

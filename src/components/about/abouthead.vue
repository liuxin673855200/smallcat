<template>
 <div id="home" class="header">
<HeadComponent headIndex=1></HeadComponent>
<BannertwoComponent></BannertwoComponent>
  </div>
</template>
<script>
import HeadComponent from '../common/head'
import BannertwoComponent from './bannertwo'
export default {
  data:function(){
    return{

    }
  },
      components:{
      HeadComponent,
      BannertwoComponent
    }
}
</script>

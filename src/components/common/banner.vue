<template>
	<div class="banner">
        <div class="container">
          <div class="nbs-flexisel-container" @mouseenter="stopPlay"  @mouseleave="autoPlay(3000)">
                <div class="nbs-flexisel-inner">
                    <ul :style="ulSize">
                        <!-- <li class="nbs-flexisel-item" :style="imgSize">
                          <div class="biseller-column">
                          <a class="lightbox" href="#goofy">
                                  <img :src="imgArr[currentIndex==0?imgArr.length-1:currentIndex-1]"/>
                                </a>
                                <div class="lightbox-target" id="goofy">
                                    <img/>
                                  <a class="lightbox-close" href="#"> </a>

                                  <div class="clearfix"> </div>
                                </div>
                          </div>
                        </li> -->
                        <li class="nbs-flexisel-item" v-for="item in newArr" :style="imgSize">
                          <div class="biseller-column">
                          <a class="lightbox" href="#goofy">
                                  <img :src="item"/>
                                </a>
                                <div class="lightbox-target" id="goofy">
                                    <img :src="item"/>
                                  <a class="lightbox-close" href="#"> </a>

                                  <div class="clearfix"> </div>
                                </div>
                          </div>
                        </li>
                           <!-- <li class="nbs-flexisel-item" :style="imgSize">
                              <div class="biseller-column">
                              <a class="lightbox" href="#goofy">
                                      <img :src="imgArr[currentIndex==(imgArr.length-1)?0:currentIndex+1]"/>
                                    </a>
                                    <div class="lightbox-target" id="goofy">
                                        <img/>
                                      <a class="lightbox-close" href="#"> </a>

                                      <div class="clearfix"> </div>
                                    </div>
                              </div>
                            </li> -->
                    </ul>
              </div>
              <div class="nbs-flexisel-nav-left" :style="currentBtnLeft" @click="turnLeft"></div>
              <div class="nbs-flexisel-nav-right" :style="currentBtnRight" @click="turnRight"></div>
          </div>
        </div>
			</div>
</template>
<script>
export default {
  data:function(){
    return{
        timer:{},
        itemWidth:"900px",
        imgArr:[require('../../assets/images/s1.jpg'),require('../../assets/images/s2.jpg'),require('../../assets/images/s3.jpg')],
        newArr:[],
        imgSize:{width:"300px",height:"auto"},
        ulSize:{width:"3000px",height:"auto",transition:'.6s',transform:'translateX(0px)'},
        currentIndex:0,
        bannedClick:0,
        currentBtnLeft:{
          top:'150px',
          backgroundImage: "url(" + require("../../assets/images/arrows.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "-38px 0px"
          },
              currentBtnRight:{
          top:'150px',
          backgroundImage: "url(" + require("../../assets/images/arrows.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "-1px  0px"
          }
    }
  },
  created:function(){

  },
  beforeMount:function(){
this.newArr = this.imgArr.concat(this.imgArr)

  },
  mounted:function(){
    this.getBtnTop();
    let that=this;
       window.onresize = () => {
         return(()=>{
that.getBtnTop()
         })()
       }

       this.autoPlay(3000)
  },
    methods:{
        getItemWidth:function(){
          var itemWidth=document.querySelector(".nbs-flexisel-container").offsetWidth/3+"px";
             this.itemWidth=itemWidth;
       },
        getImgWidth:function(){
                this.$set(this.imgSize,"width",this.itemWidth);
        },
        getUlWidth:function(){
           this.getItemWidth()
           this.getImgWidth();
           let count=this.imgArr.length
            this.$set(this.ulSize,"width",parseFloat(this.itemWidth,2)*(count*2)+"px");
             this.$set(this.ulSize,"transform","translateX(-"+(this.imgSize.width)+")");
        },
        getBtnTop:function(){
            this.getUlWidth();
           let ImgHeight=parseInt(this.imgSize.width)*1.5;
           let top=(ImgHeight/2-35)+"px";
           this.$set(this.currentBtnLeft,"top",top);
            this.$set(this.currentBtnRight,"top",top);
        },
        setBannerProgress:function(num){//设置banner当前在第几步
            var i=num||0;

        },
        move(i){//i为1 或者-1    i为正向
        this.bannedClick==1
this.$set(this.ulSize,'transition',"0.6s");
          if(i){
            // 应当分为两步   1是让ul向左平移一个imgWidth     第二步操作数组，并还原ul
             this.$set(this.ulSize,'transform','translateX(-'+parseInt(this.imgSize.width)*2+'px)');
          let timer=setTimeout(()=>{
     this.$set(this.ulSize,'transition','0s');
        this.$set(this.ulSize,"transform","translateX(-"+(this.imgSize.width)+")");
        this.operateArr(0)
         this.currentIndex=this.changeCurrentIndex(0)
          this.bannedClick==0
            clearTimeout(timer)
          },600)
          }else{

             this.$set(this.ulSize,'transform','translateX(0px)');
             let timer=setTimeout(()=>{
                 this.$set(this.ulSize,'transition','0s');
                this.$set(this.ulSize,"transform","translateX(-"+(this.imgSize.width)+")");
            this.operateArr(1)
            this.currentIndex=this.changeCurrentIndex(1)
          this.bannedClick==0
            clearTimeout(timer)
          },600)
          }
        },
        operateArr:function(i){//1:pop    unshift      0：shift   unpop
        let arr=this.newArr;
          if(i){
                let item=arr.pop()
                arr.unshift(item)
          }else{
            let item=arr.shift()
                arr.push(item)
          }
          this.newArr=arr

        },
        changeCurrentIndex(i){
          let index=this.currentIndex;
            if(i){
                return (index+1)==this.imgArr.length?0:(index+1)

            }else{
              return (index-1)==-1?this.imgArr.length-1:(index-1)
            }
        },
        turnLeft:function(){
          if(this.bannedClick)
          return
          this.move(1)
        },
         turnRight:function(){
            if(this.bannedClick)
          return
        this.move(0)
        },
        autoPlay:function(time){
          this.timer=setInterval(()=>{
              this.move(1)
          },3000)
        },
        stopPlay:function(){
              clearInterval(this.timer)
        }
    }
}
</script>
<style scoped>

</style>

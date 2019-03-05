<template>
 	<div class="header-bottom">
			<div class="container">
				<div class="logo">
					 <router-link to="/index"><h1>Gat<span>o</span></h1></router-link>
				</div>
				<span class="menu"></span>
				<div class="top-menu">
					<ul>
					<nav>
            <li v-for="(item,index) in headArr">
                <router-link  :to="item.link"   :class="{active:(index==headIndex)}">{{item.title}}</router-link>
            </li>
					</nav>
					</ul>
				</div>
			<!-- script for menu -->
				<div class="clearfix"></div>
			</div>
		</div>
</template>
<script>
export default {
    data:function(){
      return {
          headArr:[
            {title:'Home',link:"/index"},
            {title:'About',link:"/about"},
            {title:'SERVICES',link:"/index"},
            {title:'PORTFOLIO',link:"/index"},
            {title:'BLOG',link:"/index"},
            {title:'Contact',link:"/index"},
          ]
      }
    },
    props:{
      headIndex:String,
    }
}
</script>

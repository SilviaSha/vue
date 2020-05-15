<template>
  <div>
    <p>路由ID:{{$route.query.id}}</p>
    <p>路由标题:{{$route.query.title}}</p>
    <div>
      <p>
        router-link:
        <router-link to="/tabbar/index">》》首页</router-link>
      </p>
      <p>query 传递参数：</p>
      <router-link :to="{path:'/tabbar/index',query:{id:'test',title:'this is title'}}">》》首页</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
    }
  },
  mounted: function () {
    console.log('index===mounted-$route', this.$route)
    console.log('index===mounted-$route.query', this.$route.query)
    console.log('index===mounted-$router', this.$router)
  }
}
</script>

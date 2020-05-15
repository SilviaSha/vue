<template>
  <div>
    <!-- vue-router配置子路由router-view -->
    <p>名称：{{this.$router.name}}</p>
    <p>名称：{{$router.name}}</p>
    <p>名称：{{$route.name}}</p>
    <p>名称：{{this.$route.name}}</p>
    <div>
      <router-view></router-view>
    </div>
    <button @click="changeClick">切换</button>
  </div>
</template>

<script>
export default {
  name: 'my',
  mounted: function () {
    console.log('===mounted')
    console.log('===this.$router', this.$router)
    // console.log('===$router', $router)
    // console.log('===$route', $route)
    console.log('===this.$route', this.$route)
  },
  methods: {
    back: function (i) {
      this.$router.go(i)
    },
    changeClick: function () {
      console.log('===this.$route.path:', this.$route.path)
      if (this.$route.path === '/tabbar/index') {
        this.$router.replace({ path: '/tabbar/my' })
      } else {
        this.$router.replace({ path: '/tabbar/index' })
      }
      console.log(this.$route.path)
    }
  }
}
</script>

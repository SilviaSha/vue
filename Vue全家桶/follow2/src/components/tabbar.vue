<template>
  <div>
    <router-view></router-view>
    <ul class="panel-nav">
      <li
        v-for="(item,index) in navList"
        :key="index"
        @click="tabHref(index)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'tabbar',
  data () {
    return {
      navList: [{
        name: '首页',
        path: '/tabbar/index'
      }, {
        name: '我',
        path: '/tabbar/my'
      }]
    }
  },
  methods: {
    tabHref: function (i) {
      // this.$router.push('index')
      this.$router.push({ path: this.navList[i].path, query: { id: i, title: this.navList[i].name } })
    }
  }
}
</script>

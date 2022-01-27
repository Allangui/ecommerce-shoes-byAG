<template>
  <Topbar class="topbar"  />
  <router-view></router-view>
</template>
<script>

import Topbar from "./components/Topbar.vue"

export default {
  components: {
    Topbar : Topbar,
  },
  data() {
    return {
    quantity: 0
    }
  },
  methods: {

  },
}
</script>
<style>
body{
margin:0;
box-sizing: border-box;
background-color: hsl(0, 0%, 100%);
}
#app {
font-family: 'Kumbh Sans', sans-serif;
font-size : 16px;
color: hsl(220, 13%, 13%)
}
a{
  text-decoration: none;
  color: hsl(220, 13%, 13%)

}
.topbar{
margin-bottom: 50px;
}

</style>

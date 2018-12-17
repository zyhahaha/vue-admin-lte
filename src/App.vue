<template>
  <div id="app" class="wrapper">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <!-- Main Header -->
    <admin-header></admin-header>
    <!-- Left side column. contains the logo and sidebar -->
    <main-sidebar></main-sidebar>

    <!-- Content Wrapper. Contains page content -->
    <!-- <content-wrapper></content-wrapper> -->
    <router-view/>
    <!-- /.content-wrapper -->
    <!-- Main Footer -->
    <main-footer></main-footer>

    <!-- Control Sidebar -->
    <control-sidebar></control-sidebar>
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
    immediately after the control sidebar-->
    <div class="control-sidebar-bg"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import contentWrapper from '@/components/content-wrapper/content.vue';
import adminHeader from '@/components/main-header/header.vue';
import mainSidebar from '@/components/main-sidebar/sidebar.vue';
import mainFooter from '@/components/main-footer/footer.vue';
import controlSidebar from '@/components/control-sidebar/sidebar.vue'

export default {
  name: 'Admin',
  components: {
    // contentWrapper,
    adminHeader,
    mainSidebar,
    mainFooter,
    controlSidebar
  },
  created() {}
};
</script>

<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>

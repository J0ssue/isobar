<template>
  <div id="app">
    <home-navbar></home-navbar>
    <router-view />
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeNavbar from "./components/shared/HomeNavbar";
import HomeFooter from "./components/shared/HomeFooter";
export default {
  name: "App",
  components: {
    HomeNavbar,
    HomeFooter,
  },
};
</script>

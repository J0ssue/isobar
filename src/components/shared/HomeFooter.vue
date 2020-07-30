<template>
  <footer class="home-footer">
    <div class="container">
      <div class="home-footer__row">
        <div class="home-footer__column">
          <img style="width: 100px;" :src="logo" alt="logo image" />
        </div>
        <div class="home-footer__column">
          <font-awesome-icon :icon="['fab', 'instagram']" />
          <font-awesome-icon :icon="['fab', 'twitter']" />
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "HomeFooter",
  data() {
    return {
      logo: require("@/assets/images/test.jpg"),
    };
  },
};
</script>

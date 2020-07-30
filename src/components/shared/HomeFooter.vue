<template>
  <footer class="home-footer">
    <div class="container">
      <div class="home-footer__row">
        <div class="home-footer__column">
          <router-link class="home-nav__logo" to="#">
            <img :src="logo" alt="logo image" />
            <span>brand</span>
          </router-link>
        </div>
        <div class="home-footer__column">
          <a
            href="https://www.twitter.com"
            target="_blank"
            class="home-footer__link"
          >
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            class="home-footer__link"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            class="home-footer__link"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
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

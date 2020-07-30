<template>
  <nav class="home-nav">
    <div class="container">
      <div class="home-nav__row">
        <div class="home-nav__column">
          <router-link class="home-nav__logo" to="#">
            <img :src="navbar.logo" alt="test image" />
            <span>brand</span>
          </router-link>
        </div>
        <div class="home-nav__column">
          <ul class="home-nav__menu-list">
            <li
              class="home-nav__menu-list-item"
              :class="{
                'home-nav--menu-list-item-mr': i !== navbar.menu.length - 1,
              }"
              v-for="(link, i) in navbar.menu"
              :key="i"
            >
              <router-link class="home-nav__menu-list-link" to="#">{{
                link.name
              }}</router-link>
            </li>
            <router-link class="home-nav__menu-shopping-cart-container" to="#">
              <div class="home-nav__menu-shopping-cart">
                <font-awesome-icon icon="shopping-cart" />
              </div>
              <div class="home-nav__menu-shopping-cart-qty">0</div>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import navbar from "@/helpers/navbar.js";
export default {
  name: "HomeNavbar",
  data() {
    return {
      navbar,
    };
  },
};
</script>

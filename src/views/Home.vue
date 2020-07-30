<template>
  <div class="home">
    <home-hero :hero="heroData" />
    <home-support :support-data="supportData" />
    <home-statement :statement-data="statementData" />
    <home-products :products-data="productsData" />
    <home-shop-local :local-data="localData" />
  </div>
</template>

<script>
import HomeHero from "@/components/home/HomeHero";
import HomeSupport from "@/components/home/HomeSupport";
import HomeStatement from "@/components/home/HomeStatement";
import HomeProducts from "@/components/home/HomeProducts";
import HomeShopLocal from "@/components/home/HomeShopLocal";

import heroData from "@/helpers/hero.js";
import supportData from "@/helpers/support.js";
import statementData from "@/helpers/statement.js";
import productsData from "@/helpers/products.js";
import localData from "@/helpers/local.js";
export default {
  name: "Home",
  components: {
    HomeHero,
    HomeSupport,
    HomeStatement,
    HomeProducts,
    HomeShopLocal,
  },
  data() {
    return {
      heroData,
      supportData,
      statementData,
      productsData,
      localData,
    };
  },
};
</script>

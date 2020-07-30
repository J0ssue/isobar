<template>
  <section class="home-products container">
    <header class="home-products__header">
      <p class="home-products__uppertext">
        {{ productsData.header.uppertext }}
      </p>
      <h2>{{ productsData.header.title }}</h2>
    </header>
    <main class="home-products__row">
      <div
        class="home-products__column"
        v-for="(product, i) in productsData.products"
        :key="i"
      >
        <product-card :product="product" />
      </div>
    </main>
    <button>view all products</button>
  </section>
</template>

<script>
import ProductCard from "./ProductCard";
export default {
  name: "HomeProducts",
  props: ["productsData"],
  components: {
    ProductCard,
  },
};
</script>

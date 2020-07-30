<template>
  <div class="product-card">
    <header class="product-card__header">
      <img
        class="product-card__img"
        :src="product.featured_image"
        alt="product image"
      />
      <button v-if="product.sale" class="product-card__sale-btn">sale</button>
    </header>
    <main class="product-card__main">
      <p class="product-card__title font-roboto-light">{{ product.title }}</p>
      <p class="product-card__price font-roboto-medium">
        <b :class="{ 'product-card--price-spacing': product.sale }">{{
          "$ " + product.price + " USD"
        }}</b>
        <b
          v-if="product.sale"
          :class="{ 'product-card--price-previous': product.sale }"
          >{{ "$ " + product.sale_price + " USD" }}</b
        >
      </p>
      <button class="product-card__details-btn font-roboto-medium">
        details
      </button>
    </main>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
};
</script>

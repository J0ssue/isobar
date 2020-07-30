<template>
  <div class="product-card">
    <header class="product-card__header">
      <img
        style="width:300px"
        :src="product.featured_image"
        alt="product image"
      />
      <button v-if="product.sale" class="product-card__sale-btn">sale</button>
    </header>
    <main class="product-card__main">
      <p class="product-card__title">{{ product.title }}</p>
      <p class="product-card__price">
        <b>{{ product.price }}</b>
        <b v-if="product.sale">{{ product.sale_price }}</b>
      </p>
      <button class="product-card__details-btn">details</button>
    </main>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
};
</script>

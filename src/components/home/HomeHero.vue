<template>
  <header class="home-hero">
    <div class="container">
      <div class="home-hero__box">
        <h1 class="home-hero__title font-roboto-bold">{{ hero.title }}</h1>
        <p class="home-hero__description">{{ hero.description }}</p>
        <button class="home-hero__button font-roboto-bold">Shop Merch</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Hero",
  props: ["hero"],
};
</script>

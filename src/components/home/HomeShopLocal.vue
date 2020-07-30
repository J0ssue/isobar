<template>
  <section class="home-local container">
    <div class="home-local__image-container">
      <img
        class="home-local__featured-image"
        style="width:400px;"
        :src="localData.featured_image"
        alt="shop local image"
      />
    </div>
    <div class="home-local__description-container">
      <h2 class="home-local__description-title">
        {{ localData.title }}
      </h2>
      <p
        class="home-local__paragraph"
        v-for="(p, i) in localData.descriptions"
        :key="i"
      >
        {{ p }}
      </p>
      <p>--------</p>
      <p>
        <span v-for="(owner, i) in localData.owners" :key="i"
          >{{ owner }}
          <span v-if="i !== localData.owners.length - 1">{{ "&" }}</span></span
        >
      </p>
      <p>
        <b>{{ localData.company }}</b>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeShopLocal",
  props: ["localData"],
};
</script>

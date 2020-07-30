<template>
  <section class="home-local container">
    <div class="home-local__spacer"></div>
    <div class="home-local__image-container">
      <div>
        <img
          class="home-local__featured-image"
          :src="localData.featured_image"
          alt="shop local image"
        />
      </div>
    </div>
    <div class="home-local__description-container">
      <div class="home-local__description-content">
        <h2 class="home-local__description-title font-roboto-medium">
          {{ localData.title }}
        </h2>
        <p
          class="home-local__paragraph"
          v-for="(p, i) in localData.descriptions"
          :key="i"
        >
          {{ p }}
        </p>
        <p class="home-local__separator">--------</p>
        <p>
          <span v-for="(owner, i) in localData.owners" :key="i"
            >{{ owner }}
            <span
              v-if="i !== localData.owners.length - 1"
              class="home-local__horizontal-separator"
              >{{ "&" }}</span
            ></span
          >
        </p>
        <p>
          <b class="font-roboto-medium">{{ localData.company }}</b>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeShopLocal",
  props: ["localData"],
};
</script>

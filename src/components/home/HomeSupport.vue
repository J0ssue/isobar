<template>
  <section class="home-support container">
    <header class="home-support__row">
      <div class="home-suppoert__column">
        <p class="home-suppoert__upper-text">
          {{ supportData.header.upper_text }}
        </p>
        <h2 class="home-suppoert__title">{{ supportData.header.title }}</h2>
      </div>
      <div class="home-suppoert__column">
        <p class="home-support__description">
          {{ supportData.header.description }}
        </p>
      </div>
    </header>

    <main class="home-support__cards">
      <div
        class="home-support__cards-column"
        v-for="(action, i) in supportData.support_actions"
        :key="i"
      >
        <support-card
          :tag="'0' + (i + 1)"
          :title="action.title"
          :slug="action.slug"
          :description="action.description"
        ></support-card>
      </div>
    </main>
  </section>
</template>

<script>
import SupportCard from "./SupportCard";
export default {
  name: "HomeSupport",
  props: ["supportData"],
  components: {
    SupportCard,
  },
};
</script>

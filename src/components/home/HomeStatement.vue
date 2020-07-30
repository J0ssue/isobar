<template>
  <section class="home-statement">
    <div class="container">
      <h2 class="home-statement__title">{{ statementData.title }}</h2>
      <p class="home-statement__description">{{ statementData.description }}</p>
      <button class="home-statement__button">Read Our Statement</button>
    </div>
  </section>
</template>
j
<script>
export default {
  name: "HomeStatement",
  props: ["statementData"],
};
</script>

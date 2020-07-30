<template>
  <div class="support-card font-roboto-medium">
    <div class="support-card__header">
      <p class="support-card__tag">{{ tag }}</p>
      <h4 class="support-card__title">{{ title }}</h4>
      <div class="support-card__shape"></div>
    </div>
    <div class="support-card__main">
      <p class="support-card__description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupportCard",
  props: ["tag", "title", "shape", "description"],
};
</script>

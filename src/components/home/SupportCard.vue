<template>
  <div class="support-card font-roboto-medium">
    <div class="support-card__header">
      <p class="support-card__tag">{{ tag }}</p>
      <h4 class="support-card__title">{{ title }}</h4>
      <div class="support-card__shape">
        <!-- <img :src="shapes.circle" alt="circle-shape" /> -->
        <svg v-if="$attrs.slug === 'circle'" width="60" height="60">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="white"
            stroke-width="5"
            fill="transparent"
          />
        </svg>
        <svg v-if="$attrs.slug === 'triangle'" height="60px" width="60px">
          <path
            d="M 6,50 L 40,6 L 80,50 z"
            fill="transparent"
            stroke="#fff"
            stroke-width="4"
          />
        </svg>
        <svg v-if="$attrs.slug === 'square'" width="60" height="60">
          <rect
            x="10"
            y="10"
            width="50"
            height="50"
            stroke="white"
            fill="transparent"
            stroke-width="5"
          />
        </svg>
      </div>
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
  shapes: {
    circle: require("@/assets/images/circle.svg"),
  },
};
</script>

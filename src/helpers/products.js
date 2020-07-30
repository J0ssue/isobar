export default {
  header: {
    upper_text: "shop products",
    title: "Open 24/7/365.",
  },
  products: [
    {
      slug: "white-tent",
      sale: false,
      featured_image: require("@/assets/images/test.jpg"),
      title: 'White Tent',
      price: '200.00',
      sale_price: null
    },
    {
      slug: "tin-coffee-tumbler",
      sale: false,
      featured_image: require("@/assets/images/test.jpg"),
      title: 'tin coffee tumbler',
      price: '35.00',
      sale_price: null
    },
    {
      slug: "blue-canvas-back",
      sale: true,
      featured_image: require("@/assets/images/test.jpg"),
      title: 'White Tent',
      price: '95.00',
      sale_price: '145.00'
    },
  ],
};
<template>
  <div class="products-container">
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductsView',
  data() {
    return {
      products: []
    };
  },
  async created() {
    try {
      // Replace with your actual get products endpoint
      const response = await axios.get('http://localhost:8080/products');
      this.products = response.data;
    } catch (error) {
      console.error(error);
      // Handle error fetching products
    }
  }
};
</script>

<style scoped>
/* Add styles for your products here */
.products-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
</style>

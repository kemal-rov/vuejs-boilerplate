<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">E-mail</label>
        <input id="email" v-model="credentials.email" type="email" required>
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" v-model="credentials.password" type="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginView',
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
  async login() {
    try {
      // Replace with your actual login endpoint
      const response = await axios.post('http://localhost:8080/auth/login', this.credentials);
      document.cookie = `AUTH_TOKEN=${response.data.authentication.sessionToken}; path=/`;

      // Redirect to products page
      this.$router.push({ name: 'Products' });
    } catch (error) {
      console.error(error);
      // Handle login error, e.g., wrong credentials
      // Show an error message to the user
    }
  }
}
};
</script>

<style scoped>
/* Add your styles here */
.login-container {
  /* Example styling */
  max-width: 300px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>

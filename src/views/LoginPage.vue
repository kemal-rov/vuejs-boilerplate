<template>
    <div class="login-page">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input v-model="username" type="text" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { BASE_URL } from '@/utils/constants';

  export default {
    name: 'LoginPage',
    data() {
      return {
        username: '',
        password: '',
      };
    },
      methods: {
        login() {
          axios.post(`${BASE_URL}/login`, {
          username: this.username,
          password: this.password,
        })
          .then(response => {
          console.log(response.data);
          // Handle login success, redirect, store token
        })
          .catch(error => {
          console.error(error);
          // Handle login error
        });
      },
    },
  };
  </script>
  
  <style>
  /* CSS for Login Page */
  </style>
  
<template>
  <!-- All other elements go here -->

  <div>
    <img class="logo" src="../assets/logo/logo.png" alt="rms" />

    <h1>Log In</h1>
    <div class="authform">
      <input type="text" placeholder="Email" v-model="email" />
      <input type="text" placeholder="Password" v-model="password" />
      <button @click="signUp" type="button">Log In</button>
    </div>
    <p>
      If You are not Registered ,please
      <router-link to="/signup">register</router-link> first.
    </p>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style></style>

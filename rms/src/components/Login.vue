<template>
  <!-- All other elements go here -->

  <div>
    <img class="logo" src="../assets/logo/logo.png" alt="rms" />

    <h1>Log In</h1>
    <div class="authform">
      <input type="text" placeholder="Email" v-model="email" />
      <input type="text" placeholder="Password" v-model="password" />
      <button @click="login" type="button">Log In</button>
    </div>
    <p>
      If You are not Registered ,please
      <router-link to="/signup">register</router-link> first.
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      alert(this.email);
      let result = await axios.get(
        `http://localhost:3000/user?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "home" });
      } else {
        alert("login failed");
      }
    },
  },
  mounted() {
    if (localStorage.getItem("user-info")) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style></style>

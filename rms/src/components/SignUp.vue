<template>
  <!-- All other elements go here -->

  <div>
    <img class="logo" src="../assets/logo/logo.png" alt="rms" />

    <h1>Sign UP</h1>
    <div class="authform">
      <input type="text" placeholder="Name" v-model="name" />
      <input type="text" placeholder="Email" v-model="email" />
      <input type="text" placeholder="Password" v-model="password" />
      <button @click="signUp" type="button">Sign Up</button>
    </div>
    <p>
      If You are Registered ,please
      <router-link to="/login">LogIn</router-link> here.
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/user", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      if (result.status === 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "home" });
      } else {
        alert("Sign Up Failed");
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

<style>

</style>

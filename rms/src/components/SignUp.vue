<template>
  <!-- All other elements go here -->

  <div>
    <img class="logo" src="../assets/logo/logo.png" alt="rms" />

    <h1>Sign UP</h1>
    <div class="register">
      <input type="text" placeholder="Name" v-model="name" />
      <input type="text" placeholder="Email" v-model="email" />
      <input type="text" placeholder="Password" v-model="password" />
      <button @click="signUp" type="button">Sign Up</button>
    </div>
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
        alert("Sign Up Success");
        localStorage.setItem("user-info", JSON.stringify(result.data));
      } else {
        alert("Sign Up Failed");
      }
    },
  },
};
</script>

<style>
.logo {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: block;
}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;

  display: block;
}
button {
  width: 320px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  background-color: skyblue;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
}
</style>

<template>
  <div class="navbar">
    <div>
      <img
        class="logo"
        src="../assets/logo/logo.png"
        alt="rms"
        style="height: 40px"
        width="40px"
      />
    </div>

    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/addrest">Add Restaurant </router-link>
      <a @click="logout" href="#">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>
.navbar {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  position: fixed;
  justify-content: space-between;
}
.navbar a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  margin-right: 5px;
}
.navbar router-link {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  margin-right: 5px;
}

.navbar a {
  color: white;
  text-decoration: none;
  margin-right: 10px;
}

.logout {
  margin-left: auto;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}
</style>

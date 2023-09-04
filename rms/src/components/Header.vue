<template>
  <div class="navbar">
    <a href="#">Home</a>
    <a href="#">Add Restaurant </a>
    <a href="#">Update Restaurant</a>
    <a href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
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
}
.navbar a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  margin-right: 5px;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}
</style>

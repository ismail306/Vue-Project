<template>
  <h1>WellCome To Home Page</h1>
</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    if (!localStorage.getItem("user-info")) {
      this.$router.push({ name: "signup" });
    }
  },
};
</script>

<style></style>

<template>
  <div>
    <HeaderSection />
    <h1>WellCome To Home Page</h1>
  </div>
</template>

<script>
import HeaderSection from "./Header.vue";
export default {
  name: "HomePage",
  components: {
    HeaderSection,
  },
  mounted() {
    if (!localStorage.getItem("user-info")) {
      this.$router.push({ name: "signup" });
    }
  },
};
</script>

<style></style>

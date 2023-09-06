<template>
  <div>
    <HeaderSection />
    <h1>WellCome To Add res</h1>
    <form>
      <span>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="name" />
      </span>

      <span>
        <label for="address">Address</label>
        <input type="text" name="address" id="address" v-model="address" />
      </span>
      <span>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" v-model="email" />
      </span>
      <span>
        <label for="phone">Phone</label>
        <input type="text" name="phone" id="phone" v-model="phone" />
      </span>

      <br />
      <button type="submit" @click="add">Add</button>
    </form>
  </div>
</template>

<script>
import HeaderSection from "./Header.vue";
import axios from "axios";
export default {
  name: "AddRest",
  components: {
    HeaderSection,
  },
  data() {
    return {
      name: "",
      address: "",
      email: "",
      phone: "",
    };
  },

  methods: {
    async add() {
      let result = await axios.post("http://localhost:3000/restaurants", {
        name: this.name,
        address: this.address,
        email: this.email,
        phone: this.phone,
      });
      if (result.status == 201) {
        alert("Restaurant Added Successfully");
        this.$router.push("/");
      }
    },
  },

  mounted() {
    if (!localStorage.getItem("user-info")) {
      this.$router.push({ name: "signup" });
    }
  },
};
</script>

<style>
form {
  margin: 0 auto;
  width: 50%;
  border: 3px solid #f1f1f1;
  padding: 20px;
}
span {
  display: flex;
  justify-content: space-between;
}
form input {
  width: 80%;
  padding: 5px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
}
</style>

<template>
  <div>
    <HeaderSection />
    <h1>WellCome To Update</h1>
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
      <button type="submit" @click="update">Update</button>
    </form>
  </div>
</template>

<script>
import HeaderSection from "./Header.vue";
import axios from "axios";
export default {
  name: "UpdateRest",
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
    async update() {
      let result = await axios.put(
        `http://localhost:3000/restaurants/${this.$route.params.id}`,
        {
          name: this.name,
          address: this.address,
          email: this.email,
          phone: this.phone,
        }
      );
      if (result.status == 200) {
        alert("Restaurant Updated Successfully");
        this.$router.push("/");
      }
    },
  },

  async mounted() {
    //get restaurant data from api using
    if (!localStorage.getItem("user-info")) {
      this.$router.push({ name: "signup" });
    }

    let result = await axios.get(
      `http://localhost:3000/restaurants/${this.$route.params.id}`
    );
    this.name = result.data.name;
    this.address = result.data.address;
    this.email = result.data.email;
    this.phone = result.data.phone;
  },
};
</script>

<style></style>

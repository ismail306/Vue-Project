<template>
  <div>
    <HeaderSection />

    <h1>Hello {{ name }}, WellCome To Restaurant List In Dhaka</h1>
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in restaurantList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
          <td>
            <router-link class="action" :to="'/update/' + item.id"
              >Edit</router-link
            >

            <button @click="deleteRestaurant(item.id)" style="width: 50%">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import HeaderSection from "./Header.vue";

export default {
  name: "HomePage",
  components: {
    HeaderSection,
  },

  data() {
    return {
      name: JSON.parse(localStorage.getItem("user-info")).name,
      restaurantList: [],
    };
  },
  methods: {
    async deleteRestaurant(id) {
      if (confirm("Are you sure?")) {
        let result = await axios.delete(
          `http://localhost:3000/restaurants/${id}`
        );
        if (result.status == 200) {
          alert("Restaurant Deleted Successfully");
          this.$router.push({ name: "home" });
        }
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "signup" });
    }
    let result = await axios.get("http://localhost:3000/restaurants");
    this.restaurantList = result.data;
  },
};
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  background-color: #4caf50;
  color: white;
}
.action {
  text-decoration: none !important;
  padding-right: 15px !important;
}
</style>

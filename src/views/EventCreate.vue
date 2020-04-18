<template>
  <div>
    <h1>Create Events</h1>
    <p>{{ user.name }}</p>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>
    <p>There are {{ catLength }} categories.</p>
    <p>{{ getEventById(2) }} todos are done.</p>
    <!-- <p>this is created by{{ userName }}</p> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength;
    },
    ...mapGetters(["getEventById"]),
    // doneTodos() {
    //   return this.$store.getters.doneTodos;
    // },
    ...mapState(["user", "categories"])
  }
};
</script>

<template>
  <div class="about">
    <h1>Events Lists</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data;
        // console.log(response.data);
      })
      .catch(error => {
        console.log("there was an error" + error.response);
      });
  }
};
</script>

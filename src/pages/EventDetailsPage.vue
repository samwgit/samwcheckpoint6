<template>
  <h1 class="text-center text-success">Event Details</h1>
  <div class="container-fluid d-flex justify-content-center">
    <div class="row fs-3 card-bg col-10 rounded-3 justify-content-center ms-1 me-1">
      <p>Event Name: <span class="text-success">{{event.name}}</span></p>
      <p>Event Location: <span class="text-success">{{event.location}}</span></p>
      <p>Event Capacity: <span class="text-success">{{event.capacity}}</span></p>
      <p>Event Start Date: <span class="text-success">{{event.startDate}}</span></p>
      <p class="fs-5">Event Description: <span class="text-success">{{event.description}}</span></p>
      <img class="mb-3" :src="event.coverImg" alt="coverImg" style="height: 300px; width: 300px"
        :title="event.coverImg">
    </div>
  </div>
  <div class="container-fluid mt-3">
    <div class="row justify-content-around">
      <button v-if="!event.capacity == 0" class="btn btn-success w-25" title="Get Ticket!">Get Ticket!</button>
      <button v-if="event.capacity == 0" class="btn btn-warning w-25 nono" title="Sold Out!">Sold Out!</button>
      <button class="btn btn-danger w-25" title="This does not work">This does not work</button>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
// import EventDetails from '../components/EventDetails.vue';
import { profileService } from '../services/ProfileService.js';
import Pop from '../utils/Pop.js';

import { eventDetailsService } from '../services/EventDetailsService.js';

export default {
  setup() {
    const route = useRoute();
    async function getEventById() {
      try {
        await eventDetailsService.getEventById(route.params.id)
      } catch (error) {
        Pop.error(error, "[AHHHHHHHHHHH]")
      }
    }



    getEventById()
    return {
      event: computed(() => AppState.activeEvent),
      // event: computed(() => AppState.event),
      profile: computed(() => AppState.activeProfile),
    }
  },
  components: { Event }
}
</script>


<style lang="scss" scoped>
.card-bg {
  background-color: #22324d;
}

.nono {
  text-decoration: line-through;
  color: red;
}
</style>
<template>
  <div class="card card-bg m-3" style="width: 18rem;">
    <div class="card-header text-success d-flex">
      {{event.name}}
      <span role="button" aria-pressed="false" @click="deleteEvent(event.id)" v-if="account.id == event.creatorId"
        class="text-danger text-end ms-2">
        <i class="mdi mdi-delete">
        </i>
      </span>
    </div>

    <img :src="event.coverImg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{event.location}}</h5>
      <p class="card-text">{{event.description}}
      </p>
      <a href="#" class="btn btn-success justify-content-center d-flex" @click="viewEventDetails()">View Details</a>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { Event } from '../models/Event.js'
import { eventsService } from '../services/EventsService.js';
import Pop from '../utils/Pop.js';

export default {
  props: {
    event: { type: Event, required: true },
    events: []
  },
  setup() {
    return {
      account: computed(() => AppState.account),
      async deleteEvent(id) {
        try {
          if (await Pop.confirm('You wish to cancel your event?')) {
            eventsService.deleteEvent(id)
          }
        } catch (error) {
          Pop.error(error, '[Delete Event]')
        }
      },

      async viewEventDetails() {
        Pop.success('[Work In Progress...]')
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.card-bg {
  background-color: #22324d;
}
</style>
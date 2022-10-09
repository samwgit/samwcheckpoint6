<template>
  <div class="card card-bg m-3" style="width: 18rem;">
    <div class="card-header text-success d-flex" :title="event.name">
      <router-link :to="{ name: 'EventDetails', params: {id: event.id}}">
        {{ event.name }}
      </router-link>

    </div>

    <img :src="event.coverImg" class="card-img-top rounded-4" alt="coverImg" :title="event.coverImg">
    <div class="card-body">
      <h5 class="card-title">{{event.location}}</h5>
      <p class="card-text">{{event.description}}
      </p>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { TowerEvent } from '../models/Event.js'
import { eventsService } from '../services/EventsService.js';
import Pop from '../utils/Pop.js';

export default {
  props: {
    event: { type: TowerEvent, required: true },
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
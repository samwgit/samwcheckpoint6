<template>
  <div class="col-12 mb-5 mt-2">
    <div v-if="account.id">
      <h3 class="text-center mb-3">Welcome to Tower <span class="text-success text-uppercase">"{{account.name}}"</span>
      </h3>
      <h4 class="text-center mb-4">Thanks for joining Tower!</h4>
    </div>
    <div v-if="!account.id">
      <h3 class="text-center mb-5">Welcome to Tower join our community to post!</h3>
    </div>
    <div v-if="account.id">
      <EventForm :event="e" />
    </div>

  </div>

  <div class="col-12 flex-wrap d-flex justify-content-around">
    <Event v-for="e in events" :key="e.id" :event="e" />
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import Event from '../components/Event.vue';
import EventForm from '../components/EventForm.vue';
import { eventsService } from '../services/EventsService.js';
import Pop from '../utils/Pop.js';

export default {
  // props: {
  //   creator: {
  //     type: Event,
  //     required: true
  //   }
  // },
  setup() {
    async function getEvents() {
      try {
        await eventsService.getEvents()
      } catch (error) {
        Pop.error("[getEvents]", error)
      }
    }

    onMounted(() => {
      getEvents()
    })

    return {
      events: computed(() => AppState.events),
      // event: computed(() => AppState.event),
      account: computed(() => AppState.account)

    };
  },
  components: { Event, EventForm }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>

<template>
  <EventDetails />
</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import EventDetails from '../components/EventDetails.vue';

export default {
  setup() {
    return {
      event: computed(() => AppState.activeEvent),
      events: computed(() => AppState.events),
    }
  },
  components: { EventDetails }
}
</script>


<style lang="scss" scoped>

</style>
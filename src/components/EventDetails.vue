<template>
  <h5>
    This is indeed the Event Details Page, It is unfinished though...
  </h5>
</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';

export default {
  setup() {
    return {
      event: computed(() => AppState.activeEvent)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
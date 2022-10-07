<template>
  <div class="col-12 mb-5 mt-2">
    <h3 class="text-center mb-5">Welcome to Tower</h3>
    <h3 class="text-center mb-5">Welcome to Tower join our community to post!</h3>
    <EventForm />
  </div>

  <div class="col-12 flex-wrap d-flex justify-content-around">
    <Event />
    <Event />
    <Event />
    <Event />
    <Event />
    <Event />
    <Event />
    <Event />
  </div>
</template>

<script>
import Event from '../components/Event.vue';
import EventForm from '../components/EventForm.vue';
export default {
  setup() {
    return {};
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

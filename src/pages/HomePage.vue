<template>



  <div class="row flex-wrap justify-content-around d-flex gap-4 mt-2 mb-2">
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
export default {
  setup() {
    return {};
  },
  components: { Event }
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

<template>
  <div class="card card-bg m-3" style="width: 18rem;">
    <div class="card-header text-success">
      Event Name Here
    </div>
    <img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png" class="card-img-top"
      alt="...">
    <div class="card-body">
      <h5 class="card-title">Location</h5>
      <p class="card-text">Text About Said Event Lorem ipsum dolor sit amet among us consectetur, adipisicing elit.
        Officiis
        maiores non eos delectus.
      </p>
      <a href="#" class="btn btn-success justify-content-center d-flex">View Details</a>
    </div>
  </div>
</template>


<script>
import { Event } from '../models/Event.js'

export default {
  props: {
    event: { type: Event, required: true }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.card-bg {
  background-color: #22324d;
}
</style>
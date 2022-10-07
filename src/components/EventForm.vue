<template>


  <!-- Button trigger modal -->
  <div class="d-flex justify-content-center">
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Create Event
    </button>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content card-bg">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-success" id="staticBackdropLabel">Event Details</h1>
          <button type="button" class="btn-close bg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <form class="card-bg p-2 rounded-2 m-2" @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="eventName" class="form-label">Event Name:</label>
              <input type="word" class="form-control" aria-describedby="Event Name" v-model="editable.name" required
                name="name">
            </div>
            <div class="mb-3">
              <label for="eventLocation" class="form-label">Location:</label>
              <input type="word" class="form-control" v-model="editable.location" required name="location">
            </div>
            <div class="mb-3">
              <label for="event" class="form-label">Description:</label>
              <input type="word" class="form-control" maxlength="250" v-model="editable.description" required
                name="description">
            </div>
            <div class="mb-3">
              <label for="event" class="form-label">Image:</label>
              <input type="url" class="form-control" v-model="editable.coverImg" required name="eventImg">
            </div>
            <div class="mb-3">
              <label for="event" class="form-label">Capacity:</label>
              <input type="number" class="form-control" v-model="editable.capacity" required name="capacity">
            </div>
            <div class="mb-3">
              <label for="event" class="form-label">Start Date:</label>
              <input type="date" class="form-control" v-model="editable.startDate" required name="startDate">
            </div>

            <button type="submit" class="btn btn-success w-100" data-bs-dismiss="modal">Submit</button>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref, watchEffect } from 'vue';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { eventsService } from "../services/EventsService.js";
import { Account } from '../models/Account.js';

import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router';



export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  setup() {
    const editable = ref({})
    const router = useRouter()
    watchEffect(() => {
      editable.value = { ...AppState.post }
    })
    return {
      // account: computed(() => AppState.account),
      editable,
      async handleSubmit() {
        try {
          const newEvent = await eventsService.createEvent(editable.value)
          router.push({ name: 'EventDetails', params: { id: newEvent.id } })
          Pop.success('You have successfully created an Event!')
        } catch (error) {
          Pop.error(error, '[CreateEvent]')
        }
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
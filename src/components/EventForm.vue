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
          <form class="card-bg p-2 rounded-2 m-2">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Event Name:</label>
              <input type="word" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Location:</label>
              <input type="word" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Description:</label>
              <input type="word" class="form-control" id="exampleInputPassword1" maxlength="250">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Image:</label>
              <input type="url" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Capacity:</label>
              <input type="number" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Start Date:</label>
              <input type="date" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-success w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
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
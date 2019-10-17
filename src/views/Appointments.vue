<template>
  <div id="appointments"">
    <BookAnAppointment />
  </div>
</template>

<style lang="css">
#view-container {
  height: 100%;
}
</style>

<script>
// @ is an alias to /src
import BookAnAppointment from "@/components/BookAnAppointment.vue"

export default {
  name: "appointments",
  components: {
    BookAnAppointment,
  }
};
</script>

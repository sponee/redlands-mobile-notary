<template>
  <div class="appointments">
    <BookAnAppointment />
  </div>
</template>

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

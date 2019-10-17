<template>
  <iframe src="https://app.acuityscheduling.com/schedule.php?owner=18338726" width="100%" height="800" frameBorder="0"></iframe>
</template>

<script>
export default {
  name: "BookAnAppointment",
  props: {
    msg: String
  },
  mounted() {
    let acuityScript = document.createElement('script');
    acuityScript.setAttribute('src', 'https://embed.acuityscheduling.com/js/embed.js');
    document.head.appendChild(acuityScript);
  }
};
</script>

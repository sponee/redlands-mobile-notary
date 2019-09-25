<template>
  <div class="hello">
    <iframe src="https://app.acuityscheduling.com/schedule.php?owner=18338726" width="100%" height="800" frameBorder="0"></iframe>
  </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div id="home">
    <div>
      <h3>
        Thank you for choosing Redlands Mobile Notary
      </h3>
      <p>
        <img src="me.jpg" id="headshot" />
        Prodiving polite, timely notarial services to Redlands, Riverside, San Bernardino, and the surrounding area since 2019.
      </p>
      <ul>
        <li>Notarizations performed at your location</li>
        <li>$25k Errors & Omissions Insurance</li>
        <li>
          <router-link to="/contact">
            <p style="color:#42b983;text-decoration:underline;">Request an appointment today</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
#headshot {
  margin-left: 5%;
  width: 40%;
  float: right;
  border: 1px solid;
  border-radius: 15px;
}

#home {
  height:100vh;
}

@media (max-width: 600px) {
  #headshot {
    float: right;
  }
}
</style>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
};
</script>

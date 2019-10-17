<template>
  <div id="home">
    <div>
      Content goes here<img src ="/me.jpg" id="headshot">
    </div>
  </div>
</template>

<style lang="scss">
#headshot {
  display: block;
  margin-left: auto;
  width: 50%;
  border: 1px solid;
  border-radius: 15px;
}

#home {
  height:100vh;
}

@media (max-width: 600px) {
  #headshot {
    width: 100%;
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

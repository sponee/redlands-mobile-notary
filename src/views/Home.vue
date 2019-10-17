<template>
  <HelloWorld />
</template>

<style lang="scss">
#view-container {
  height: 100vh;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
  }
};
</script>

<template>
  <div id="app">
    <nav class="navbar navbar-dark fixed-top bg-dark">
      <a href="javascript:void(0)" class="nav-item nav-link" v-on:click="toggleNav" style="z-index:5">
        <span class="navbar-toggler-icon"></span>
      </a>
      <div>
        <router-link to="/" style="float:right;align:middle;" v-on:click.native="closeNav">
        <h1 class="header mb-0">Redlands Mobile Notary</h1>
        <small class="small" style="color:white;align:center;">Proudly Serving The Redlands Community Since 2019</small> 
        </router-link>
      </div>
      <nav class="sidenav flex-column bg-dark" v-bind:class="{ open: sidenavVisible, closed: !sidenavVisible }">
        <ul class="flex-column nav">
          <li><router-link class="nav-item nav-link" v-on:click.native="closeNav" to="/">Home</router-link></li>
          <li><router-link class="nav-item nav-link" v-on:click.native="closeNav" to="/appointments">Appointments</router-link></li>
          <li><router-link class="nav-item nav-link" v-on:click.native="closeNav" to="/services">Services</router-link></li>
          <li><router-link class="nav-item nav-link" v-on:click.native="closeNav" to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </nav>
    <div class="main" id="main" v-on:click="closeNav" v-bind:class="{ 'open-main': sidenavVisible, 'closed-main': !sidenavVisible }">
      <div class="pt-5">
        <div class="jumbotron" id="view-container">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  transition: 0.5s;
}

#main {
  height: 100;
  transition: 0.5s;
  margin-right: '';
}

.jumbotron {
  transition: 0.5s;
}

#nav {
  transition: 0.5s;
  a {
    font-weight: bold;
    font-size: 1em;
    color: #fff;
    top: 0;
    left: 0;
    &.router-link-exact-active {
      color: #42b983;
      text-decoration: underline;
    }
  }
}

.sidenav {
  height: 100vh;
  width: 0;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  min-width: 0px;
}

.open {
  width: 15%;
  min-width: 155px;
}

.closed {
  width: 0%;
  min-width: 0;
}

.open-main {
  margin-left: 15%;
}

.closed-main {
  margin-left: 0;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #fff;
  display: block;
  transition: 0.5s;
  font-weight: bold;
  font-size: 1em;
  top: 0;
  left: 0;
  &.router-link-exact-active {
    color: #42b983;
    text-decoration: underline;
  }
}

.sidenav a:hover {
  color: #f1f1f1;
  text-decoration: underline;
}

.sidenav .closebtn {
  position: relative;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.header {
  color: white;
  font-size: 1.75em;
}

@media (max-width: 600px) {
  .home {
    color: green;
    max-width: 75%;
    align:middle;
   }
  .sidenav a { 
    font-size: 1em;
  }
  .main {
  }
  .header {
    font-size: 0.75em;
  }
  .small {
    display: none;
  }
}

</style>

<script>
export default {
  name: "App",
  data()   {
    return {
      sidenavVisible: false,
    }
  },
  methods: {
    toggleNav() {
      this.sidenavVisible = !this.sidenavVisible
    },
    closeNav() {
      this.sidenavVisible = false;
    }
  }
};
</script>

<template>
  <div id="home">
    <form id="contact-form" method="post">
      <div class="form-row form-group">
        <input type="text" class="form-control" v-model="name" placeholder="name"></input>
      </div>
      <div class="form-row form-group">
        <input type="phone" id="phone-input" class="form-control" v-model="phone" placeholder="phone"></input>
      </div>
      <div class="form-row form-group">
        <input type="email" id="email-input"  class="form-control" v-model="email" placeholder="email"></input>
      </div>
      <h4 align="left">How can we help you?</h4>
      <div class="form-row form-group">
        <textarea id="description-input" rows="3" placeholder="Enter your message" class="form-control" v-model="description"></textarea>
      </div>
      <button type="button" v-on:click="submitToAPI" class="btn btn-lg btn-primary" style="margin-top:20px;background-color:#42b983;border-color:#42b983;">Submit</button>
    </form>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "Contact",
  data() {
    return {
      name: null,
      email: null,
      phone: null,
      description: null,
    }
  },
  methods: {
    submitToAPI() {
      var data = {
        name : this.name,
        phone : this.phone,
        email : this.email,
        desc : this.description
      };

      api.contact(data).then(response => {
      });
    }
  }
}
</script>

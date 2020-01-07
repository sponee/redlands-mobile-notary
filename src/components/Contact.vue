<template>
  <div id="home">
  <h3>Request an Appointment</h3>
    <form id="contact-form" method="post" @submit="submitToAPI">
      <div class="form-row form-group">
        <input type="text" class="form-control" v-model="name" placeholder="name" required></input>
      </div>
      <div class="form-row form-group">
        <input type="phone" id="phone-input" class="form-control" v-model="phone" placeholder="phone"></input>
      </div>
      <div class="form-row form-group">
        <input type="email" id="email-input"  class="form-control" v-model="email" placeholder="email" required></input>
      </div>
      <h4 align="left">How can we help you?</h4>
      <div class="form-row form-group">
        <textarea id="description-input" rows="3" placeholder="Enter your message" class="form-control" v-model="description" required=true></textarea>
      </div>
      <input type="submit" class="btn btn-lg btn-primary" style="margin-top:20px;background-color:#42b983;border-color:#42b983;">
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
      problems: [],
    }
  },
  methods: {
    submitToAPI(e) {
      if(this.email === '') {
        this.problems.push("Name is required.");
      }
      if(this.description === '') {
        this.problems.push("Email is required.");
      }

      e.preventDefault();

      console.log(this.problems);

      if(this.problems.length === 0) {
        var data = {
          name : this.name,
          phone : this.phone,
          email : this.email,
          desc : this.description
        };

        api.contact(data).then(response => {
          alert(`Your request has been submitted.`);
        });
      }
    }
  }
}
</script>

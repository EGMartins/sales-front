<template>
  <v-container>
    <v-layout row class="text-xs-center">
      <v-flex xs6 offset-xs3 class="grey lighten-4">
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title>
              <h4>Signup</h4>
            </v-card-title>
            <v-form>
                <p v-if="errors.length">
                  <b>Please, fix the issues:</b>
                  <ul>
                    <li v-for="error in errors">{{ error }}</li>
                  </ul>
                </p>
                <v-text-field v-model="name" prepend-icon="person" name="name" label="Name"></v-text-field>
                <v-text-field v-model="email" prepend-icon="email" name="email" label="E-mail"></v-text-field>
                <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                <v-text-field v-model="password_confirmation" prepend-icon="lock" name="password_confirmation" label="Password Confirmation" type="password"></v-text-field>
            <v-card-actions>
              <v-btn @click="checkForm" primary large block>Save</v-btn>
            </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
    name: 'Signup',
    data() {
      return {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        errors: []
      }
    },
    methods: {
      clearForm() {
        this.name = '',
        this.email = '',
        this.password = '',
        this.password_confirmation = ''
      },
      onSignup() {
        const formData = {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        }
        this.$store.dispatch('signup', formData)
          .then(() => {
            setTimeout(() => {
              this.$router.push("dashboard")
            },500)
          })
      },
      checkForm: function (e) {
        if (this.email && this.password) {
          this.onSignup();
        }

        this.errors = [];

        if (!this.name) {
          this.errors.push('Please, fill the name field.');
        }
        if (!this.email) {
          this.errors.push('Please, fill the e-mail field.');
        }
        if (!this.password) {
          this.errors.push('Please, fill the password field.');
        }
        if (!this.password_confirmation) {
          this.errors.push('Please, fill the password confirmation field.');
        }

        e.preventDefault();
      }
    }
}
</script>
<style>
    
</style>

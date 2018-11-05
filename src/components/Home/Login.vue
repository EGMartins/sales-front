<template>
  <v-container>
    <v-layout row class="text-xs-center">
      <v-flex xs6 offset-xs3 class="grey lighten-4">
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title>
              <h4>Login</h4>
            </v-card-title>
            <v-form>
              <p v-if="errors.length">
                <b>Please, fix the issues:</b>
                <ul>
                  <li v-for="error in errors">{{ error }}</li>
                </ul>
              </p>
            <v-text-field v-model="email" prepend-icon="email" name="email" label="E-mail"></v-text-field>
            <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
            <v-card-actions>
              <v-btn @click="checkForm" primary large block>
                Login
              </v-btn>
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
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
        errors: []
      }
    },
    methods: {
      onLogin() {
        const loginData = {
          email: this.email,
          password: this.password
        }
        console.log(loginData)
        this.$store.dispatch('login', loginData)
          .then(() => {
            setTimeout(() => {
              this.$router.push("dashboard")
            },500)
          })
      },
      checkForm: function (e) {
        if (this.email && this.password) {
          this.onLogin();
        }

        this.errors = [];

        if (!this.email) {
          this.errors.push('Fill the e-mail field.');
        }
        if (!this.password) {
          this.errors.push('Fill the password field.');
        }

        e.preventDefault();
      }

    }
}
</script>
<style>
    
</style>

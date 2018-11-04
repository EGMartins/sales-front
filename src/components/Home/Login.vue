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
            <v-text-field v-model="email" prepend-icon="email" name="email" label="E-mail"></v-text-field>
            <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
            <v-card-actions>
              <v-btn @click="onLogin" primary large block>Send</v-btn>
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
        password: ''
      }
    },
    methods: {
      onLogin() {
        const loginData = {
          email: this.email,
          password: this.password
        }
        console.log(loginData)
        this.clearForm
        this.$store.dispatch('login', loginData)
      },
      clearForm() {
        this.email = '',
        this.password = ''
      }
    }
}
</script>
<style>
    
</style>

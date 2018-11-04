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
                <v-text-field v-model="name" prepend-icon="person" name="name" label="Name"></v-text-field>
                <v-text-field v-model="email" prepend-icon="email" name="email" label="E-mail"></v-text-field>
                <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                <v-text-field v-model="password_confirmation" prepend-icon="lock" name="password_confirmation" label="Password Confirmation" type="password"></v-text-field>
            <v-card-actions>
              <v-btn @click="onSignup" primary large block>Save</v-btn>
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
        password_confirmation: ''
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
        this.clearForm
      }
    }
}
</script>
<style>
    
</style>

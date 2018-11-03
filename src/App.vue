<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
          <span>Circlesoft</span>
          <span class="font-weight-light">Sales Test</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>  
    </v-toolbar>
    <v-content>
      <login></login>
    </v-content>
  </v-app>
</template>

<script>
import Login from './components/Home/Login'

export default {
  name: 'App',
  components: {
    Login
  },
  data () {
    return {
      //
    }
  }
}
</script>

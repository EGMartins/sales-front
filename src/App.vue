<template>
  <div>
    <v-toolbar>
        <v-toolbar-title class="headline text-uppercase">
            <span>Circlesoft</span>
            <span class="font-weight-light">Sales Test</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn to="/signup" v-if="!auth" flat>
              Signup 
            </v-btn>
            <v-btn to="/dashboard" v-if="auth" flat>
              Dashboard
            </v-btn>
            <v-btn to="/" v-if="auth" @click="signout" flat>
              Signout
            </v-btn>
        </v-toolbar-items>  
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      //
    }
  },
  methods: {
    signout() {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticate
    }
  }
}
</script>

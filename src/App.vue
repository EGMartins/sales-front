<template>
  <div>
    <v-toolbar>
        <v-toolbar-title class="headline text-uppercase">
            <span>Circlesoft</span>
            <span class="font-weight-light">Sales Test</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>
              <router-link to="/signup">
                Signup
              </router-link> 
            </v-btn>
            <v-btn flat>
              <router-link to="/dashboard">
                Dashboard
              </router-link>
            </v-btn>
            <v-btn @click="signout" flat>
              <router-link to="/">
                Signout
              </router-link>
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
  }
}
</script>

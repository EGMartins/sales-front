<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Gross Profit</h3>
            <div>Here are your gross profit comparing last two years</div>
          </div>
        </v-card-title>
        <bar-chart :colors="['#b00', '#666']" label="Profit" :library="{backgroundColor: '#f4f2f2'}" :data="twoYearsSales"></bar-chart>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import VueChartkick from 'vue-chartkick'
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
    twoYearsSales() {
      return this.$store.getters['twoYearsSales']
    }
  },
  created() {
    this.$store.dispatch('fetchTwoYearsSales')
  }
}
</script>
<style scoped>
  .theme--light.v-card {
    margin-top: 20px !important;
  }
</style>


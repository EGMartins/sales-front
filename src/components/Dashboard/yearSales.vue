<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Monthly sales</h3>
            <div>Here are your monthly sales on the current year</div>
          </div>
        </v-card-title>
        <column-chart label="Sales" :library="{backgroundColor: '#f4f2f2'}" :data="yearSales"></column-chart>
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
    yearSales() {
      return this.$store.getters['yearSales']
    }
  },
  created() {
    this.$store.dispatch('fetchYearSales')
  }
}
</script>
<style scoped>
  .theme--light.v-card {
    margin-top: 20px !important;
  }
</style>


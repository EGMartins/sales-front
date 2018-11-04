<template>
  <v-layout>
    <v-flex xs12 sm0 offset-sm1>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Year sales</h3>
            <div>Here are your sales on the current year</div>
          </div>
        </v-card-title>
      </v-card>
      <line-chart :data="yearSales"></line-chart>
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
  v-flex {
    margin-top: 20px;
  }
</style>


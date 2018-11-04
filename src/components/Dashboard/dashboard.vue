<template>
  <div>
    <sales></sales>
    <growth></growth>
  </div>
</template>

<script>
import Sales from './yearSales'
import Growth from './twoYearsSales'
export default {
  data() {
    return {
    }
  },
  components: {
    Sales,
    Growth
  }
}
</script>
<style scoped>
  v-flex {
    margin-top: 20px;
  }
</style>


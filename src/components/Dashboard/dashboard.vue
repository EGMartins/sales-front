<template>
    <h1>Here is the DASHBOARD!</h1>
</template>
<script>
export default {
  data() {
    return {
            
    }
  },
  methods: {
  },
  created() {
    this.$store.dispatch('fetchSales')
  }
}
</script>
,

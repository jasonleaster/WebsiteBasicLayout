<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import Header from './components/header/Header.vue'

export default {
  name: 'App',
  components: {
    'v-header': Header
  }
}

</script>
<style>

</style>

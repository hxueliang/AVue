<template>
  <div class="home">
    <h1>home</h1>

    <p @click="$store.commit('add')">count: {{ $store.state.count }}</p>
    <p @click="$store.dispatch('add')">async count: {{ $store.state.count }}</p>
    <!-- <p>double count: {{ $store.getters.doubleCount }}</p> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    name() {
      this.$store.dispatch('add')
    }
  }
}
</script>

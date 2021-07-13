<template>
    <Loading v-show="loading"></Loading>
    <router-view />
</template>

<script>
  import {useStore} from 'vuex'
  import Loading from '@/components/Loading.vue'
  import {computed} from 'vue';

export default {
  name: 'App',
  components: {
    Loading
  },
  setup() {
    const store = useStore()
    return {
      loading: computed(() => store.state.loading)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

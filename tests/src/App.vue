<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <ul class="collection with-header">
      <li class="collection-header"><h2>Essential Links</h2></li>
      <a class="collection-item" href="https://vuejs.org" target="_blank">Core Docs</a>
      <a class="collection-item" href="https://forum.vuejs.org" target="_blank">Forum</a>
      <a class="collection-item" href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a>
      <a class="collection-item" href="https://twitter.com/vuejs" target="_blank">Twitter</a>
    </ul>
    <ul class="collection with-header">
      <li class="collection-header"><h2>Ecosystem</h2></li>
      <a class="collection-item" href="http://router.vuejs.org/" target="_blank">vue-router</a>
      <a class="collection-item" href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      <a class="collection-item" href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      <a class="collection-item" href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

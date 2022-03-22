import * as Vue from 'vue/dist/vue.esm-bundler.js'

const app = Vue.createApp({
  template: `
  <h1>Hello world  </h1>
  <button @click="increment()">Increment</button>
  <p>Count {{ count }} </p>
  `,
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
})
app.mount("#app")
<template>
<div class="label">
  <label v-bind:for="name">{{ name }}</label>
  <div class="error">{{ error }}</div>
  <input v-bind:id="name" v-model="value" />
</div>
</template>

<script>
export default {
  props: {
    name: {type: String, required: true },
    rules: {type: Object, default : {} } // hash map of rules
  },
  data() {
    return {
      value: ''
    }
  },
  computed: {
    error() {
      if (this.rules.required && this.value.length === 0) {
        return 'Value is required.'
      }
      if (this.rules.min && this.value.length < this.rules.min) {
        return `Minimum required length is ${this.rules.min}.`
      }
    }
  }
}
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
}
.error {
  color: red;
}
.label {
  display: flex;
  justify-content: space-between;
}
input {
  background: none;
  color: black;
  border: 1px solid silver;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
  font-size: 16px;
}
</style>
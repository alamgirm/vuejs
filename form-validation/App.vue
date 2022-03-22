<template>
  <MyInput 
  name="Username" 
  v-bind:rules="{required: true, min: 5}" />
  <MyButton 
    background="darkslateblue" color="white" :disabled="disabled"
  />
</template>

<script>
import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'

export default {
  components : {
    MyButton, MyInput
  },
  data() {
    return {
      disabled: false
    }
  }
}
</script>

<style scoped>
button:disabled {
  opacity: 0.5;
}
button {
  background: none;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  filter: brightness(125%)
}
</style>
<script>
export default {
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      count: 1,
      anotherMsg: 'another message!'
    }
  },
  storage: {
    keys: ['count', 'anotherMsg'],
    //keep data.count in localStorage
    namespace: 'my-namespace-super-cool-namespace'
  },
  methods: {
    increment() {
      this.count++
      this.$store.commit('increment')
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>{{ anotherMsg }} and the count is: {{ count }}</h3>
    <button @click="increment">add to count +1</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

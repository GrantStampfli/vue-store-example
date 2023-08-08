import 'es6-promise/auto'
import { createStore } from 'vuex'
import vuejsStorage from 'vuejs-storage'

const store = createStore({
  state: {
    numberCount: 0
  },
  mutations: {
    increment (state) {
      state.numberCount++
    }
  },
  plugins: [
    vuejsStorage({
      keys: ['numberCount'],
      //keep state.count in localStorage
      namespace: 'my-vuex-namespace!!!',
      driver: vuejsStorage.drivers.sessionStorage
      //if you want to use sessionStorage instead of localStorage
    })
  ]
})

export default store

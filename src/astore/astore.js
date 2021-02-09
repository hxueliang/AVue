let Vue

class Store {
  constructor(options) {
    this.$options = options
    this.state = new Vue({
      data: options.state
    })
  }
}

function install(_Vue) {
  Vue = _Vue

  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        console.log(this.$options, '===this.$options')
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default {
  Store,
  install
}

let Vue

class Store {
  constructor(options) {
    // this.$options = options
    this._mutations = options.mutations
    this._actions = options.actions

    // this.state = new Vue({
    //   data: options.state
    // })
    this._vm = new Vue({
      data: {
        // 加两个$，Vue不做代理
        $$state: options.state
      }
    })

    // 绑定commit、dispatch的上下文store实例
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  // 存取器
  get state() {
    return this._vm._data.$$state
  }
  set state(v) {
    console.error('不能设置state')
  }

  // store.commit('add', 1)
  // type: mutation的类型
  // payload: 载荷，是参数
  commit(type, payload) {
    const entry = this._mutations[type]
    if (entry) {
      entry(this.state, payload)
    }
  }

  dispatch(type, payload) {
    const entry = this._actions[type]
    if (entry) {
      entry(this, payload)
    }
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

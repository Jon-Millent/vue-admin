import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/index'
import api from './util/api'

import {
  Button, Select, Dropdown,
  DropdownItem, DropdownMenu,
  Menu, MenuItem, MenuItemGroup,
  Submenu, Form, FormItem, Input
} from 'element-ui';

let eleElements = [
  Button, Select, Dropdown,
  DropdownItem, DropdownMenu,
  Menu, MenuItem, MenuItemGroup,
  Submenu, Form, FormItem, Input
]

eleElements.forEach(val=>{
  Vue.use(val)
})

Vue.use(api)


router.beforeEach((to, from, next)=>{
  store.commit('nowStatus', 'loading')
  next();
})

router.afterEach(()=>{
  store.commit('nowStatus', 'end')

  setTimeout(()=>{
    store.commit('nowStatus', 'hide')
  }, 900)

  setTimeout(()=>{
    store.commit('nowStatus', 'normal')
  }, 1000)
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

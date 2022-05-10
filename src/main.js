import Vue from 'vue'
import App from './App.vue'
import { Button, Select ,Aside,Container,Header,Main,Menu,MenuItem,MenuItemGroup,Submenu} from 'element-ui';
import router from '../router/index'
// import vueConfig from 'vue.config';



Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Select)
Vue.use(Aside)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

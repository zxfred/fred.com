import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* 公共样式 */
import './common/stylus/common.styl'

/* FontAwesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWeixin, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faEnvelope, faWeixin, faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)
console.log(library)

/* 项目自带 */
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

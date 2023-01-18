import Vue from "vue";
import App from "./App.vue";
import antd from "ant-design-vue";

import "ant-design-vue/dist/antd.css";
import "./assets/main.css";

Vue.use(antd);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

import "../../common/qiankun/public-path.js";
// import actions from "../../common/qiankun/actions.js";
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css"
import zhCn from "element-plus/es/locale/lang/zh-cn"
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./router";
import store from "./store";
import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";
import { autoComponentRegister } from "../../common/utils/auto-component-register";
import plugins from "./plugins";

// function useTable (app: App) {
//     app.use(VXETable)

//     // 给 vue 实例挂载内部对象，例如：
//     // app.config.globalProperties.$XModal = VXETable.modal
//     // app.config.globalProperties.$XPrint = VXETable.print
//     // app.config.globalProperties.$XSaveFile = VXETable.saveFile
//     // app.config.globalProperties.$XReadFile = VXETable.readFile
//   }
let instance = null;

function render(props = {}) {
  if (props) {
    // 注入 actions 实例
    // actions.setActions(props);
  }
  const { container } = props;
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  });

  instance = createApp(App);
  instance
    .use(ElementPlus, {locale: zhCn})
    .use(VXETable)
    .use(store)
    .use(router)
    .use(plugins)
    .mount(container ? container.querySelector("#webpackapp") : "#webpackapp");
  autoComponentRegister(instance);
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  console.log("独立运行");
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount(props) {
  console.log("[vue] props from main framework", props);

  render(props);
}

export async function unmount() {
  // instance.$destroy();
  // instance.$el.innerHTML = "";
  // instance = null;
}

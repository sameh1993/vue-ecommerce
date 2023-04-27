import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import emiter from "mitt";
// import { VueReCaptcha } from "vue-recaptcha-v3";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap";
import "@/assets/css/font-awesome.min.css";
import "@/main.scss";
import "@/assets/js/jquery.bxslider.min.js";

import Notifications from "@kyvg/vue3-notification";

import vue3videoPlay from "vue3-video-play"; // 引入组件
import "vue3-video-play/dist/style.css"; // 引入css

const emitter = emiter();

import * as $ from "jquery";
window.$ = window.jQuery = $;

/* add icons to the library */

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(createPinia());
// app.use(VueReCaptcha, { siteKey: "AIzaSyB6xTvo-mAjQWrn77BEQo025POyyhqtxLE" });
app.use(router);
app.use(Notifications);
app.use(vue3videoPlay);
app.mount("#app");

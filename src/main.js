import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import emiter from "mitt";
import store from "@/stores/index.js";

import "@/assets/js/jquery-1.11.1.min.js";
import "@/assets/js/bootstrap.min.js";
import "@/assets/js/jquery.jqcandlestick.min.js";
import "@/assets/js/jquery.marquee.js";
import "@/assets/js/scripts.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap";
import "@/main.scss";

import Notifications from "@kyvg/vue3-notification";

const emitter = emiter();

import * as $ from "jquery";
window.$ = window.jQuery = $;

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(createPinia());
app.use(router);
app.use(store);
app.use(Notifications);
app.mount("#app");

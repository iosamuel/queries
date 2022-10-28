import { createApp, ref } from "vue";
import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);

const loading = ref(false);
app.provide("loading", loading);

app.mount("#app");

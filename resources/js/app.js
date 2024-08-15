import { createApp } from 'vue';
import Component from '/resources/js/component.vue';

const app = createApp({});
app.component('Component', Component);
app.mount('#app');
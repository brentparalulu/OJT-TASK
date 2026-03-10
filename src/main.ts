import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';

// 2. CSS Imports
import 'ant-design-vue/dist/reset.css';
import 'leaflet/dist/leaflet.css'
import './assets/map.css'

// 3. Create the app instance (ONE LANG DPATTTT TO PTNG INA MO KA)
const app = createApp(App);

// 4. Sabihin sa Vue na gamitin ang Ant Design
app.use(Antd);

// 5. I-mount na sa dulo
app.mount('#app');

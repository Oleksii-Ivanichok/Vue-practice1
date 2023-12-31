import {createApp} from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import router from "@/components/router/router";
import VIntersection from "@/components/directives/VIntersection";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.directive('intersection', VIntersection)

app
    .use(router)
    .mount('#app')

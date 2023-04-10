
import  Message  from 'primevue/message';
import Tooltip from 'primevue/tooltip';


export default defineNuxtPlugin((nuxtApp) => {
  
  nuxtApp.vueApp.component('Message', Message);
  nuxtApp.vueApp.directive('tooltip', Tooltip);

  nuxtApp.$router.options.scrollBehavior = () => {
    return { left: 0, top: 0 }
  }
});
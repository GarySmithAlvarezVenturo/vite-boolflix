import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(fas);
library.add(far);



createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

// ICONA PIENA
/* <font-awesome-icon :icon="['fas', 'star']" /> */

// ICONA VUOTA
/* <font-awesome-icon :icon="['far', 'star']" /> */
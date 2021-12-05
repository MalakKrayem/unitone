import { Vue } from "./init";
import router from "./router";
import store from "./store";
import { createHead } from "@vueuse/head";
import "./global/components/globalComponents";

// import normalize.css
import "normalize.css";

//Add bootstrap to your project
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// Import Nprogress css file:
import "nprogress/nprogress.css";

import i18n from "./i18n";

Vue.use(store).use(i18n).use(router).use(createHead()).mount("#app");

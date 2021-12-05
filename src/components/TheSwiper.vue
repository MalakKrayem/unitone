<template>
  <swiper :pagination="true" class="mySwiper">
    <swiper-slide v-for="img in imgs" :key="img.id">
      <img :src="img.imgUrl" alt="img" />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      imgs: [
        { id: "1", imgUrl: require("../assets/swiper/img1.jpg") },
        { id: "2", imgUrl: require("../assets/swiper/img2.jpg") },
        { id: "3", imgUrl: require("../assets/swiper/img3.jpg") },
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
img {
  width: 100%;
  height: 400px;
}
</style>

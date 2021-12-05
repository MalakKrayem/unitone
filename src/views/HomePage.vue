<template>
  <div>
    <Swiper />
    <the-data />
  </div>
</template>

<script>
import TheData from "../components/TheData.vue";
import Swiper from "../components/TheSwiper.vue";
export default {
  components: {
    Swiper,
    TheData,
  },
};
</script>

<style lang="scss" scoped></style>

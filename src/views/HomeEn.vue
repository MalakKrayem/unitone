<template>
  <div>
    <the-swiper />
    <the-data-en />
  </div>
</template>

<script>
import TheDataEn from "../components/TheDataEn.vue";
import TheSwiper from "../components/TheSwiper.vue";
export default {
  components: { TheSwiper, TheDataEn },
};
</script>

<style lang="scss" scoped>
* {
  direction: ltr;
}
</style>

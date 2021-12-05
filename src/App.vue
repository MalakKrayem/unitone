<template>
  <TheNavbar />
  <router-view />
</template>
<script>
import TheNavbar from "@/components/layouts/TheNavbar.vue";

export default {
  components: {
    TheNavbar,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  direction: rtl;
}
</style>

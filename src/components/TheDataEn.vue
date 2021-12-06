<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-4">
          <div>
            <h2>Information</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              ipsam pariatur temporibus facilis soluta inventore laudantium
              corporis obcaecati minus eaque quae officiis, adipisci, tempore
              accusamus distinctio necessitatibus voluptates sequi aspernatur.
            </p>
          </div>
        </div>
        <div class="col-8 mr-5">
          <div class="row">
            <div class="col-2"></div>
            <div class="col-5">
              <img src="../assets/swiper/img1.jpg" alt="img1" />
              <!-- <h3>{{ data.title }}</h3> -->
              <h3>img1</h3>
            </div>
            <div class="col-5">
              <img src="../assets/swiper/img1.jpg" alt="img1" />
              <!-- <h3>{{ data.title }}</h3> -->
              <h3>img2</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-2"></div>
            <div class="col-5">
              <img src="../assets/swiper/img1.jpg" alt="img1" />
              <!-- <h3>{{ data.title }}</h3> -->
              <h3>img3</h3>
            </div>
            <div class="col-5">
              <img src="../assets/swiper/img1.jpg" alt="img1" />
              <!-- <h3>{{ data.title }}</h3> -->
              <h3>img4</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    datas() {
      return this.$store.getters["datas"];
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  direction: ltr;
}
</style>

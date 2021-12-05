<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-4">
          <div>
            <h2>معلومات</h2>
            <p>
              السلام عليكم و رحمة الله و بركاته السلام عليكم و رحمة الله و
              بركاته السلام عليكم و رحمة الله و بركاته السلام عليكم و رحمة الله
              و بركاتخ السلام عليكم و رحمة الله و بركاته السلام عليكم و رحمة
              الله و بركاته
            </p>
          </div>
        </div>
        <div class="col-8 mr-5">
          <div class="row">
            <div class="col-2"></div>
            <div class="col-5">
              <img src="../assets/swiper/img1.jpg" alt="img1" />
              <!-- <h3>{{ data.title }}</h3> -->
              <h3>صورة 1</h3>
            </div>
            <div class="col-5">
              <img src="../assets/swiper/img1.jpg" alt="img1" />
              <!-- <h3>{{ data.title }}</h3> -->
              <h3>صورة 2</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-2"></div>
            <div class="col-5">
              <img src="../assets/swiper/img1.jpg" alt="img1" />
              <!-- <h3>{{ data.title }}</h3> -->
              <h3>صورة 3</h3>
            </div>
            <div class="col-5">
              <img src="../assets/swiper/img1.jpg" alt="img1" />
              <!-- <h3>{{ data.title }}</h3> -->
              <h3>صورة 4</h3>
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

<style lang="scss" scoped></style>

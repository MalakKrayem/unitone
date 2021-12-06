<template>
  <div>
    <navbar-en />
    <div>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
        consectetur illo. Iusto quasi quam quo aperiam, suscipit placeat amet
        ratione voluptatum, dolores sit cum nihil? Enim laboriosam harum
        officiis placeat?Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Harum officia adipisci impedit libero ipsam distinctio dolorum
        delectus obcaecati ad tenetur. Aut modi autem, perferendis magnam
        doloremque totam similique! Facere, obcaecati!
      </p>
    </div>
  </div>
</template>

<script>
import NavbarEn from "../components/layouts/NavbarEn.vue";
export default {
  components: { NavbarEn },
};
</script>

<style lang="scss" scoped>
* {
  direction: ltr;
}
div {
  margin: 50px;
}
h1 {
  text-align: center;
}
p {
  margin-top: 20px;
  text-align: justify;
}
</style>

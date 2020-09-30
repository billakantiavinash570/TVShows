<template>
  <div class="row">
    <Header />
    <div class="col mt-5 pt-5">
      <div class="row ml-3">
        <router-link to="/">
          <i class="fa fa-arrow-left"> back to home</i>
        </router-link>
      </div>
      <img src="../../src/assets/banner_error_404.jpg" class="img-fluid" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "pageNotFound",
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="css" scoped>
a {
  color: #007bff !important;
}
</style>

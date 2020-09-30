<template>
  <div class="row common-height">
    <Header />
    <Shows />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Shows from "@/components/Shows.vue";
export default {
  name: "homePage",
  components: {
    Header,
    Footer,
    Shows
  }
};
</script>
<style scoped>
.common-height {
  margin-top: 60px;
}
</style>

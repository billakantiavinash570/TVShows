<template>
  <div class="row mb-5 mr-0">
    <div v-if="!shows.length" class="pt-4 mt-5 w-100">
      <h2 class="pt-5 mt-5">No shows to display</h2>
    </div>
    <div
      class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 show-image"
      v-else
      v-for="show in shows"
      :key="show.id"
    >
      <router-link :to="{ path: `/shows/${show.id}`, params: { id: show.id } }">
        <image-card :showData="show"></image-card>
      </router-link>
    </div>
  </div>
</template>
<script>
import ImageCard from "./ImageCard.vue";
export default {
  name: "shows",
  props: {
    shows: Array
  },
  components: {
    ImageCard
  }
};
</script>
<style scoped>
.show-image {
  transition: transform 0.5s;
}
.show-image:hover {
  -ms-transform: scale(1.05);
  /* IE 9 */
  -webkit-transform: scale(1.05);
  /* Safari 3-8 */
  transform: scale(1.05);
}
</style>

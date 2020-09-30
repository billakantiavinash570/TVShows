<template>
  <div class="row mb-5 mr-0">
    <div v-if="!shows.length" class="pt-4 mt-5 w-100">
      <h2 class="pt-5 mt-5">No shows to display</h2>
    </div>
    <div
      v-else
      class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 show-image"
      v-for="show in shows"
      :key="show.show.id"
    >
      <router-link
        :to="{ path: `/shows/${show.show.id}`, params: { id: show.show.id } }"
      >
        <image-card :showData="show.show"></image-card>
      </router-link>
    </div>
  </div>
</template>
<script>
import ImageCard from "./ImageCard.vue";
export default {
  name: "searchCard",
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

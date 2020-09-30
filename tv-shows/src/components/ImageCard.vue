<template>
  <span>
    <img
      :src="showData.image ? showData.image.medium : defaultImage"
      :alt="showData.name"
      class="image-width mr-1 mb-1"
    />
    <div>
      {{ showData.name }}
      <i class="fa fa-star star-color"></i>
      <small
        >({{
          showData.rating.average ? showData.rating.average : "N/A"
        }})</small
      >
    </div>
  </span>
</template>
<script>
import defaultImage from "@/assets/defaultImage.svg";
export default {
  name: "imageCard",
  props: {
    showData: Object
  },
  data() {
    return {
      defaultImage: defaultImage
    };
  }
};
</script>
<style lang="css" scoped>
.star-color {
  color: #f5a716;
}
</style>

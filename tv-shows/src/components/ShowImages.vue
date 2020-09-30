<template>
  <div class="row no-gutters">
    <div
      class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
      v-for="(showImage, index) in showImages"
      :key="index"
    >
      <img
        class="image-width mb-3"
        :src="
          showImage.resolutions
            ? (showImage.resolutions.medium &&
                showImage.resolutions.medium.url) ||
              (showImage.resolutions.original &&
                showImage.resolutions.original.url)
            : defaultImage
        "
      />
    </div>
  </div>
</template>
<script>
import defaultImage from "@/assets/defaultImage.svg";
export default {
  name: "showImages",
  props: {
    showImages: {
      type: Array
    }
  },
  data() {
    return {
      defaultImage: defaultImage
    };
  }
};
</script>

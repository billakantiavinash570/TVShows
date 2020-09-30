<template>
  <div class="row no-gutters">
    <div
      class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
      v-for="(cast, index) in casts"
      :key="index"
    >
      <img
        class="image-width"
        :src="
          cast.character.image
            ? cast.character.image.medium || cast.character.image.original
            : defaultImage
        "
      />
      <div>
        <h5>{{ cast.character.name }}</h5>
        <p class="person-name">
          <i>({{ cast.person.name }})</i>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import defaultImage from "@/assets/defaultImage.svg";
export default {
  name: "casts",
  props: {
    casts: {
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
<style lang="css" scoped>
.person-name {
  color: #007bff;
  margin-top: -10px;
}
</style>

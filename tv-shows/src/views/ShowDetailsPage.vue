<template>
  <div class="row common-height">
    <Header />
    <div class="col mt-3">
      <loader v-if="loading" />
      <div class="row" v-if="showDetails.name">
        <div class="ml-3 mb-2">
          <router-link to="/">
            <i class="fa fa-arrow-left"> back</i>
          </router-link>
        </div>
        <div>
          <div class="row col">
            <image-card class="col pt-3" :showData="showDetails"></image-card>
            <div class="col">
              <h3 class="mt-1">Overview</h3>
              <p class="overflow-data" v-html="showDetails.summary"></p>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-header text-center">
                  <strong>Show Info </strong>
                </div>
                <div class="card-body overflow-data">
                  <p class="card-text">
                    <strong>Name:</strong> {{ showDetails.name }}
                  </p>
                  <p class="card-text">
                    <strong>Type:</strong> {{ showDetails.type }}
                  </p>
                  <p class="card-text">
                    <strong>Language:</strong> {{ showDetails.language }}
                  </p>
                  <p class="card-text">
                    <strong>Genres:</strong
                    ><span v-for="(gen, index) in genres" :key="index">
                      {{ gen }},</span
                    >
                  </p>
                  <p class="card-text">
                    <strong>Status:</strong> {{ showDetails.status }}
                  </p>
                  <p class="card-text">
                    <strong>Average Rating:</strong>
                    {{ showDetails.rating && showDetails.rating.average }}
                  </p>
                  <p class="card-text">
                    <strong>Schedule Day:</strong>
                    {{ showDetails.schedule && showDetails.schedule.days[0] }}
                  </p>
                  <p class="card-text">
                    <strong>Schedule Time:</strong>
                    {{ showDetails.schedule && showDetails.schedule.time }} ({{
                      showDetails.runtime
                    }}
                    min)
                  </p>
                  <p class="card-text">
                    <strong>Premiered:</strong>
                    {{ showDetails.premiered }}
                  </p>
                  <p class="card-text">
                    <strong>Network Name:</strong>
                    {{ showDetails.network && showDetails.network.name }}
                  </p>
                  <p class="card-text">
                    <strong>Country:</strong>
                    {{
                      showDetails.network && showDetails.network.country.name
                    }}
                  </p>
                  <span class="float-left" v-if="showDetails.officialSite"
                    ><a :href="showDetails.officialSite" target="_blank"
                      >Official Site</a
                    >
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ml-3 mr-2 mb-2 no-gutters w-100">
          <h2 class="d-flex">Casts</h2>
          <casts :casts="casts" />
        </div>
        <div class="ml-3 mr-3 mb-5 no-gutters">
          <h2 class="d-flex">Images</h2>
          <show-images v-if="images.length" :showImages="images" />
          <div v-else class="mt-5 w-100">
            <h2>No Images to display</h2>
          </div>
        </div>
      </div>
      <div v-else class="pt-4 mt-5 w-100">
        <h2 class="pt-5 mt-5">No shows to display</h2>
        <router-link to="/">
          <i class="fa fa-arrow-left"> back to home</i>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Loader from "@/components/Loader.vue";
import ImageCard from "@/components/ImageCard.vue";
import Casts from "@/components/Casts.vue";
import ShowImages from "@/components/ShowImages.vue";
import defaultImage from "@/assets/defaultImage.svg";
import { getShowDetails, getShowCasts, getShowImages } from "@/service";
export default {
  name: "showDetailsPage",
  components: {
    Header,
    Footer,
    Loader,
    ImageCard,
    Casts,
    ShowImages
  },
  data() {
    return {
      loading: true,
      defaultImage: defaultImage,
      showDetails: {},
      genres: [],
      casts: [],
      images: []
    };
  },
  methods: {
    showSummary(showId) {
      getShowDetails(showId)
        .then(response => {
          this.showDetails = response.data;
          this.genres = this.showDetails.genres;
          this.loading = false;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    showCasts(showId) {
      getShowCasts(showId)
        .then(response => {
          this.casts = response.data;
          this.loading = false;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    showImages(showId) {
      getShowImages(showId)
        .then(response => {
          this.images = response.data.filter(image => image.type === "poster");
          this.loading = false;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  created() {
    this.showSummary(this.$route.params.id);
    this.showCasts(this.$route.params.id);
    this.showImages(this.$route.params.id);
  }
};
</script>
<style lang="css" scoped>
.overflow-data {
  max-height: 350px;
  overflow-y: auto;
}
.card-text {
  text-align: left !important;
}
a {
  color: #007bff !important;
}
</style>

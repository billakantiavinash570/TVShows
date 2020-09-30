<template>
  <div class="col">
    <loader v-if="loading" />
    <div v-else-if="totalShows.length">
      <div class="row mb-2">
        <div class="col">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Search Shows</span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="search shows"
              aria-label="Search Shows"
              v-model="searchShow"
            />
          </div>
        </div>
        <div class="col d-flex">
          <label>Select Genres : </label>
          <select class="custom-select" v-model="selectedGen">
            <option value="all">All</option>
            <option v-for="(gen, index) in genres" :key="index" :value="gen">{{
              gen
            }}</option>
          </select>
        </div>
      </div>
      <show-card
        v-if="!showFilterData && !showSearchData"
        :shows="totalShows"
      />
      <show-card
        v-else-if="showFilterData && !showSearchData"
        :shows="filteredShows"
      />
      <search-card
        v-else-if="showSearchData && !showFilterData"
        :shows="searchedShows"
      />
    </div>
    <div v-else class="pt-4 mt-5">
      <h2 class="pt-5 mt-5">No shows to display</h2>
    </div>
  </div>
</template>
<script>
import ShowCard from "./ShowCard.vue";
import SearchCard from "./SearchCard.vue";
import Loader from "./Loader.vue";
import { fetchAllShows, searchShows } from "@/service";
export default {
  name: "shows",
  components: {
    SearchCard,
    ShowCard,
    Loader
  },
  data() {
    return {
      loading: true,
      totalShows: [],
      genres: [],
      searchShow: "",
      showSearchData: false,
      searchedShows: [],
      selectedGen: "all",
      showFilterData: false,
      filteredShows: []
    };
  },
  methods: {
    fetchShows() {
      fetchAllShows()
        .then(response => {
          this.totalShows = response.data
            .filter(show => show.rating.average)
            .sort((prev, next) =>
              prev.rating.average < next.rating.average ? 1 : -1
            );
          let setGenres = new Set();
          this.totalShows.map(result => {
            result.genres.map(gen => {
              this.genres = setGenres.add(gen);
              this.loading = false;
            });
          });
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  watch: {
    selectedGen(val) {
      this.showFilterData = true;
      this.filteredShows = [];
      if (val !== "all") {
        this.searchShow = "";
        this.totalShows.map(res => {
          res.genres.map(value => {
            if (val.includes(value)) {
              this.filteredShows.push(res);
            }
          });
          return this.filteredShows;
        });
      } else {
        this.showFilterData = false;
        this.fetchShows();
      }
    },
    searchShow(val) {
      if (val) {
        this.selectedGen = "all";
        this.showSearchData = true;
        searchShows(val)
          .then(response => {
            this.searchedShows = response.data;
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        this.showSearchData = false;
        this.fetchShows();
      }
    }
  },
  created() {
    this.fetchShows();
  }
};
</script>
<style lang="css">
a {
  color: black !important;
  text-decoration: none !important;
}
.loader {
  display: block;
  align-items: center;
}
label {
  margin-top: 0.5rem;
  white-space: nowrap !important;
}
</style>

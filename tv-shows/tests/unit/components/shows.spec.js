import { shallowMount, createLocalVue } from "@vue/test-utils";
import moxios from "moxios";
import Shows from "@/components/Shows.vue";
import { totalShows, genres, filteredShows, searchShows } from "../testData.js";
const localVue = createLocalVue();

describe("Shows.vue component", () => {
  let wrapper;
  beforeEach(function() {
    // import and pass your custom axios instance to this method
    moxios.install();
    wrapper = shallowMount(Shows, {
      localVue,
      stubs: ["router-link"]
    });
  });

  afterEach(function() {
    // import and pass your custom axios instance to this method
    moxios.uninstall();
  });
  it("initially loading should be true", () => {
    expect(wrapper.vm.loading).toBe(true);
  });
  it("fetch data from api and renders, if response length greater than 0", done => {
    expect(wrapper.vm.loading).toBe(true);
    expect(wrapper.vm.totalShows).not.toBe(undefined);
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: totalShows
        })
        .then(function() {
          let arrayGenres = Array.from(wrapper.vm.genres);
          expect(wrapper.vm.showFilterData).toBe(false);
          expect(wrapper.vm.showSearchData).toBe(false);
          expect(wrapper.vm.totalShows.length).toBe(3);
          wrapper.setProps({ shows: totalShows });
          expect(wrapper.vm.totalShows).toEqual(totalShows);
          expect(arrayGenres).toEqual(genres);
          wrapper.setData({
            loading: false
          });
          expect(wrapper.vm.loading).toBe(false);
          done();
        });
    });
  });
  it("fetch data from api, if response is empty", done => {
    expect(wrapper.vm.loading).toBe(true);
    expect(wrapper.vm.totalShows).not.toBe(undefined);
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: []
        })
        .then(function() {
          wrapper.setData({
            loading: false
          });
          expect(wrapper.vm.totalShows.length).toBe(0);
          let h2 = wrapper.find("h2");
          expect(h2.text()).toBe("No shows to display");
          expect(wrapper.vm.loading).toBe(false);
          done();
        });
    });
  });
  it("filter shows by selected genre ", () => {
    expect(wrapper.vm.loading).toBe(true);
    wrapper.setData({
      selectedGen: "Drama",
      searchShow: ""
    });
    expect(wrapper.vm.selectedGen).not.toEqual("all");
    expect(wrapper.vm.showFilterData).toBe(true);
    expect(wrapper.vm.showSearchData).toBe(false);
    wrapper.setData({
      filteredShows,
      loading: false
    });
    wrapper.setProps({ shows: filteredShows });
    expect(wrapper.vm.filteredShows).toEqual(filteredShows);
    expect(wrapper.vm.loading).toBe(false);
  });
  it("search shows by show name ", done => {
    expect(wrapper.vm.loading).toBe(true);
    wrapper.setData({
      searchShow: "Person of Interest",
      selectedGen: "all"
    });
    expect(wrapper.vm.searchShow).toBe("Person of Interest");
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: searchShows
        })
        .then(function() {
          wrapper.setData({
            showSearchData: true
          });
          expect(wrapper.vm.showSearchData).toBe(true);
          expect(wrapper.vm.searchedShows.length).toBe(2);
          wrapper.setProps({ shows: searchShows });
          expect(wrapper.vm.searchedShows).toEqual(searchShows);
          wrapper.setData({
            loading: false
          });
          expect(wrapper.vm.loading).toBe(false);
          done();
        });
    });
  });
});

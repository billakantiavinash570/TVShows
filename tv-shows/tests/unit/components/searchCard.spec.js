import { shallowMount } from "@vue/test-utils";
import SearchCard from "@/components/SearchCard.vue";
import { searchShows } from "../testData";
describe("SearchCard.vue", () => {
  let shows = searchShows;
  let wrapper = shallowMount(SearchCard, {
    stubs: ["router-link"],
    propsData: {
      shows
    }
  });
  it("display search card image", () => {
    expect(wrapper.find(".show-image").exists()).toBe(true);
    wrapper.setProps({ show: wrapper.vm.shows[0] });
  });
  it("display search card if resesult is empty", () => {
    shows = [];
    let wrapper = shallowMount(SearchCard, {
      propsData: {
        shows
      }
    });
    expect(wrapper.find("h2").text()).toBe("No shows to display");
  });
});

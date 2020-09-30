import { shallowMount } from "@vue/test-utils";
import HomePage from "@/views/HomePage.vue";
describe("HomePage.vue", () => {
  let wrapper;
  wrapper = shallowMount(HomePage);
  it("renders home page root div", () => {
    //   console.log(wrapper.html());
    expect(wrapper.html()).toContain("header");
  });
});

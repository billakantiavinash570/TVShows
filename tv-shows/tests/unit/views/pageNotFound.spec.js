import { shallowMount } from "@vue/test-utils";
import PageNotFound from "@/views/PageNotFound.vue";

describe("PageNotFound.vue", () => {
  let wrapper;
  wrapper = shallowMount(PageNotFound, {
    stubs: ["router-link"]
  });
  it("display page not found", () => {
    expect(wrapper.find("img").exists()).toBe(true);
  });
});

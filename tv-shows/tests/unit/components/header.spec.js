import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  let wrapper;
  wrapper = shallowMount(Header, {
    stubs: ["router-link"]
  });
  it("commom header component", () => {
    expect(wrapper.find("img").exists()).toBe(true);
  });
});

import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

describe("Header.vue", () => {
  let wrapper;
  wrapper = shallowMount(Footer);
  it("commom footer component", () => {
    expect(wrapper.find("small").text()).toEqual("© 2020 coded with");
  });
});

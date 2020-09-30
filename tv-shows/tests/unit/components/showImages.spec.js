import { shallowMount } from "@vue/test-utils";
import ShowImages from "@/components/ShowImages.vue";
import { showImages } from "../testData";
describe("ShowImages.vue", () => {
  let wrapper = shallowMount(ShowImages, {
    propsData: {
      showImages
    }
  });
  it("display Show images of particular show if image exist", () => {
    wrapper.vm.img = showImages[0].resolutions.original;
    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.vm.showImages[0].resolutions.original.url).toBe(
      "http://static.tvmaze.com/uploads/images/original_untouched/1/2600.jpg"
    );
  });
});

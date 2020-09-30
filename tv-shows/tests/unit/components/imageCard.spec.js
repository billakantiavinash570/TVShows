import { shallowMount } from "@vue/test-utils";
import ImageCard from "@/components/ImageCard.vue";
import { totalShows } from "../testData";
describe("ImageCard.vue", () => {
  const showData = totalShows[0];
  let wrapper = shallowMount(ImageCard, {
    propsData: {
      showData
    }
  });
  it("display image", () => {
    wrapper.vm.imgUrl = showData.image.medium || showData.image.original;
    expect(wrapper.find(".image-width").exists()).toBe(true);
    expect(wrapper.vm.imgUrl).toEqual(
      showData.image.medium || showData.image.original
    );
  });
  it("display average rating", () => {
    expect(wrapper.find("small").exists()).toBe(true);
    expect(wrapper.find("small").text()).toEqual(
      `(${showData.rating.average})`
    );
  });
  it("display average rating,if not available", () => {
    showData.rating.average = null;
    const wrapper = shallowMount(ImageCard, {
      propsData: {
        showData
      }
    });
    expect(wrapper.find("small").exists()).toBe(true);
    expect(wrapper.find("small").text()).toEqual("(N/A)");
  });
});

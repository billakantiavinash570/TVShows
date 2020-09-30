import { shallowMount } from "@vue/test-utils";
import Casts from "@/components/Casts.vue";
import { showCasts } from "../testData";
describe("Cast.vue", () => {
  const casts = showCasts;
  let wrapper = shallowMount(Casts, {
    propsData: {
      casts
    }
  });
  it("display cast image", () => {
    wrapper.vm.image = casts[0].character.image.medium;
    expect(wrapper.find(".image-width").exists()).toBe(true);
    expect(wrapper.vm.image).toEqual(
      casts[0].character.image.medium || casts[0].character.image.original
    );
  });
  it("display character name", () => {
    expect(wrapper.find("h5").exists()).toBe(true);
    expect(wrapper.find("h5").text()).toEqual(casts[0].character.name);
  });
  it("display person name", () => {
    expect(wrapper.find(".person-name").exists()).toBe(true);
    expect(wrapper.find(".person-name").text()).toEqual(
      `(${casts[0].person.name})`
    );
  });
});

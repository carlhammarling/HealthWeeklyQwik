import { component$, useSignal, $, useStylesScoped$, useVisibleTask$ } from "@builder.io/qwik";
import SliderStyles from "./Slider.scss?inline";
import {
  FaChevronLeftSolid,
  FaChevronRightSolid,
} from "@qwikest/icons/font-awesome";

export const Slider = component$(() => {
  useStylesScoped$(SliderStyles);
  const items: any[] = [
    { text: "one" },
    { text: "two" },
    { text: "three" },
    { text: "four" },
    { text: "five" },
    { text: "six" },
    { text: "seven" },
  ];

  const position = useSignal<number>(0);
  //Like getElement by id
  const sliderContainerRef = useSignal<HTMLElement>();
  const prevBtnRef = useSignal<HTMLElement>();
  const nextBtnRef = useSignal<HTMLElement>();

  

  const goTo = $((steps: number) => {
    const sliderContainer = sliderContainerRef.value;

    if (
      sliderContainer &&
      position.value + steps >= 0 &&
      position.value + steps < items.length
    ) {
      position.value += steps;
      console.log(position.value);

      //To make sure that the firstChild is really a HTMLElement
      if (sliderContainer.firstElementChild instanceof HTMLElement) {
        const windowWidth = window.innerWidth;
        const cardWidth = sliderContainer.firstElementChild.offsetWidth;
        const center = (windowWidth - cardWidth) / 2;
        const cardStyle = getComputedStyle(sliderContainer.firstElementChild);
        const gap = parseInt(cardStyle.getPropertyValue("gap"), 10);

        const offset = position.value * cardWidth + position.value * gap;
        sliderContainer.style.paddingLeft = `${center}px`;
        sliderContainer.style.transform = `translateX(-${offset}px)`;
      }
    } else {
      console.log("Slider to low or high");
    }
  });

  useVisibleTask$(() => {
    goTo(0);
    // const sliderContainer = sliderContainerRef.value;

    // if (sliderContainer?.firstElementChild instanceof HTMLElement) {
    //   const windowWidth = window.innerWidth;
    //   const cardWidth = sliderContainer.firstElementChild.offsetWidth;
    //   const center = (windowWidth - cardWidth) / 2;
    //   sliderContainer.style.paddingLeft = `${center}px`;
    // }
  });

  
  return (
    <div class="sliderWrapper">
      <div class="navDotsContainer">
        {items.map((item, index) => (
          <div class={`navDot ${position.value === index ? "active" : ""}`} key={index} onClick$={() => goTo(index - position.value)}></div>
        ))}
      </div>
      <div class={`sliderContainer`} ref={sliderContainerRef}>
        {items.map((item, index) => (
          <div
            class={`sliderCard ${position.value === index ? "opacity" : ""}`}
            key={index}
          >
            {item.text}
          </div>
        ))}
      </div>
      <button
        class={`${position.value > 0 ? "" : "hide"}`}
        id="left"
        ref={prevBtnRef}
        onClick$={() => goTo(-1)}
      >
        <FaChevronLeftSolid />
      </button>
      <button
        class={`${position.value < items.length - 1 ? "" : "hide"}`}
        id="right"
        ref={nextBtnRef}
        onClick$={() => goTo(1)}
      >
        <FaChevronRightSolid />
      </button>
    </div>
  );
});

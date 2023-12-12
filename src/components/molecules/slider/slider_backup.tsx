import type { PropFunction, QRL } from '@builder.io/qwik';
import { $, useSignal } from '@builder.io/qwik';
import { useTask$ } from '@builder.io/qwik';
import { useStylesScoped$ } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import type { JSX } from '@builder.io/qwik/jsx-runtime';

// TODO: add motions
export default component$<{
  onClick$?: PropFunction<(key: string, orientation: 'left' | 'right') => void>;
  pages?: QRL<JSX.Element>[];
}>(({ pages = [] }) => {
  useStylesScoped$(`
    #slider-container-outer {
      position: relative;
      display: flex;
      flex: 1;
      width: 100%;
      overflow: hidden;
    }

    #slider-container {
      display: flex;
      flex: 1;
      flex-wrap: nowrap;
      flex-direction: row;
    }
    
    /* CSS transition applied when translation of items happen */
    .slider-container-transition {
      transition: transform 300ms ease-in-out;
    }
    
    .slider-item {
      display: flex;
      width: 100%;
      flex-shrink: 0;
    }

    .slider-item > * {
      flex: 1;
    }

    .pages {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      margin: 10px 0 10px 0;
      background: rgb(255, 255, 255, 0);
      border-radius: 50px;
      width: 100%;

      .page, .page--indicator {
        position: relative;
        width: 10px;
        height: 10px;
        border-radius: 100%;
      }
/*
      .page, :not(.page--indicator) {
        cursor: pointer;
      }
*/
      .page {
        // border: 1px solid rgba(255, 255, 255, .3);
        background: white;
        z-index: 10;
        overflow: hidden;
        cursor: pointer;
      }

      .page:not(:first-child) {
        margin-left: 10px;
      }

      .page--indicator {
        position: absolute;
        background: #6cc5a2;
        transform: translate3d(-10px, 0, 0);
        z-index: 1;
        transition: transform 300ms ease-in-out;
      }
    }

    button {
      position: absolute;
      border: none;
      background: transparent;
      color: #fff;
      font-size: 40px;
      text-align: center;
      outline: none;
      opacity: 0.5;
      transition: opacity 300ms ease-out;

      &:hover {
        opacity: 1;
      }
    }

    .left {
      left: 0px;
    }

    .right {
      right: 0px;
    }
  `);

  const position = useSignal(0);
  const sliderContainerRef = useSignal<HTMLElement>();
  const sliderNextButtonRef = useSignal<HTMLElement>();
  const sliderPrevButtonRef = useSignal<HTMLElement>();
  const pagesRef = useSignal<HTMLElement>();

  const goto = $((steps: number) => {
    const sliderContainer = sliderContainerRef.value;
    const indicators = pagesRef.value;

    if (sliderContainer && indicators) {
      if (position.value + steps > -1 && position.value + steps < pages.length)
      position.value += steps;
      console.log(position.value);

      sliderContainer.classList.add('slider-container-transition');
      // sliderContainer.style.transform = `translateX(-100%)`;
      sliderContainer.style.transform = `translateX(${-position.value * sliderContainer.offsetWidth}px)`;

      const prevPage = indicators.children[steps > 0 ? position.value - 1 : position.value + 1].children[0] as HTMLElement;
      prevPage.style.transform = `translateX(${steps > 0 ? '' : '-'}${prevPage.offsetWidth + 5}px)`;
      const nextPage = indicators.children[position.value].children[0] as HTMLElement;
      nextPage.style.transform = `translateX(0px)`;
    }
  });

  useTask$(({ cleanup }) => {
    sliderPrevButtonRef.value?.addEventListener('click', () => goto(-1));
    sliderNextButtonRef.value?.addEventListener('click', () => goto(1));

    const sliderContainer = sliderContainerRef.value;
    if (sliderContainer) {
      const ro = new ResizeObserver(() => {
        if (position.value > 0) {
          sliderContainer.classList.remove('slider-container-transition');
          sliderContainer.style.transform = `translateX(${-position.value * sliderContainer.offsetWidth}px)`;
        }
      });

      ro.observe(sliderContainer);
      cleanup(() => { ro.unobserve(sliderContainer); });
    }

  }, { eagerness: 'idle' });

  return (
    <>
      <div id="slider-container-outer">
        <div ref={pagesRef} class={'pages'}>
          { pages?.map((c, i) => (
            <div key={i} class={'page'} onClick$={() => {
              const offset = i - position.value;
              new Array(Math.abs(offset)).fill(offset > 0 ? 1 : -1).forEach((s) => goto(s));
            }}>
              <div class={'page--indicator'} style={i === 0 ? { transform: 'translateX(0px)' } : {}}></div>
            </div>
          ))}
        </div>

        <div ref={sliderContainerRef} id="slider-container" class="slider-container-transition">
          { pages?.map((p, i) => <div key={i} class="slider-item">{p.resolve()}</div>)}
        </div>
      </div>

      <button class={'left'} ref={sliderPrevButtonRef} id="move-button">&laquo;</button>
      <button class={'right'} ref={sliderNextButtonRef} id="move-button">&raquo;</button>
    </>
  );
});

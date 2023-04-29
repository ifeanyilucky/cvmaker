import React from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import * as home from '../components/LandingPage';
import Page from '../Layout/Page';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const rootRef: React.MutableRefObject<HTMLDivElement> =
    React.useRef<HTMLDivElement>();
  const tl: React.MutableRefObject<gsap.core.Timeline> =
    React.useRef<GSAPTimeline>();

  React.useEffect(() => {
    const bg: string[] = [
      '#landingTemplate',
      '#landingHero',
      '#landingFeatures',
    ];
    const context = gsap.context(() => {
      tl.current = gsap.timeline().to('#landingTemplate', {
        scrollTrigger: {
          trigger: '#landingTemplate',
          start: 'top center',
          end: 'bottom center',
          onEnter: () =>
            gsap.to(bg, {
              css: { backgroundColor: '#000', color: '#fff' },
            }),
          onEnterBack: () =>
            gsap.to(bg, {
              css: { backgroundColor: '#000', color: '#fff' },
            }),
          onLeaveBack: () =>
            gsap.to(bg, {
              css: { backgroundColor: '#fff', color: '#000' },
            }),
          onLeave: () =>
            gsap.to(bg, { css: { backgroundColor: '#fff', color: '#000' } }),
        },
      });
    });
    // gsap.timeline().add(ScrollTrigger());
    return () => context.revert();
  }, [rootRef]);
  return (
    <div ref={rootRef}>
      <Page title='Build your CV like a pro' />

      <div id='landingHero'>
        <home.LandingHero />
      </div>
      <div id='landingTemplate'>
        <home.LandingTemplate />
      </div>
      <div id='landingFeatures'>
        <home.LandingFeatures />
      </div>
      <home.CTA />
    </div>
  );
}

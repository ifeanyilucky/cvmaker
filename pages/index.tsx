import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import * as home from '../components/LandingPage';
import Page from '../Layout/Page';

export default function Home() {
  const rootRef = React.useRef<HTMLDivElement>();
  const tl = React.useRef<GSAPTimeline>();

  React.useEffect(() => {
    const context = gsap.context(() => {
      // gsap.registerPlugin(ScrollTrigger);/
      tl.current = gsap.timeline().to('#landingTemplate', {
        scrollTrigger: {
          trigger: '#landingTemplate',
          start: 'top center',
          onEnter: () =>
            gsap.to('#landingTemplate', {
              css: { backgroundColor: '#000', color: '#fff' },
            }),
        },
      });
    });
    // gsap.timeline().add(ScrollTrigger());
    return () => context.revert();
  }, [rootRef]);
  return (
    <div ref={rootRef}>
      <Page title='Build your CV like a pro' />
      <home.LandingHero />
      <home.CTA />

      <div id='landingTemplate'>
        <home.LandingTemplate />
      </div>
      <home.LandingFeatures />
    </div>
  );
}

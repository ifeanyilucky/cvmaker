import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import FeatureSlides from '../FeatureSlides';

export default function LandingFeature() {
  //   const onScreenRef = useRef<HTMLDivElement>();
  //   const tl = useRef<GSAPTimeline>();
  //   useEffect(() => {
  //     const gsapContext = gsap.context(() => {
  //       tl.current = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: 'rightSlide',
  //           start: 'top top',
  //           end: () => `+=${onScreenRef.current.offsetHeight}`,
  //           scrub: true,
  //           scrub: true,
  //         },
  //       });
  //     });
  //   }, []);
  return <FeatureSlides />;
}

const Wrapper = styled.div``;

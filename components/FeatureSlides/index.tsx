import React, { useState } from 'react';
import { gsap } from 'gsap';
import FeatureSlide from './FeatureSlide';
import { featureSlides } from './data';

function RenderImages({ activeFeatureIndex }: { activeFeatureIndex: number }) {
  return (
    <div>
      {featureSlides.map(({ imageUrl }, index) => (
        <img
          className={activeFeatureIndex === index && 'active'}
          key={imageUrl}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      ))}
    </div>
  );
}

export default function FeatureSlides() {
  const [activeFeatureIndex, setFeatureIndex] = useState<number>(0);
  const featureRef = React.useRef<HTMLDivElement>();
  const tl = React.useRef<GSAPTimeline>();
  React.useEffect(() => {
    const ctx: gsap.Context = gsap.context(() => {
      function stopTrigger(): GSAPTimeline {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: featureRef.current,
            start: 'top top',
            end: () => `+=${featureRef.current.offsetHeight}`,
            scrub: true,
            pin: true,
          },
        });
        return tl;
      }
      tl.current = gsap.timeline();
      tl.current.add(stopTrigger());
    });
    return () => ctx.revert();
  });
  return (
    <div className='feature-slides-container' ref={featureRef}>
      <div className='feature-slides-left'>
        {featureSlides.map((feature, index) => (
          <FeatureSlide
            key={feature.imageUrl}
            title={feature.title}
            description={feature.description}
            updateActiveImage={setFeatureIndex}
            index={index}
          />
        ))}
      </div>
      <div className='feature-slides-right'>
        <RenderImages activeFeatureIndex={activeFeatureIndex} />
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from 'react';

export default function FeatureSlide({
  title,
  description,
  index,
  updateActiveImage,
}: {
  title: string;
  description: string;
  index: number;
  updateActiveImage?: React.Dispatch<React.SetStateAction<number>>;
}) {
  const ref = useRef(null);
  useEffect(() => {
    updateActiveImage(index);
  }, [index]);
  return (
    <div ref={ref} className='feature-slide'>
      <h3 className='feature-slide-title'>{title}</h3>
      <p className='feature-slide-description'>{description}</p>
    </div>
  );
}

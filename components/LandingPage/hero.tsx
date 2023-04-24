import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

export default function LandingHero() {
  const heroRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    const imgWrapper = imagesRef.current.firstChild;
    const firstImg = imgWrapper.firstChild;
    console.log(firstImg);
    // gsap.from(heroRef.current, { css: { visibility: 'hidden' }, delay: 1.2 });
    // gsap.to(heroRef.current, { css: { visibility: 'visible' }, delay: 0 });
    gsap.from(imgWrapper, {
      y: 0,
      ease: 'Power3.easeOut',
      duration: 1.5,
      visibility: 'invisible',
    });
    gsap.to(imgWrapper, {
      y: 0,
    });

    // image zoom animation
    gsap.from(firstImg, {
      css: { scale: 1.7 },
      ease: 'Power3.easeOut',
      duration: 2,
    });
  });
  return (
    <Wrapper ref={heroRef}>
      <div className='container py-5'>
        <div className='row mt-2 align-items-center'>
          <div className='col-md-6 mt-5'>
            <h3 className='display-2 font-w-700'>Create your CV like a pro</h3>
            <p className='text-muted'>
              Create your new CV today using CV Makers all-new intelligent
              resume creation platform.
              <br />
              All within your browser.
            </p>
            <button className='primary-button mt-4'>+ Create CV Now</button>
            <div className='mt-3'>
              <div className='blob'>
                You&lsquo;ll have <strong>65% more </strong>chance to get hired.{' '}
                <strong>Read paper</strong>
              </div>
            </div>
          </div>
          <div className='col-md-6 d-flex justify-content-around py-5 py-md-0'>
            <div className='hero-images' ref={imagesRef}>
              <div className='image-wrapper'>
                <img src='/static/images/cvmaker-user.png' />
              </div>
            </div>
            <div className='circle' />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .blob {
    background-color: var(--theme-secondary);
    display: inline-block;
    padding: 1rem;
    border-radius: 20px;
    border-top-left-radius: 0;
  }
  .image-wrapper {
    height: 450px;
    width: 70%;
    background-color: var(--theme-secondary);
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .circle {
    height: 200px;
    width: 200px;
    background-color: var(--theme-primary);
    z-index: -1;
    position: absolute;
    border-radius: 50%;
    bottom: 50px;
    right: 90px;
  }
`;

import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { gsap } from 'gsap';

export default function LandingHero() {
  const root = useRef<HTMLDivElement>();
  const tl = useRef<GSAPTimeline>();

  useLayoutEffect(() => {
    const ctx: gsap.Context = gsap.context(() => {
      // move up animation first image wrapper
      tl.current = gsap.timeline();
      gsap
        .timeline()
        .from('.image-wrapper', {
          y: 600,
          ease: 'Power3.easeOut',
          duration: 1,
          visibility: 'invisible',
        })

        .to('.image-wrapper', { y: 0 })

        .from(
          '#hero-image',
          {
            css: { scale: 2 },
            ease: 'Power3.easeOut',
            duration: 1.2,
            delay: 0,
          },
          1.6
        )
        .to(
          '#hero-image',
          {
            delay: 0,
            duration: 2,
            css: { scale: 1 },
          },
          1.4
        );
      gsap
        .timeline()
        .from('.image-wrapper-two', {
          y: 600,
          ease: 'Power3.easeOut',
          duration: 1,
          visibility: 'invisible',
        })
        .to('.image-wrapper-two', { y: 0 });

      gsap
        .timeline()
        .from('.display-5', { y: 44, ease: 'Power3.easeOut', delay: 0.8 }, 0.15)
        .from('.text-muted', { y: 20, opacity: 0, ease: 'Power3.easeOut' }, 1.4)
        .from('.primary-button', { y: 20, opacity: 0, ease: 'Power3.easeOut' });
    }, root);
    return () => ctx.revert();
  }, [root]);

  return (
    <Wrapper ref={root} className='pb-5'>
      <div className='container py-5'>
        <div className='row mt-2 align-items-center'>
          <div className='col-md-6 mt-5'>
            <h3 className='display-2 font-w-900 header'>
              Create your CV like a pro
            </h3>
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
                <Link href='/templates'>
                  <strong
                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                  >
                    See templates
                  </strong>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-md-6  py-5 py-md-0'>
            <div className='hero-images d-flex justify-content-between'>
              <div className='image-wrapper'>
                <img id='hero-image' src='/static/images/cvmaker-user.png' />
              </div>
              <div className='mx-3' />
              <div className='image-wrapper-two'>
                <img id='hero-image' src='/static/images/Vector.jpg' />
              </div>
            </div>
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
    height: 360px;
    width: 70%;
    background-color: var(--theme-secondary);
    /* border-top-right-radius: 50px; */
    border-bottom-left-radius: 50px;
    overflow: hidden;
    margin-top: 6rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .image-wrapper-two {
    height: 360px;
    width: 70%;
    background-color: var(--theme-secondary);
    border-top-right-radius: 50px;
    /* border-bottom-left-radius: 50px; */
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

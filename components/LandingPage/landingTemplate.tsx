import React from 'react';
import styled from 'styled-components';

export default function LandingTemplate() {
  return (
    <Wrapper>
      <div className='container py-5'>
        <div className='row py-3'>
          <div className='mx-auto col-md-10 text-center'>
            <h3 className='display-4 font-w-900'>
              Chose from our eye-catching template
            </h3>
            <div className='px-md-5'>
              <p className='px-md-5'>
                Choose from 20+ professional, unique and versatile CV templates
                designed by experts. Our template designs have been vetted by HR
                professionals and hiring managers to increase your chances of
                landing your dream job interview.
              </p>
            </div>
          </div>
        </div>
        <div className='row pb-5'>
          <div className='col-md-4 py-2 py-md-0'>
            <div className='template-card' />
          </div>
          <div className='col-md-4 py-2  py-md-0'>
            <div className='template-card' />
          </div>
          <div className='col-md-4 py-2  py-md-0'>
            <div className='template-card' />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .template-card {
    height: 460px;
    width: 100%;
    background: #f0f0f0;
  }
`;

import React from 'react';
import styled from 'styled-components';

export default function CTA() {
  return (
    <Wrapper>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-6 mx-auto'>
            <h3 className='display-3'>Land your perfect job with CV Maker</h3>
            <p className='mt-4 mx-5'>
              Create your very own professional CV and download it within 10
              minutes. All within your browser.
            </p>
            <button className='primary-button my-3'>+ Create CV Now</button>
            <p>You&apos;ll be more likely to get a job</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 4rem 0;
  background-color: #000;
  color: #fff;
  text-align: center;
  margin-bottom: 0;
`;

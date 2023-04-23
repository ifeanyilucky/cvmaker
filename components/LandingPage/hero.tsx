import React from 'react';
import styled from 'styled-components';

export default function LandingHero() {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-6 mt-5'>
            <h3 className='display-2'>Create your CV like a pro</h3>
            <p className='text-muted'>
              Create your new CV today using CV Makers all-new intelligent
              resume creation platform.
              <br />
              All within your browser.
            </p>
            <button className='primary-button mt-4'>+Create CV Now</button>
            <div className='mt-3'>
              <div className='blob'>
                You&lsquo;ll have <strong>65% more </strong>chance to get hired.{' '}
                <strong>Read paper</strong>
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
`;

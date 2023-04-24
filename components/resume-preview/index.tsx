import styled from 'styled-components';
import React from 'react';
import { ResumeProps, experienceProps } from '../../types/resume';

export default function ResumePreview({ values }: { values: ResumeProps }) {
  const { biography, email, firstName, position, experience } = values;
  return (
    <Wrapper id='printableArea'>
      <div className='row'>
        <div className='col-8'>
          <h2 className='font-w-700'>{firstName}</h2>
          <p className='text-muted'>{position}</p>
        </div>
        <div className='col-4 bg-transparent small'>
          <p className='text-muted'>
            123 Your street,
            <br />
            Your city, ST 123456, <br />
            your country.
          </p>
          <p className='text-muted'>
            08123133827 <br />
            {email}
          </p>
        </div>
      </div>
      <hr />
      <div className='row'>
        <div className='col-4'>
          <h6 className='font-w-700'>Biography</h6>{' '}
        </div>
        <div className='col-8'>
          <p className='text-muted small'>{biography}</p>
        </div>
      </div>
      <hr />
      <div className='row'>
        <div className='col-4'>
          <h6 className='font-w-700'>Work experience</h6>
        </div>
        <div className='col-8'>
          {experience.map((ex: experienceProps, idx: number) => (
            <div className='experience' key={idx}>
              <p className='small bold'>
                <strong>{ex.jobTitle}</strong>
                <br />
                <strong>{ex.companyName && `at ${ex.companyName}`}</strong>
                <br />
                {ex.start} {ex.end && `- ${ex.end}`}
                <br />
                {ex.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fff;
  height: 842px;
  width: 595px;
  min-width: 595px;
  min-height: 842px;
  padding: 1.4rem;
  scale: 0.65;
  transform: translateY(-200px);
  /* position: absolute; */
  p {
    font-size: 12px;
  }
`;

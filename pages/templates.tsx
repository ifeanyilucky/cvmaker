import React from 'react';
import styled from 'styled-components';
import { NextRouter, useRouter } from 'next/router';
import { templates } from '../components/templates';
import Page from '../Layout/Page';
import { resumeDefault } from '../types/resume';

export default function Templates() {
  const resumeEl = React.useRef(null);
  const router: NextRouter = useRouter();
  return (
    <Wrapper>
      <Page title='CV Templates' />
      <div className='bg-dark'>
        <div className='container'>
          <div className='row py-5'>
            <div className='col-md-10 mx-auto text-center text-white'>
              <h1 className='display-3'>Chose from our best cv template</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {templates.map((template, idx) => (
            <div className='col-md-6 my-4' key={idx}>
              <div className='template-wrapper'>
                <div className='template' ref={resumeEl}>
                  <template.element values={resumeDefault} />
                </div>
                <div className='text-center'>
                  <h3 className='font-w-900'>{template.title}</h3>
                  <button
                    className='primary-button secondary'
                    onClick={() => {
                      router.push({
                        query: { templateid: template.id },
                        pathname: '/app/resumes/new',
                      });
                    }}
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 3rem 0;
  .template-wrapper {
    background-color: #f0f0f0;
    padding: 40px 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .template {
      transform: scale(0.75);
    }
  }
`;

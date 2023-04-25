import React, { useEffect } from 'react';
import Page from '../Layout/Page';
import { Borderless, Minimmal, Simmple } from '../components/templates';
import styled from 'styled-components';
import * as htmlToImage from 'html-to-image';

export default function Templates() {
  const templates: { element: () => JSX.Element; title: string }[] = [
    { element: Borderless, title: 'Borderless' },
    { element: Minimmal, title: 'Minimmal' },
    { element: Simmple, title: 'Simmple' },
  ];
  const resumeEl = React.useRef(null);

  useEffect(() => {
    // (async () => {
    //   const dataUrl = await htmlToImage.toJpeg(resumeEl.current);
    //   console.log(dataUrl);
    // })();
  }, []);
  const convertImage = async () => {
    const dataUrl = await htmlToImage.toJpeg(resumeEl.current);
    const imgTag = document.createElement('img');
    imgTag.src = dataUrl;
    console.log(dataUrl);
  };

  return (
    <Wrapper>
      <Page title='CV Templates' />
      <div className='container'>
        <div className='row'>
          {templates.map((template, idx) => (
            <div className='col-md-6 my-4' key={idx}>
              <div className='template-wrapper'>
                <div className='template' ref={resumeEl}>
                  <template.element />
                </div>
                <div>
                  <h3 className='font-w-700'>{template.title}</h3>
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

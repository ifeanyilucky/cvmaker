import React from 'react';
import styled from 'styled-components';
import Editor from '../../../components/Editor';
import ResumePreview from '../../../components/resume-preview';
import { ResumeProps } from '../../../types/resume';

export default function ResumeEdit() {
  const [values, setValues] = React.useState<ResumeProps>({
    biography: '',
    education: [],
    email: '',
    experience: [
      {
        companyName: '',
        end: '',
        id: 0,
        jobTitle: '',
        location: '',
        overview: '',
        start: '',
      },
    ],
    firstName: '',
    id: '',
    lastName: '',
    position: '',
    skills: [],
    bioTitle: '',
  });

  const handlePrint = () => {
    print();
  };
  return (
    <Wrapper>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='resume-wrapper'>
              <div className='editor'>
                <Editor values={values} setValues={setValues} />
              </div>
            </div>
          </div>
          <div className='col-md-6 position-relative preview-section'>
            <div className='position-fixed top-0 '>
              <div className='d-flex justify-content-center'>
                <p>Page 1 of 1</p>
              </div>
              <ResumePreview values={values} />
              <div className='d-flex py-3 justify-content-center'>
                <button
                  className='primary-button secondary'
                  onClick={handlePrint}
                >
                  Print CV
                </button>
                <div className='mx-2' />
                <button className='primary-button'>Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .resume-wrapper {
    align-items: center;
    .editor {
      /* background-color: #232323; */
      height: 100%;
    }
  }

  .col-md-6:last-child {
    background: rgb(240, 240, 240);
  }
  .preview-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

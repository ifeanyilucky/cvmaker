import React from 'react';
import styled from 'styled-components';
import { ResumeProps } from '../../types/resume';
import Experience from './Experience';
import RichTextEditor from './RichTextEditor';
import InputTag from '../inputTag';

export default function Editor({
  values,
  setValues,
}: {
  values: ResumeProps;
  setValues: React.Dispatch<React.SetStateAction<ResumeProps>>;
}) {
  return (
    <Wrapper>
      <div className='container-fluid'>
        <div className='flex'>
          <h3 className='font-w-700'>Personal details</h3>
          <h3 className=''>Language</h3>
        </div>
        <div>
          <div className='form-wrapper'>
            <label className='form-label text-muted'>First name</label>
            <input
              type='text'
              placeholder='First name'
              className='form'
              onChange={(e) =>
                setValues({ ...values, firstName: e.target.value })
              }
            />
          </div>
          <div className='form-wrapper'>
            <label className='form-label text-muted'>Email</label>
            <input
              type='text'
              placeholder='Email'
              className='form'
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className='form-wrapper'>
            <label className='form-label text-muted'>Current position</label>
            <input
              type='text'
              placeholder='eg. Software Engineer'
              className='form'
              onChange={(e) =>
                setValues({ ...values, position: e.target.value })
              }
            />
          </div>
          <hr />
          <div className='form-wrapper'>
            <h5
              contentEditable
              className='editable font-w-700'
              onChange={(e) => console.log(e)}
            >
              Short bio
            </h5>
            <p className='small'>
              Short bio Recruiters and HR managers spend an average of 6 seconds
              looking at a CV. Keep it short and concise. Write about yourself
              and your experience in 3-4 sentences.
            </p>
            <textarea
              placeholder={`eg "Highly-motivated communication sciences graduate, eager to leverage my passion for digital marketing. Experienced in developing in developing and implementing end-to-end digital marketing campaigns in multinational companies with strong time management, communication, and interpersonal skills.`}
              rows={5}
              cols={50}
              className='form'
              onChange={(e) =>
                setValues({ ...values, biography: e.target.value })
              }
            />
          </div>
          <Experience values={values} setValues={setValues} />
          <hr />
          <div className='form-wrapper'>
            <h5 className='font-w-700'>Skills</h5>
            <p className='small'>
              Got some skills you would like to share with your potential
              employer? Feel free to add them below.
            </p>
            <div className='form-wrapper'>
              <label className='form-label text-muted'>Add a skill</label>
              <InputTag values={values} setValues={setValues} />
              <input
                type='text'
                placeholder='Enter skill name'
                className='form'
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .form-wrapper {
    margin: 10px 0;
    .form-label {
      /* padding-bottom: 5px !important; */
    }
    .form {
      width: 100%;
      height: 100%;
      border: 1px solid #b6b6b6;
      padding: 17px 18px;
      border-radius: 5px;
    }
  }
`;

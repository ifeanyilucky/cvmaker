import React from 'react';
import styled from 'styled-components';
import { ResumeProps } from '../../types/resume';
import Experience from './Experience';
import RichTextEditor from './RichTextEditor';
import InputTag from '../inputTag';
import Education from './Education';

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
        <div className='flex mt-5'>
          <h4 className='font-w-900'>Personal details</h4>
        </div>
        <div>
          <div className='form-wrapper d-flex justify-content-between'>
            <div>
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
            <div>
              <label className='form-label text-muted'>Last name</label>
              <input
                type='text'
                placeholder='Last name'
                className='form'
                onChange={(e) =>
                  setValues({ ...values, lastName: e.target.value })
                }
              />
            </div>
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
            <h4
              contentEditable
              className='editable font-w-900'
              onChange={(e) => console.log(e)}
            >
              Short bio
            </h4>
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
            <h4 className='font-w-900'>Skills</h4>
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
          <hr />
          <Education setValues={setValues} values={values} />
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .form-wrapper {
    margin: 30px 0;
    .form-label {
      /* padding-bottom: 5px !important; */
    }
  }
`;

import React from 'react';
import { ResumeProps, experienceProps } from '../../types/resume';
import styled from 'styled-components';

export default function Experience({
  values,
  setValues,
}: {
  values: ResumeProps;
  setValues: React.Dispatch<React.SetStateAction<ResumeProps>>;
}) {
  const [experience, setExperience] = React.useState<experienceProps>({
    start: '',
    end: '',
    companyName: '',
    location: '',
    jobTitle: '',
    overview: '',
    id: Math.random(),
  });

  // add experience handler
  const addExperience = (e) => {
    setValues({
      ...values,
      experience: [...values.experience, experience],
    });
    e.preventDefault();
    setExperience({
      start: '',
      end: '',
      companyName: '',
      location: '',
      jobTitle: '',
      overview: '',
      id: Math.random(),
    });
  };

  const onRemove = (id) => {
    setValues({
      ...values,
      experience: values.experience.filter((exp) => exp.id !== id),
    });
  };

  return (
    <Wrapper>
      <div className='form-wrapper'>
        <h4 className='font-w-900'>Work experience</h4>
        <p className='small'>
          Include your relevant experience from the last 10 years and dates in
          this section. List your most recent position first.
        </p>
        {/* {values.experience.map((experience: experienceProps, idx: number) => ( */}
        <div className='experience'>
          <div className='form-wrapper'>
            <label className='form-label text-muted '>Job title</label>
            <input
              className='form'
              placeholder='e.g Frontend developer'
              type='text'
              value={experience.jobTitle}
              onChange={(e) =>
                setExperience({ ...experience, jobTitle: e.target.value })
              }
            />
          </div>
          <div className='form-wrapper'>
            <label className='form-label text-muted '>Company/Employer</label>
            <input
              className='form'
              placeholder='Enter company name'
              value={experience.companyName}
              onChange={(e) =>
                setExperience({ ...experience, companyName: e.target.value })
              }
            />
          </div>
          <div className='form-wrapper'>
            <label className='form-label text-muted'>Period</label>
            <div className='d-flex'>
              <input
                className='form'
                value={experience.start}
                onChange={(e) =>
                  setExperience({ ...experience, start: e.target.value })
                }
                placeholder='Start'
              />
              <div className='mx-2' />
              <input
                className='form'
                value={experience.end}
                placeholder='End'
                onChange={(e) =>
                  setExperience({ ...experience, end: e.target.value })
                }
              />
            </div>
          </div>
          <div className='form-wrapper'>
            <label className='form-label text-muted'>Location</label>
            <input
              className='form'
              value={experience.location}
              placeholder='Enter location'
              onChange={(e) =>
                setExperience({ ...experience, location: e.target.value })
              }
            />
          </div>
          <textarea
            value={experience.overview}
            rows={4}
            cols={30}
            className='form'
            placeholder={`Write your professional overview here. Don't know what to write? Click on the CV Wizard to get started`}
            onChange={(e) =>
              setExperience({ ...experience, overview: e.target.value })
            }
          />
        </div>
        {/* // ))} */}

        <button className='primary-button mt-2' onClick={addExperience}>
          Submit
        </button>
        <div className='my-3'>
          <div className='tag-wrapper'>
            {values.experience.map((exp) => (
              <div key={exp.id} className='tag'>
                <strong>{exp.jobTitle}</strong>, {exp.companyName}
                <button onClick={() => onRemove(exp.id)}>x</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

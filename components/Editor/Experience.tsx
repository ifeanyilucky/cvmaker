import React from 'react';
import { ResumeProps, experienceProps } from '../../types/resume';

export default function Experience({
  values,
  setValues,
}: {
  values: ResumeProps;
  setValues: React.Dispatch<React.SetStateAction<ResumeProps>>;
}) {
  // add experience handler
  const addExperience = () => {
    setValues({
      ...values,
      experience: [
        ...values.experience,
        {
          start: '',
          end: '',
          companyName: '',
          location: '',
          jobTitle: '',
          overview: '',
          id: Math.random(),
        },
      ],
    });
  };

  return (
    <>
      <div className='form-wrapper'>
        <h5>Work experience</h5>
        <p className='small'>
          Include your relevant experience from the last 10 years and dates in
          this section. List your most recent position first.
        </p>
        {values.experience.map((experience: experienceProps, idx: number) => (
          <div className='experience' key={idx}>
            <div className='form-wrapper'>
              <label>Job title</label>
              <input
                className='form'
                placeholder='e.g Frontend developer'
                type='text'
                onChange={(e) =>
                  setValues({
                    ...values,
                    experience: [{ ...experience, jobTitle: e.target.value }],
                  })
                }
              />
            </div>
            <div className='form-wrapper'>
              <label>Company/Employer</label>
              <input
                className='form'
                placeholder='Enter company name'
                onChange={(e) =>
                  setValues({
                    ...values,
                    experience: [
                      { ...experience, companyName: e.target.value },
                    ],
                  })
                }
              />
            </div>
            <div className='form-wrapper'>
              <label>Period</label>
              <div className='d-flex'>
                <input
                  className='form'
                  onChange={(e) =>
                    setValues({
                      ...values,
                      experience: [{ ...experience, start: e.target.value }],
                    })
                  }
                  placeholder='Start'
                />
                <div className='mx-2' />
                <input
                  className='form'
                  placeholder='End'
                  onChange={(e) =>
                    setValues({
                      ...values,
                      experience: [{ ...experience, end: e.target.value }],
                    })
                  }
                />
              </div>
            </div>
            <div className='form-wrapper'>
              <label>Location</label>
              <input
                className='form'
                placeholder='Enter location'
                onChange={(e) =>
                  setValues({
                    ...values,
                    experience: [{ ...experience, location: e.target.value }],
                  })
                }
              />
            </div>
            <textarea
              rows={4}
              cols={30}
              className='form'
              placeholder={`Write your professional overview here. Don't know what to write? Click on the CV Wizard to get started`}
              onChange={(e) =>
                setValues({
                  ...values,
                  experience: [{ ...experience, overview: e.target.value }],
                })
              }
            />
          </div>
        ))}

        <button className='primary-button' onClick={addExperience}>
          Add experience
        </button>
      </div>
    </>
  );
}

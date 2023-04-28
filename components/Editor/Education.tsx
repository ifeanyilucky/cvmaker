import React from 'react';
import { ResumeProps, educationProps } from '../../types/resume';

export default function Education({
  values,
  setValues,
}: {
  values: ResumeProps;
  setValues: React.Dispatch<React.SetStateAction<ResumeProps>>;
}) {
  // add education handler
  const addEducation = () => {
    setValues({
      ...values,
      education: [
        ...values.education,
        {
          start: '',
          end: '',
          school: '',
          degree: '',
          location: '',
          overview: '',
          id: `${Math.random()}`,
        },
      ],
    });
  };

  return (
    <>
      <div className='form-wrapper'>
        <h4 className='font-w-900'>Education</h4>
        <p className='small'>
          Include your relevant education from the last 10 years and dates in
          this section. List your most recent position first.
        </p>
        {values.education.map((education: educationProps, idx: number) => (
          <div className='education' key={idx}>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-wrapper'>
                  <label className='form-label text-muted '>School</label>
                  <input
                    className='form'
                    onChange={(e) =>
                      setValues({
                        ...values,
                        education: [{ ...education, school: e.target.value }],
                      })
                    }
                    placeholder='School name'
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-wrapper'>
                  <label className='form-label text-muted '>Degree</label>
                  <input
                    className='form'
                    placeholder='Enter your degree'
                    onChange={(e) =>
                      setValues({
                        ...values,
                        education: [{ ...education, degree: e.target.value }],
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-wrapper'>
                  <label className='form-label text-muted '>Location</label>
                  <input
                    className='form'
                    placeholder='e.g Lagos'
                    type='text'
                    onChange={(e) =>
                      setValues({
                        ...values,
                        education: [{ ...education, location: e.target.value }],
                      })
                    }
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-wrapper'>
                  <label className='form-label text-muted'>Period</label>
                  <div className='d-flex'>
                    <input
                      className='form'
                      onChange={(e) =>
                        setValues({
                          ...values,
                          education: [{ ...education, start: e.target.value }],
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
                          education: [{ ...education, end: e.target.value }],
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <textarea
              rows={4}
              cols={30}
              className='form'
              placeholder={`Enter your information about your education.`}
              onChange={(e) =>
                setValues({
                  ...values,
                  education: [{ ...education, overview: e.target.value }],
                })
              }
            />
          </div>
        ))}

        <button className='primary-button' onClick={addEducation}>
          Add education
        </button>
      </div>
    </>
  );
}

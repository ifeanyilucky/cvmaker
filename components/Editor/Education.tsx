import React from 'react';
import { ResumeProps, educationProps } from '../../types/resume';

export default function Education({
  values,
  setValues,
}: {
  values: ResumeProps;
  setValues: React.Dispatch<React.SetStateAction<ResumeProps>>;
}) {
  const [education, setEducation] = React.useState<educationProps>({
    degree: '',
    end: '',
    location: '',
    school: '',
    start: '',
    overview: '',
    id: `${Math.random()}`,
  });
  // add education handler
  const addEducation = () => {
    setValues({ ...values, education: [...values.education, education] });

    setEducation({
      degree: '',
      end: '',
      location: '',
      school: '',
      start: '',
      overview: '',
      id: `${Math.random()}`,
    });
  };

  const onRemove = (id) => {
    setValues({
      ...values,
      education: values.education.filter((exp) => exp.id !== id),
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
        {/* {values.education.map((education: educationProps, idx: number) => ( */}
        <div className='education'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-wrapper'>
                <label className='form-label text-muted '>School</label>
                <input
                  className='form'
                  value={education.school}
                  onChange={(e) =>
                    setEducation({ ...education, school: e.target.value })
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
                  value={education.degree}
                  onChange={(e) =>
                    setEducation({ ...education, degree: e.target.value })
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
                  value={education.location}
                  type='text'
                  onChange={(e) =>
                    setEducation({ ...education, location: e.target.value })
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
                    value={education.start}
                    onChange={(e) =>
                      setEducation({ ...education, start: e.target.value })
                    }
                    placeholder='Start'
                  />
                  <div className='mx-2' />
                  <input
                    className='form'
                    placeholder='End'
                    value={education.end}
                    onChange={(e) =>
                      setEducation({ ...education, end: e.target.value })
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
            value={education.overview}
            placeholder={`Enter your information about your education.`}
            onChange={(e) =>
              setEducation({ ...education, overview: e.target.value })
            }
          />
        </div>
        {/* ))} */}

        <button className='primary-button mt-3' onClick={addEducation}>
          Submit
        </button>
        <div className='my-3'>
          <div className='tag-wrapper'>
            {values.education.map((exp) => (
              <div key={exp.id} className='tag'>
                <strong>{exp.degree}</strong>, {exp.school}
                <button onClick={() => onRemove(exp.id)}>x</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

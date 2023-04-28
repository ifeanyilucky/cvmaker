import React from 'react';
import styled from 'styled-components';
import { ResumeProps } from '../../types/resume';

export default function Borderless({ values }: { values: ResumeProps }) {
  return (
    <Wrapper>
      <div className='header'>
        <div className='title'>
          <p>{values.position}</p>
        </div>
        <h3 className='display-6 font-w-700'>
          {values.firstName} {values.lastName}
        </h3>
        <p className='paragraph pt-3'>{values.biography}</p>
        <hr />
      </div>
      <div className='content'>
        <div className='row justify-content-between'>
          <div className='col-7'>
            <div className='title mb-3'>
              <p>Experience</p>
            </div>
            {values.experience.map((exp, index) => (
              <div className='experience' key={index}>
                <div className='d-flex justify-content-between'>
                  <p>
                    <strong>{exp.jobTitle}</strong>
                  </p>
                  <p>
                    {exp.start} - {exp.end}
                  </p>
                </div>
                <p>
                  {exp.companyName}, {exp.location}
                </p>
                <p className='text-muted'>{exp.overview}</p>
              </div>
            ))}
          </div>
          <div className='col-4'>
            <div className='title mb-3'>
              <p>Education</p>
            </div>
            {values.education.map((edu, idx: number) => (
              <div className='degree' key={idx}>
                <p>
                  <strong>{edu.degree}</strong>
                </p>
                <p className='text-muted'>
                  {edu.school}, {edu.location} / {edu.start} - {edu.end}
                </p>
                <p className='text-muted'>{edu.overview}</p>
              </div>
            ))}
            <div className='skills'>
              <div className='title'>
                <p>SKILLS</p>
              </div>
              <p className='pt-3'>
                <div className='row'>
                  {values.skills.map((skill, idx) => (
                    <div className='col-6' key={idx}>
                      <div>{skill}</div>
                    </div>
                  ))}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fff;
  overflow: hidden;
  /* border: 1px solid black; */
  height: 842px;
  width: 595px;
  min-width: 595px;
  min-height: 842px;
  /* transform: s); */
  .header {
    padding: 1rem 1.6rem;

    h3 {
      letter-spacing: 4px;
      font-weight: 600;
    }
  }
  p {
    font-size: 11px;
  }

  .content {
    padding: 1.6rem;
  }
  .title {
    border: 2px solid #242424;
    padding: 7px 10px;
    display: inline-block;
    text-transform: uppercase !important;
    font-weight: 700;
    p {
      margin: 0 !important;
      padding: 0 !important;
      text-align: center;
      letter-spacing: 5px;
    }
  }
  @media print {
    .content {
      .title {
        background-color: #242424 !important;
        print-color-adjust: exact;
        -webkit-print-color-adjust: exact;
      }
    }
    .header {
      background-color: #242424 !important;
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
    }
  }
`;

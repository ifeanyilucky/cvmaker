import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ResumeProps } from '../types/resume';
import Editor from './Editor';

export default function Textarea({
  placeholder,
  setValues,
  values,
  classNames,
  textToComplete,
}: {
  placeholder: string;

  values: ResumeProps;
  setValues: React.Dispatch<React.SetStateAction<ResumeProps>>;
  classNames: string;
  textToComplete: string;
}) {
  const [completedTyping, setCompletedTyping] = React.useState(false);
  const [completedText, setCompletedText] = React.useState('');

  const generateText = async () => {
    setCompletedTyping(true);

    await axios
      .post('/api/completion-ai', { text: textToComplete })
      .then(({ data }) => {
        setCompletedText(data.message);
        setValues({ ...values, biography: data.message });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Wrapper>
      <div className='textarea-wrapper'>
        <input
          placeholder={placeholder}
          className={classNames}
          onChange={(e) => setValues({ ...values, biography: e.target.value })}
          // value={completedText || values.biography}
        />
        <Editor placeholder={'Write something...'} />
        <span>
          {!completedTyping && (
            <svg
              viewBox='8 4 8 16'
              xmlns='http://www.w3.org/2000/svg'
              className='cursor'
            >
              <rect x='10' y='6' width='4' height='12' fill='#2c2c2c' />
            </svg>
          )}
        </span>
        <button onClick={generateText}>Generate</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  .textarea-wrapper {
    width: 100%;
    height: 200px;
    border: 1px solid #f0f0f0;
    padding: 10px;

    input {
      /* width: 100%; */
      /* height: 100%; */
      padding: 0 10px;
      outline: none;
      border: none;
      padding: 0;
    }
  }
  .cursor {
    display: inline-block;
    width: 1ch;
    animation: flicker 0.5s infinite;
    margin-top: 4px;
  }
  @keyframes flicker {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

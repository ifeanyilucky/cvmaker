import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function Textarea({
  placeholder,
  onChange,
  classNames,
}: {
  placeholder: string;
  onChange: any;
  classNames: string;
}) {
  const [completedTyping, setCompletedTyping] = React.useState(false);
  const [completedText, setCompletedText] = React.useState('');

  const generateText = async () => {
    setCompletedTyping(true);

    await axios
      .post('/api/completion-ai', { text: '' })
      .then((res) => {
        console.log(res);
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
          onChange={onChange}
        />
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
  .textarea-wrapper {
    width: 100%;
    height: 200px;
    border: 1px solid #f0f0f0;
    padding: 10px;

    input {
      width: 100%;
      height: 100%;
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

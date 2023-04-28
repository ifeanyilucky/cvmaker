import React from 'react';
import styled from 'styled-components';

export default function Textarea({ others }: { others: any }) {
  const [completedTyping, setCompletedTyping] = React.useState(false);
  return (
    <Wrapper>
      <div className='textarea-wrapper'>
        <input {...others} />
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

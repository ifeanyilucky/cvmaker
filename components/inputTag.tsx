import React from 'react';
import styled from 'styled-components';
import { ResumeProps } from '../types/resume';

export default function InputTag({
  values,
  setValues,
  placeholder,
  classNames,
}: {
  values: ResumeProps;
  setValues: React.Dispatch<React.SetStateAction<ResumeProps>>;
  placeholder: string;
  classNames: string;
}) {
  const [input, setInput] = React.useState<string>('');
  const [isKeyReleased, setIsKeyReleased] = React.useState(false);

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput: string = input.trim();

    if (
      key === ',' &&
      trimmedInput.length &&
      !values.skills.includes(trimmedInput)
    ) {
      e.preventDefault();
      setValues({
        ...values,
        skills: [...values.skills, trimmedInput],
      });

      setInput('');
    }

    if (
      key === 'Backspace' &&
      !input.length &&
      values.skills.length &&
      isKeyReleased
    ) {
      const tagsCopy = [...values.skills];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      setValues({ ...values, skills: tagsCopy });
      //   setTags(tagsCopy);
      setInput(poppedTag);
    }

    setIsKeyReleased(false);
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  };
  const deleteTag = (index) => {
    // setTags((prevState) => prevState.filter((tag, i) => i !== index));
    setValues({
      ...values,
      skills: values.skills.filter((skill, i) => i !== index),
    });
  };
  return (
    <TagWrapper>
      <input
        value={input}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        className={classNames}
        onChange={(e) => {
          const { value } = e.target;
          setInput(value);
        }}
      />
      <span className='small text-muted'>
        Use the comma symbol to enter more skills e.g &quot;React, Python,
        Dart&quot;
      </span>
      <div className='tags mt-3'>
        {values.skills.map((tag, index) => (
          <div className='tag mx-1 my-1' key={index}>
            {tag}
            <button onClick={() => deleteTag(index)}>x</button>
          </div>
        ))}
      </div>
    </TagWrapper>
  );
}

const TagWrapper = styled.div`
  .tags {
    display: flex;
    flex-wrap: wrap;
    .tag {
      background-color: #f0f0f0;
      color: #000;
      padding: 6px 10px;
      font-size: 12px;
      border-radius: 30px;
      button {
        margin-left: 10px;
        color: #fff;
        background: red;
        border-radius: 12px;
      }
    }
  }
`;

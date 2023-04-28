import React from 'react';
import styled from 'styled-components';
import { ResumeProps } from '../types/resume';

export default function InputTag({
  values,
  setValues,
}: {
  values: ResumeProps;
  setValues: React.Dispatch<React.SetStateAction<ResumeProps>>;
}) {
  const [tags, setTags] = React.useState<Array<string>>([]);
  const [input, setInput] = React.useState<string>('');
  const [isKeyReleased, setIsKeyReleased] = React.useState(false);

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();

    if (key === ',' && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      setValues({
        ...values,
        skills: (prevState: string[]) => [...prevState, trimmedInput],
      });
      console.log(values.skills);
      //   setTags((prevState) => [...prevState, trimmedInput]);
      setInput('');
    }

    if (key === 'Backspace' && !input.length && tags.length && isKeyReleased) {
      const tagsCopy = [...tags];
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
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
  };
  return (
    <TagWrapper>
      <input
        value={input}
        placeholder='Enter a tag'
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onChange={(e) => {
          const { value } = e.target;
          setInput(value);
        }}
      />
      {tags.map((tag, index) => (
        <div className='tag' key={index}>
          {tag}
          <button onClick={() => deleteTag(index)}>x</button>
        </div>
      ))}
    </TagWrapper>
  );
}

const TagWrapper = styled.div``;

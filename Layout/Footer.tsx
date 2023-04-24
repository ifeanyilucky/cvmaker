import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Wrapper>
      <footer className='pt-4 pb-3 text-center'>
        <p>
          Built with 💛 by <strong>Codack</strong>
        </p>
      </footer>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  background-color: #000 !important;
  color: #8a8a8a;
  margin-bottom: 0 !important;
`;

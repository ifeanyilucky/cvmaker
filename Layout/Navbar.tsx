import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname) setOpen(false);
  }, [pathname]);

  return (
    <Wrapper>
      <div className='container py-4'>
        <nav>
          <div className='nav-logo'>
            <h3 className='font-w-700'>CVmaker</h3>
          </div>
          <ul className='nav-list'>
            <li className='nav-item'>
              <Link href='/'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link href='/examples'>CV Examples</Link>
            </li>
            <li className='nav-item'>
              <Link href='/templates'>CV Template</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .nav-list {
      display: flex;
      flex-flow: row;
      list-style: none;
      .nav-item {
        margin: 0 10px;
      }
    }
  }
`;

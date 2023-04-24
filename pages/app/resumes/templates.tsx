import React from 'react';
import Page from '../../../Layout/Page';
import { Borderless, Minimmal, Simmple } from '../../../components/templates';

export default function Templates() {
  return (
    <>
      <Page title='CV Templates' />
      <div className='container'>
        {/* <MinimaTemplate /> */}
        {/* <Simmple /> */}
        <Borderless />
      </div>
    </>
  );
}

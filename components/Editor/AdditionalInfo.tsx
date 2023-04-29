import React from 'react';
import { ResumeProps } from '../../types/resume';

export default function AdditionalInfo({
  values,
  setValues,
}: {
  values: ResumeProps;
  setValues: React.Dispatch<React.SetStateAction<ResumeProps>>;
}) {
  return (
    <>
      <div className='row'>
        <div className='col-md-6'>
          <div className='form-wrapper'>
            <label className='form-label text-muted'>Phone number</label>
            <input
              type='text'
              placeholder='Phone number'
              className='form'
              onChange={(e) =>
                setValues({ ...values, phoneNumber: e.target.value })
              }
            />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='form-wrapper'>
            <label className='form-label text-muted'>Address</label>
            <input
              type='text'
              placeholder='Address'
              className='form'
              onChange={(e) =>
                setValues({ ...values, address: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='form-wrapper'>
            <label className='form-label text-muted'>Website</label>
            <input
              type='text'
              placeholder='Website'
              className='form'
              onChange={(e) =>
                setValues({ ...values, website: e.target.value })
              }
            />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='form-wrapper'>
            <label className='form-label text-muted'>LinkedIn</label>
            <input
              type='text'
              placeholder='LinkedIn'
              className='form'
              onChange={(e) =>
                setValues({ ...values, linkedIn: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

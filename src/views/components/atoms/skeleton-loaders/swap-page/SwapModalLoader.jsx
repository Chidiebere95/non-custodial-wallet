import React from 'react';
import '../../../../../assets/scss/atoms.scss';

const SwapModalLoader = () => {
  return (
    <>
      <div className='swap-modal-loader shadow-sm'>
        <div className='card-top'>
          <div className='profile-photo skeleton-loader'></div>
          <div className='card-details'>
            <div className='name skeleton-loader'></div>
            <div className='details skeleton-loader'></div>
          </div>
        </div>
      </div>
      <div className='swap-modal-loader shadow-sm'>
        <div className='card-top'>
          <div className='profile-photo skeleton-loader'></div>
          <div className='card-details'>
            <div className='name skeleton-loader'></div>
            <div className='details skeleton-loader'></div>
          </div>
        </div>
      </div>
      <div className='swap-modal-loader shadow-sm'>
        <div className='card-top'>
          <div className='profile-photo skeleton-loader'></div>
          <div className='card-details'>
            <div className='name skeleton-loader'></div>
            <div className='details skeleton-loader'></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SwapModalLoader;

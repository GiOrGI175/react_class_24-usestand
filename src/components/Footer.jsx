import React from 'react';
import useCounterStore from '../store/store';

const Footer = () => {
  const { increment, decrement } = useCounterStore();
  return (
    <div className='mt-10'>
      <button
        className='px-4 py-2 bg-blue-500 text-white rounded mr-2'
        onClick={increment}
      >
        incr
      </button>
      <button
        className='px-4 py-2 bg-red-500 text-white rounded mr-2 '
        onClick={decrement}
      >
        decr
      </button>
    </div>
  );
};

export default Footer;

import React from 'react';
import useCounterStore from '../store/store';

const counter = () => {
  // const { count, increment, decrement } = useCounterStore();

  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div className='p-4 bg-white rounded shadow-md'>
      <h2 className='text-2xl font-bold mb-4'>count-({count})</h2>
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

export default counter;

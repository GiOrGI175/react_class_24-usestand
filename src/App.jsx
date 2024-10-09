import React from 'react';
import Counter from './components/Counter';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h2>counter</h2>
      <Counter />
      <Footer />
    </div>
  );
}

export default App;

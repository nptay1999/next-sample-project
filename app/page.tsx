import React from 'react';

import Input from '../components/forms/Input';
import TitleComponent from '../components/TitleComponent';

const page = () => {
  return (
    <div className="home">
      <TitleComponent name="Hello" />
      <Input />
      <div className="flex items-center space-x-3 mt-12">
        <button className="bg-white shadow-md text-black p-3 w-28">-</button>
        <span className="text-xs text-black">1</span>
        <button className="bg-white shadow-md text-black p-3 w-28">+</button>
      </div>
    </div>
  );
};

export default page;

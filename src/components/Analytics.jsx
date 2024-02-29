import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4 rounded-md' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>DATA LABELLING DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Label Your Data Easily</h1>
          <p>
            We have developed a github project which labels your data with the Triple Barrier Method.
            Accurate labeling of financial data ensures better model performance and informs investment decisions.
            Remember that choosing the right labeling strategy is crucial for successful machine learning in finance.
          </p>
          <a href="https://github.com/bhavithran1/Crypto-Data-Labeller">
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
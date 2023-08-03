import React from 'react';
import './Loading.css';
import { MagnifyingGlass } from 'react-loader-spinner'

const Loader = () => {
  
  return (
    <div className='container'>
      <div className="loader">
        <MagnifyingGlass
          visible={true}
          height="180"
          width="180"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor = '#c0efff'
          color = '#e15b64'
        />
      </div>
    </div>
  );
};

export default Loader;

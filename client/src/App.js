import React, { Component } from 'react';

import FileUpload from './components/fileUpload';


  const App = () => {

    return (
     <div className='container mt-4'>
       <h4 className='display-4 text-center mb-4'>
         <i className='fa fa-react'>
         React File Upload
         </i>
       </h4>
      <FileUpload />
     </div>
  );
}


export default App;

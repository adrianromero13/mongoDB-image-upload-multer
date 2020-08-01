import React, { Fragment, useState } from 'react'

// to make request bring in axios
import axios from 'axios';

const FileUpload = () => {
//
const [file, setFile] = useState('');
const [fileName, setFileName] = useState('Choose File');
// state for uploaded fime
const [uploadedFile, setUploadedFile] = useState({}); // object being sent to server fileName: file.name

// set up on change event
const onChange = e => {
  setFile(e.target.files[0]); // zero since only one file will be chosen
  setFileName(e.target.files[0].name);
};

// set up on submit
const onSubmit = async e => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('file', file); // this is req.files.file (from backend)
  // wrap async await axios function in try catch

  try {
    const res = await axios.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    const { fileName, filePath } = res.data;

    setUploadedFile({ fileName, filePath });
  } catch (err) {
    if(err.response.satus === 500) {
      console.log('there was a problem with server');
    } else {
      console.log(err);
    }
  }
};




  return (
    <Fragment>
      <form onSubmit={onSubmit}>

        <div className='custom-file mb-4'>
          <input
          type='file'
          className='custom-file-input'
          id='customFile'
          onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {fileName} 
          </label>
        </div>
        <input 
        type='submit' 
        value='Upload'
        className='btn btn-primary btn-block mt-4'
        />
      </form>
      {/* conditional ternary */}
      {uploadedFile ? (
      <div className='row mt-5'>
        <div className='col-md-6 m-auto'>
          <h3 className='text-center'>
            { uploadedFile.fileName }
          </h3>
          <img src={uploadedFile.filePath} style={{ width: '100%' }} alt=''/>
        </div>
      </div> 
      ) : null} 
    </Fragment>
  );
};

export default FileUpload;

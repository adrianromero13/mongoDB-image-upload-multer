import React, { Fragment, useState } from 'react'

const FileUpload = () => {



  return (
    <Fragment>
      <form>

        <div className='custom-file mb-4'>
          <input
          type='file'
          className='custom-file-input'
          id='customFile'
          />
          <label className='custom-file-label' htmlFor='customFile'>
            Choose file
          </label>
        </div>
        <input 
        type='submit' 
        value='Upload'
        className='btn btnprimary btn-block mt-4'
        />
      </form>
    </Fragment>
  )
}

export default FileUpload;
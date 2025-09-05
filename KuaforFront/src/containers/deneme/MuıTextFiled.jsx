import React from 'react'
import TextField from '@mui/material/TextField';


function MuıTextFiled() {
  return (
    <>
    
    <div className='mbottom'>
        <TextField variant='outlined' label="Email" />
    

    </div >
    <div className='mbottom'>
        <TextField variant='filled' label="İsim" />
    </div>

    <div className='mbottom'>
        <TextField variant='standard' label="Soyisim" />
    </div>
    
    </>
   
    
  )
}

export default MuıTextFiled
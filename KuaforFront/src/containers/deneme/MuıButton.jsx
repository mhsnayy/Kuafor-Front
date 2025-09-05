import Button from '@mui/material/Button'
import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';


function MuıButton() {
  return (
    <div className='mbottom'>
    
    <Button variant='contained' size='small' color='inherit' >Button</Button>
    <Button variant='contained' size='medium' >Button</Button>
    <Button variant='contained' size='large' >Button</Button>
    <Button variant='contained' size='large' startIcon={<LoginIcon/>}>Giriş Yap</Button>
    <Button variant='contained' size='large' endIcon={<LogoutIcon/>}>Çıkış Yap</Button>
    
    </div>
  )
}

export default MuıButton
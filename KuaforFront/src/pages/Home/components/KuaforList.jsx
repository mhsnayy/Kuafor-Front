import React from 'react'
import KuaforCard from "./KuaforCard"
import Grid from '@mui/material/Grid';


function KuaforList() {
  return (
    <>
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm:6, md: 6, lg:4 }}>
        <KuaforCard/>
      </Grid>
      <Grid size={{ xs: 12, sm:6, md: 6, lg:4 }}>
        <KuaforCard/>
      </Grid>
      <Grid size={{ xs: 12, sm:6, md: 6, lg:4 }}>
        <KuaforCard/>
      </Grid>
      
       
    </Grid>
      
        
    </>
  )
}

export default KuaforList
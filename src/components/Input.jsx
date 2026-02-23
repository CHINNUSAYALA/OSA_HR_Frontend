import { TextField } from '@mui/material'
import React from 'react'

const Input = (props) => {
  return (
    <TextField id="outlined-basic" label="Outlined" variant="outlined" {...props} />
  )
}

export default Input

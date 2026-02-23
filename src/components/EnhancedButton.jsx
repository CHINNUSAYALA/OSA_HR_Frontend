import React from 'react'
import { Button } from '@mui/material';


const EnhancedButton = (props) => {
    const { label = "" } = props;
  return (
    <Button variant="contained" {...props}>{label}</Button>
  )
}

export default EnhancedButton

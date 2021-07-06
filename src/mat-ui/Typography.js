import React from 'react';
import Typography from '@material-ui/core/Typography';
// or
//destructure make less performance issue
//import { Typography } from '@material-ui/core';

const TypographyUI = () => {
  return (
    <>
      <h5>Typography UI</h5>
      <Typography variant="h1" component="h2" gutterBottom>
        h1. Heading
      </Typography>
    </>
  );
};

export default TypographyUI;

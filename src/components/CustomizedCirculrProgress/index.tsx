import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from '@mui/material/CircularProgress';

interface ICustomizedProgressBars {
    size: number;
}

function CustomCircularProgress({size, ...props}: CircularProgressProps) {
  return (
    <Box sx={{ marginTop: '2px' }}>
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: '#fff',
          animationDuration: '500ms',
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={size}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

export default function CustomizedProgressBars({size}: ICustomizedProgressBars) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomCircularProgress size={size}/>
    </Box>
  );
}

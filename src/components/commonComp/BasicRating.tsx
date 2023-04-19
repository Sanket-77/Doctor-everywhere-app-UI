import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating(props:any) {
    console.log("props in rating => ", props)
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Ratng common component</Typography>
      <Rating
        name="simple-controlled"
        value={props.RatingValue}
      />
    </Box>
  );
}
import { fabric } from 'fabric';
import React, { useContext, useEffect, useRef } from 'react';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

import BLANK from '../images/blank.jpg';
import { DataContext } from './DataProvider';

const Preview = () => {
  const { state } = useContext(DataContext)
  console.log(state)
  return (
    <Card >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            你的專屬{state.style}
          </Typography>
          <img src={state.preview} />
          <Typography variant="body2" color="textSecondary" component="p">
            材質：{state.material}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            顏色：{state.color}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            款式：{state.style}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            版型：{state.layout}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            領口：{state.neckline}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            尺寸：{state.size}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            包裝：{state.package}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Preview

import React from 'react';
import styled from 'styled-components';

import { Box, GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const Tile = styled(GridListTile)`
  border: ${props => props.active === 'true' ? '2px solid #fb8521' : null}
`

const ImagePicker = ({ onPick, collection }) => {
  const [active, setActive] = React.useState(null)

  const onClick = item => {
    setActive(item.label)
    onPick(item.img)
  }

  return (
    <Box height="100%">
      <GridList cellHeight={180}>
        {collection.map(item => (
          <Tile key={item.label} active={(item.label === active).toString()} onClick={() => onClick(item)}>
            <img src={item.img} />
          </Tile>
        ))}
      </GridList>
    </Box>
  )
}

export default ImagePicker

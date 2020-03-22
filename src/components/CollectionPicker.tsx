import React from 'react';
import styled from 'styled-components';

import { Box, GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const Tile = styled(GridListTile)`
  border: ${props => props.active === 'true' ? '2px solid #fb8521' : null}
`

const CollectionPicker = ({ onPick, collection }) => {
  const [active, setActive] = React.useState(null)

  const onClick = item => {
    setActive(item)
    onPick(item)
  }

  return (
    <Box height="100%">
      <GridList cellHeight={180}>
        {collection.map(item => (
          <Tile key={item} active={(item === active).toString()} onClick={() => onClick(item)}>
            <img src="https://placekitten.com/300/300" />
            <GridListTileBar title={item} />
          </Tile>
        ))}
      </GridList>
    </Box>
  )
}

export default CollectionPicker

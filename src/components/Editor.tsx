import React, { useContext } from 'react';
import styled from 'styled-components';

import { Box, Button, MobileStepper, Paper, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import CollectionPicker from './CollectionPicker';
import { DataContext } from './DataProvider';
import ImagePicker from './ImagePicker';
import Preview from './Preview';
import TextEditor from './TextEditor';

const steps = [
  {
    title: '選擇材質',
    key: 'material',
    collection: ['美國棉', '精梳棉', '刷毛布', '竹節布']
  },
  {
    title: '選擇顏色',
    key: 'color',
    collection: ['白', '黑', '灰', '米', '粉', '藍']
  },
  {
    title: '選擇款式',
    key: 'style',
    collection: ['短袖T恤', '長袖T恤', '大學服', '帽Tee']
  },
  {
    title: '選擇版型',
    key: 'layout',
    collection: ['一般', '合身', '寬鬆']
  },
  {
    title: '選擇領口',
    key: 'neckline',
    collection: ['圓領', 'V領', 'U領']
  },
  {
    title: '選擇圖片',
    key: 'photo',
    collection: [
      {
        label: '01',
        img: require('../images/products/01.png'),
      },
      {
        label: '02',
        img: require('../images/products/02.png'),
      },
      {
        label: '03',
        img: require('../images/products/03.png'),
      },
      {
        label: '04',
        img: require('../images/products/04.png'),
      },
      {
        label: '05',
        img: require('../images/products/05.png'),
      },
      {
        label: '06',
        img: require('../images/products/06.png'),
      },
      {
        label: '07',
        img: require('../images/products/07.png'),
      },
      {
        label: '08',
        img: require('../images/products/08.png'),
      },
    ]
  },
  {
    title: '選擇尺寸',
    key: 'size',
    collection: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    title: '追加小標語',
    key: 'text',
  },
  {
    title: '選擇包裝方式',
    key: 'package',
    collection: ['包裝加構', '紙盒精裝', '品牌提袋']
  },
  {
    title: '預覽',
    key: 'preview',
  },
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
    },
    img: {
      height: 255,
      maxWidth: 400,
      overflow: 'hidden',
      display: 'block',
      width: '100%',
    },
  }),
);


const Editor = () => {
  const classes = useStyles()
  const theme = useTheme()
  const { state, dispatch } = useContext(DataContext)
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = steps.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const onPick = item => {
    switch (activeStep) {
      case 0:
        dispatch({ type: 'SELECT_MATERIAIL', material: item})
        break;
      case 1:
        dispatch({ type: 'SELECT_COLOR', color: item})
        break;
      case 2:
        dispatch({ type: 'SELECT_STYLE', style: item})
        break;
      case 3:
        dispatch({ type: 'SELECT_LAYOUT', layout: item})
        break;
      case 4:
        dispatch({ type: 'SELECT_NECKLINE', neckline: item})
        break;
      case 5:
        dispatch({ type: 'SELECT_PHOTO', photo: item})
        break;
      case 6:
        dispatch({ type: 'SELECT_SIZE', size: item})
        break;
      case 7:
        dispatch({ type: 'SELECT_TEXT', text: item})
        break;
      case 8:
        dispatch({ type: 'SELECT_PACKAGE', package: item})
        break;
    }
  }

  return (
    <Box paddingTop={10}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{steps[activeStep].title}</Typography>
      </Paper>
      <Box paddingBottom={10}>
        { activeStep === 5 && <ImagePicker onPick={onPick} collection={steps[activeStep].collection} /> }
        { activeStep === 7 && <TextEditor onPick={onPick} text={state.text} /> }
        { activeStep !== 5 && activeStep !== 7 && activeStep !== 9 && <CollectionPicker onPick={onPick} collection={steps[activeStep].collection} /> }
        { activeStep === 9 && <Preview /> }
      </Box>
      <MobileStepper
        steps={maxSteps}
        position="bottom"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1 || state[steps[activeStep].key] === null}>
            下一步
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            上一步
          </Button>
        }
      />
    </Box>
  )
}

export default Editor

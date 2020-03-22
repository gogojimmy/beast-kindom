import { fabric } from 'fabric';
import React, { useContext, useEffect, useRef, useState } from 'react';

import { Box } from '@material-ui/core';

import BLANK from '../images/blank.jpg';
import { DataContext } from './DataProvider';

const TextEditor = ({ onPick, text }) => {
  const [value, setValue] = useState(text)
  const canvas = useRef(null)
  const { state } = useContext(DataContext)

  useEffect(() => {
    if (canvas) {
      const canvasEl = canvas.current
      const width = 375
      const height = width

      let el = new fabric.Canvas('canvas')
      el.setWidth(width)
      el.setHeight(height)

      fabric.Image.fromURL(BLANK, img => {
        var oImg = img.set({ left: 0, top: 0, scaleX: el.width / img.width, scaleY: el.height / img.height});
        el.setBackgroundImage(oImg, el.renderAll.bind(el))
      })

      fabric.Image.fromURL(state.photo, img => {
        var oImg = img.set({ left: 0, top: 0, scaleX: 0.4, scaleY: 0.4});
        oImg.hasControls = false;
        oImg.selectable = false
        el.add(oImg)
        el.centerObject(oImg)
      })

      var textBox = new fabric.Textbox(value, {
        fontFamily: 'Comic Sans',
        fontSize: 20,
        width: 150,
        left: (width - 150) / 2,
        top: 300,
        hasControls: false,
        editingBorderColor: '#fb8521',
        textAlign: 'center'
      })
      el.add(textBox)
      // el.centerObject(textBox)
      el.setActiveObject(textBox)
      el.renderAll()

      el.on('text:changed', e => {

        console.log('text:changed', e.target.text)
        setValue(e.target.text)
        const img = el.toDataURL('png')
        onPick(img)
      })
    }
  })

  return (
    <div>
      <canvas ref={canvas} id="canvas" />
    </div>
  )

}

export default TextEditor

import React from 'react';
import { Props } from './types';
import { ControlsConfig } from '../../controls-config';
import { PrettoSlider } from '../slider/slider';
export const Controls = React.memo(function Controls({
  saveImageHandler,
  coorXCanvas,
  coorYCanvas,
  setColor,
  setDrawingTool,
  setLineWidth,
  setHeight,
  setWidth,
  width,
  height,
  clearCanvas,
}: Props): JSX.Element {
  const handleColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.currentTarget.value);
  };

  const handleLineWidth = (
    event: React.ChangeEvent<{ textContent?: string }>
  ) => {
    event.target.textContent
      ? setLineWidth(+event.target.textContent)
      : setLineWidth(6);
  };

  const handleWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    if (+target.value > +target.max) {
      setWidth(+target.max - 10);
    } else {
      setWidth(+target.value);
    }
  };

  const handleHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    if (+target.value > +target.max - 170) {
      setHeight(+target.max - 170);
    } else {
      setHeight(+target.value);
    }
  };

  const handleChoosePencil = () => {
    setDrawingTool(ControlsConfig.pencil);
  };

  const handleChooseEraser = () => {
    setDrawingTool(ControlsConfig.eraser);
  };

  return (
    <div id='controls'>
      <div id='clear' className='container container-size'>
        <button
          id='clear-canvas'
          className='btn btn-primary'
          onClick={clearCanvas}
        >
          Clear
        </button>
        <button
          id='save-canvas'
          className='btn btn-success'
          onClick={saveImageHandler}
        >
          Save
        </button>
        <p className='names'>Setting</p>
      </div>
      <div id='size' className='container cont-size'>
        <p>
          <label>Width</label>
          <input
            type='number'
            id='canvas-width'
            value={width}
            min='400'
            max={document.documentElement.clientWidth}
            className='input-number'
            onChange={handleWidth}
          />
        </p>
        <label>Height</label>
        <input
          type='number'
          id='canvas-width'
          value={height}
          min='400'
          max={document.documentElement.clientHeight}
          className='input-number'
          onChange={handleHeight}
        />
        <p className='names'>Size</p>
      </div>
      <div id='mouse-position' className='container cont-position'>
        <label>MouseX :</label> <label id='mouseX'>{coorXCanvas}</label>
        <label>MouseY :</label>
        <label id='mouseY'> {coorYCanvas}</label>
        <p className='names'>Position</p>
      </div>
      <div id='tools' className='container '>
        <div id='tools-images'>
          <img
            id='pencil'
            src={ControlsConfig.pencilPng}
            onClick={handleChoosePencil}
          />
          <img
            id='eraser'
            src={ControlsConfig.eraserPng}
            onClick={handleChooseEraser}
          />
        </div>
        <p className='names'>Tools</p>
      </div>
      <div id='tool-size' className='container cont-size'>
        <PrettoSlider
          valueLabelDisplay='auto'
          aria-label='pretto slider'
          defaultValue={6}
          step={1}
          min={2}
          max={15}
          onChange={handleLineWidth}
        />
        <p className='names'>Tool Size</p>
      </div>
      <div id='color' className='container '>
        <input type='color' onChange={handleColor} defaultValue='#333' />
        <p className='name'>Color</p>
      </div>
    </div>
  );
});

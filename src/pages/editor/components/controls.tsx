import React from 'react';
import { Props } from './controls-props';
import { defaultValue } from '../default-value';

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
  const handleColor = (event: React.MouseEvent<HTMLInputElement>) => {
    setColor(event.currentTarget.value);
  };

  const handleLineWidth = (event: any) => {
    setLineWidth(+event.target.value);
  };

  const handleWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (+event.target.value > +event.target.max) {
      setWidth(+event.target.max - 10);
    } else {
      setWidth(+event.target.value);
    }
  };

  const handleHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (+event.target.value > +event.target.max - 170) {
      setHeight(+event.target.max - 170);
    } else {
      setHeight(+event.target.value);
    }
  };

  const handleChoosePencil = () => {
    setDrawingTool(defaultValue.pencil);
  };

  const handleChooseEraser = () => {
    setDrawingTool(defaultValue.eraser);
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
            src={defaultValue.pencilPng}
            onClick={handleChoosePencil}
          />
          <img
            id='eraser'
            src={defaultValue.eraserPng}
            onClick={handleChooseEraser}
          />
        </div>
        <p className='names'>Tools</p>
      </div>
      <div id='tool-size' className='container '>
        <details open>
          <summary>Size</summary>
          <ul onClick={handleLineWidth}>
            <li id='small' value={6}>
              Small
            </li>
            <li id='middle' value={10}>
              Middle
            </li>
            <li id='big' value={14}>
              Big
            </li>
          </ul>
        </details>
        <p className='names'>Tool Size</p>
      </div>
      <div id='color' className='container '>
        <input type='color' onMouseLeave={handleColor} defaultValue='#333' />
        <p className='name'>Color</p>
      </div>
    </div>
  );
});

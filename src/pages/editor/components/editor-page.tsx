import React, { useCallback, useState } from 'react';
import TopBarNavigation from '../../../core/components/top-nav-bar/top-bar-nav';
import './styles.css';
import eraser from '../../../assets/icons/eraser.png';
import pencil from '../../../assets/icons/pencil.png';
import { useDispatch } from 'react-redux';
import { saveImageCanvas } from '../../../core/thunks/editor';
import { useAlert } from 'react-alert';

export const EditorPage = React.memo(function EditorPage(): JSX.Element {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const contextCanvas = React.useRef<CanvasRenderingContext2D>(null);
  const dispatch = useDispatch();
  const alert = useAlert();
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000');
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(480);
  const [coorXCanvas, setCoorXCanvas] = useState(0);
  const [coorYCanvas, setCoorYCanvas] = useState(0);
  const [lineWidth, setLineWidth] = useState(6);
  const [drawingTool, setDrawingTool] = useState('pencil');

  const handleColor = useCallback((event) => {
    setColor(event.target.value);
  }, []);

  const handleLineWidth = (event: any) => {
    setLineWidth(event.target.value);
  };

  const handleWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (+event.target.value > +event.target.max) {
      setWidth(+event.target.max);
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

  const handleMouseDownCanvas = (
    event: React.MouseEvent<HTMLCanvasElement>
  ) => {
    setIsDrawing(true);
    handleMouseMoveCanvas(event);
  };

  const drawing = (color: string) => {
    contextCanvas.current.lineWidth = lineWidth;
    contextCanvas.current.lineCap = 'round';
    contextCanvas.current.strokeStyle = color;
    contextCanvas.current.lineTo(coorXCanvas, coorYCanvas);
    contextCanvas.current.stroke();
    contextCanvas.current.beginPath();
    contextCanvas.current.moveTo(coorXCanvas, coorYCanvas);
  };

  const handleMouseMoveCanvas = (
    event: React.MouseEvent<HTMLCanvasElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.round(event.clientX - rect.x + 1);
    const y = Math.round(event.clientY - rect.y + 1);
    setCoorXCanvas(x);
    setCoorYCanvas(y);
    contextCanvas.current = event.currentTarget.getContext('2d');

    switch (drawingTool) {
      case 'pencil':
        if (!isDrawing) return;
        else {
          drawing(color);
          break;
        }
      case 'eraser':
        if (!isDrawing) return;
        else {
          drawing('#fff');
          break;
        }
    }
  };

  const handleMouseUpCanvas = () => {
    setIsDrawing(false);
    contextCanvas.current.beginPath();
  };

  const handleLeaveMouseCanvas = () => {
    handleMouseUpCanvas();
    setCoorXCanvas(0);
    setCoorYCanvas(0);
  };

  const clearCanvas = () => {
    return (
      contextCanvas.current &&
      contextCanvas.current.clearRect(0, 0, +width, +height)
    );
  };

  const handleChoosePencil = () => {
    setDrawingTool('pencil');
  };

  const handleChooseEraser = () => {
    setDrawingTool('eraser');
  };

  const saveImageHandler = () => {
    dispatch(saveImageCanvas(canvasRef.current.toDataURL(), alert));
  };

  return (
    <div className='wrapper'>
      <TopBarNavigation />
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
            <img id='pencil' src={pencil} onClick={handleChoosePencil} />
            <img id='eraser' src={eraser} onClick={handleChooseEraser} />
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
      <div id='canvas-container'>
        <canvas
          ref={canvasRef}
          id='canvas'
          width={width}
          height={height}
          onMouseUp={handleMouseUpCanvas}
          onMouseMove={handleMouseMoveCanvas}
          onMouseDown={handleMouseDownCanvas}
          onPointerLeave={handleLeaveMouseCanvas}
        ></canvas>
      </div>
    </div>
  );
});

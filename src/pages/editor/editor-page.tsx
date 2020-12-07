import React, { useEffect, useRef, useState } from 'react';
import TopBarNavigation from '../../core/components/top-nav-bar/top-bar-nav';
import './styles.css';
import { useDispatch } from 'react-redux';
import { saveImageCanvas } from '../../core/thunks/editor';
import { useAlert } from 'react-alert';
import { Controls } from './components/controls';
import { defaultValue } from './default-value';
import { useLocation } from 'react-router-dom';
import { ListPhotos } from '../../core/interfaces/listPhotos';

export const EditorPage = React.memo(function EditorPage(): JSX.Element {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const contextCanvas = React.useRef<CanvasRenderingContext2D>(null);
  const dispatch = useDispatch();
  const location = useLocation<ListPhotos>();
  const alert = useAlert();

  const [color, setColor] = useState(defaultValue.blackColor);
  const [isDrawing, setIsDrawing] = useState(false);
  const [coorXCanvas, setCoorXCanvas] = useState(defaultValue.coordinateX);
  const [coorYCanvas, setCoorYCanvas] = useState(defaultValue.coordinateY);
  const [drawingTool, setDrawingTool] = useState(defaultValue.pencil);
  const [lineWidth, setLineWidth] = useState(defaultValue.lineWidth);
  const [width, setWidth] = useState(defaultValue.width);
  const [height, setHeight] = useState(defaultValue.height);
  const [elemListPhoto, setElemListPhoto] = useState<ListPhotos>({
    photo: '',
    fullPath: '',
  });

  useEffect(() => {
    contextCanvas.current = canvasRef.current.getContext('2d');
    if (location.state) {
      setElemListPhoto(location.state);
      const photo = new Image();
      photo.src = location.state.photo;

      contextCanvas.current.drawImage(photo, 0, 0);
    }
  }, []);

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
      case defaultValue.pencil:
        if (!isDrawing) return;
        else {
          drawing(color);
          break;
        }
      case defaultValue.eraser:
        if (!isDrawing) return;
        else {
          drawing(defaultValue.whiteColor);
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
    setCoorXCanvas(defaultValue.coordinateX);
    setCoorYCanvas(defaultValue.coordinateY);
  };

  const saveImageHandler = () => {
    dispatch(saveImageCanvas(canvasRef.current.toDataURL(), alert));
    clearCanvas();
  };

  const clearCanvas = () => {
    return (
      contextCanvas.current &&
      contextCanvas.current.clearRect(0, 0, +width, +height)
    );
  };

  return (
    <div className='wrapper'>
      <TopBarNavigation />
      <Controls
        saveImageHandler={saveImageHandler}
        coorXCanvas={coorXCanvas}
        coorYCanvas={coorYCanvas}
        clearCanvas={clearCanvas}
        setColor={setColor}
        setDrawingTool={setDrawingTool}
        setLineWidth={setLineWidth}
        setHeight={setHeight}
        setWidth={setWidth}
        height={height}
        width={width}
      />
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

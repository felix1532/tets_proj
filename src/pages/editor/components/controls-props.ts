export interface Props {
  canvasContext: React.MutableRefObject<CanvasRenderingContext2D>;
  saveImageHandler: () => void;
  coorXCanvas: number;
  coorYCanvas: number;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  setDrawingTool: React.Dispatch<React.SetStateAction<string>>;
  setLineWidth: React.Dispatch<React.SetStateAction<number>>;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  width: number;
  height: number;
}

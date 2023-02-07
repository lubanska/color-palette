export interface RgbType {
  r: number;
  g: number;
  b: number;
}

export interface HslType {
  h: number;
  s: number;
  l: number;
}

export interface ColorFormatType {
  hex: string;
  rgb: RgbType;
  hsl: HslType;
}

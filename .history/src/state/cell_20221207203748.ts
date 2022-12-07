export type CellType = 'code' | 'text';

export type Direction = 'up '

export interface Cell {
  id: string;
  type: 'code' | 'text';
  content: string;
}

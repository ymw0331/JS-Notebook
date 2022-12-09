export type CellTypes = 'code' | 'type'

export interface Cell {
  id: string;
  type: 'code' | 'text';
  content: string;
}

export type CellTypes = ''

export interface Cell {
  id: string;
  type: 'code' | 'text';
  content: string;
}

export interface Cell {
  id: string;
  type: 'code' | 'markdown';
  content: string;
}

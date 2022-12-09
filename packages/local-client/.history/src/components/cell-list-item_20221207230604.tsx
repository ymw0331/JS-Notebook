import { Cell } from '../state'
import CodeCell from './code-cell'
import Text

interface CellListItemProps {
  cell: Cell
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {

  return <div>{cell.id}</div>
}

export default CellListItem
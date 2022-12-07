import './add-cell.css'
import { useActions } from '../hooks/use-actions'
interface AddCellProps {
  nextCellId: string;
}

const AddCell: React.FC<AddCellProps> = ({ nextCellId }) => {
  const { insertCellBefore } = useActions()

  return (<div>
    <button></button>

  </div>)
}

export default AddCell
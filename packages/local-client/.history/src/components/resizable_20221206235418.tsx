import { ResizableBox } from 'react-resizable'

interface ResizableProps {
  direction: "horizontal" | "vertical";
  children?: React.ReactNode;
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  return (<ResizableBox>
    <div>{children}</div>
    </ResizableBox>
  )
}

export default Resizable; 
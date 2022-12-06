import "./resizable.css"
import { ResizableBox, ResizableBoxProps } from 'react-resizable'

interface ResizableProps {
  direction: "horizontal" | "vertical";
  children?: React.ReactNode;
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {

  let resizableProps: ResizableBoxProps;

  if (direction === 'horizontal') {
    resizableProps = {
    
    }
  } else {
    resizableProps = {

    }
  }

  return (
    <ResizableBox
     
    >
      {children}
    </ResizableBox>
  )
}

export default Resizable; 
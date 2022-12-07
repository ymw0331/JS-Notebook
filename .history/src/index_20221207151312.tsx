import 'bulmaswatch/superhero/bulmaswatch.min.css'
import ReactDOM from 'react-dom'
import CodeCell from './components/code-cell'
import Text

const App = () => {
  return (
    <div>
      <CodeCell />
    </div >
  )
}

ReactDOM.render(
  <App />
  , document.querySelector("#root")
)


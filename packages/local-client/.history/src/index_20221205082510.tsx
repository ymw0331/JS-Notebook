import { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  const [input, setInput] = useState();
  const [code, setCode] = useState

  return (<div>
    <textarea></textarea>
    <div>
      <button>Submit</button>
    </div>
    <pre>

    </pre>
  </div>)
}

ReactDOM.render(
  <App />
  , document.querySelector("#root")
)


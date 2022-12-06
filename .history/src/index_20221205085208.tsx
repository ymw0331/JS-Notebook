import * as esbuild from ''
import { useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {

  const [input, setInput] = useState<any>();
  const [code, setCode] = useState()

  const onClick = () => {
    console.log(input)

  }
  return (<div>
    <textarea value={input} onChange={(e) => setInput(e.target.value)} ></textarea>
    <div>
      <button onClick={onClick} >Submit</button>
    </div>
    <pre>
      {code}
    </pre>
  </div>)
}

ReactDOM.render(
  <App />
  , document.querySelector("#root")
)


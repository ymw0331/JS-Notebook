import ReactDOM from 'react-dom'

const App = () => {
  return (<div>
    <textarea></textarea>
    <div>
      <button>Submit</button>
    </div>
  </div>)
}

ReactDOM.render(
  <App />
  , document.querySelector("#root")
)


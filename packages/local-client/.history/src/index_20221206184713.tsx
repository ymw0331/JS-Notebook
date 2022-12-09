import 'bulmaswatch/superhero/bulmaswatch.min.css'
import * as esbuild from 'esbuild-wasm'
import { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin'
import { fetchPlugin } from './plugins/fetch-plugin'
import CodeEditor from './components/code-editor'

const App = () => {
  const ref = useRef<any>()
  const iframe = useRef<any>()
  const [input, setInput] = useState<any>('')

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm'
    })

  }
  useEffect(() => {
    startService()
  }, [])

  const onClick = async () => {
    if (!ref.current) {
      return;
    }
    // const result = await ref.current.transform(input, {
    //   loader: 'jsx',
    //   target: 'es2015'
    // });


    // Reset iframe
    iframe.current.srcdoc = html;

    const result = await ref.current.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [
        unpkgPathPlugin(),
        fetchPlugin(input)
      ],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window',
      }
    })

    // console.log(result)

    // setCode(result.outputFiles[0].text)
    iframe.current.contentWindow.postMessage(result.outputFiles[0].text, '*')
  }



  return (
    <div>
      <CodeEditor
        initialValue='const a = 1;'
        onChange={(value) => setInput(value)}
      />
      <textarea
        value={input}
        onChange={(e) =>
          setInput(e.target.value)
        }
      >
      </textarea>
      <div>
        <button onClick={onClick} >Submit</button>
      </div>
      <iframe title='preview' ref={iframe} sandbox="allow-scripts" srcDoc={html} />
    </div >
  )
}

ReactDOM.render(
  <App />
  , document.querySelector("#root")
)


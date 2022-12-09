import { useRef } from 'react'
import ManacoEditor, { EditorDidMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel'

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
  const editorRef = useRef<any>()

  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor
    monacoEditor.onDidChangeModelContent(() => {
      onChange(getValue())
    })

    monacoEditor.getModel()?.updateOptions({ tabSize: 2 })

  }

  const onFormatClick = () => {
    console.log(editorRef.current)
    // get current value form editor
    const unformatted 
    // format the value

    // set the formatted value back in the editor
  }

  return (

    <div>
      <button onClick={onFormatClick}>Format</button>
      <ManacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
        theme='dark'
        language='javascript'
        height="500px"
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true
        }}
      />

    </div>)
}

export default CodeEditor;
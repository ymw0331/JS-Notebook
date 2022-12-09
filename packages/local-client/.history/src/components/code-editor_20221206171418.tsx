import ManacoEditor from '@monaco-editor/react';

interface CodeEditorProps {
  initialValue: string;
}

const CodeEditor: React.FC<CodeEditorProps> = () => {
  return (

    <ManacoEditor
      value="const a = 1;"
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
    />)
}

export default CodeEditor;
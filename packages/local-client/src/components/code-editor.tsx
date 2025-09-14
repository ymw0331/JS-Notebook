import './code-editor.css';
import './syntax.css';
import { useRef } from 'react';
import Editor from '@monaco-editor/react';
import * as monacoEditor from 'monaco-editor';
// import prettier from 'prettier/standalone';
// import parserBabel from 'prettier/plugins/babel';
// import parserEstree from 'prettier/plugins/estree';
import codeShift from 'jscodeshift';
import Highlighter from 'monaco-jsx-highlighter';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
  const editorRef = useRef<monacoEditor.editor.IStandaloneCodeEditor>();

  const onMount = (editor: monacoEditor.editor.IStandaloneCodeEditor, monaco: typeof monacoEditor) => {
    editorRef.current = editor;
    editor.onDidChangeModelContent(() => {
      onChange(editor.getValue());
    });

    editor.getModel()?.updateOptions({ tabSize: 2 });

    // Wrap highlighter in try-catch to handle potential errors
    try {
      const highlighter = new Highlighter(
        // @ts-ignore
        window.monaco || monaco,
        codeShift,
        editor
      );

      // Disable automatic highlighting to prevent the error
      highlighter.highLightOnDidChangeModelContent(
        () => { },
        () => { },
        undefined,
        () => { }
      );
    } catch (err) {
      console.warn('JSX syntax highlighting disabled due to compatibility issue:', err);
      // Continue without JSX highlighting - editor will still work
    }
  };

  const onFormatClick = async () => {
    if (!editorRef.current) return;

    // Temporarily disabled prettier formatting until we resolve the API issues
    console.log('Format functionality temporarily disabled during migration');

    // TODO: Fix Prettier 3.x API integration
    // const unformatted = editorRef.current.getModel()?.getValue() || '';
    // const formatted = await prettier.format(unformatted, { ... });
  };

  return (
    <div className="editor-wrapper">
      <button
        className="button button-format is-primary is-small"
        onClick={onFormatClick}
      >
        Format
      </button>
      <Editor
        onMount={onMount}
        value={initialValue}
        theme="vs-dark"
        language="javascript"
        height="100%"
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;

import './styles.scss';

import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

function CodeEditor() {
  const [editorValue, setEditorValue] = useState('//Write code below...');

  return (
    <div className="sandbox-container">
      {/* <div className="sandbox-number-lines">
        <ul></ul>
      </div> */}
      {/* <code
        className="sandbox-code-editor"
        id="sandbox-code-editor"
        contentEditable="true"
        spellCheck="false"
        onKeyPress={codeChangeHandler}
      >
        <div>
          <br />
        </div>
      </code> */}
      <CodeMirror
        value={editorValue}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setEditorValue(value);
        }}
        onChange={(editor, data, value) => {
          setEditorValue(value);
        }}
      />
    </div>
  );
}

export default CodeEditor;

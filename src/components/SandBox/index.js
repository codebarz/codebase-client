import './styles.scss';

import React from 'react';
import CodeEditor from './CodeEditor';

function SandBox() {
  return (
    <section className="codebase-sandbox">
      <CodeEditor />
    </section>
  );
}

export default SandBox;

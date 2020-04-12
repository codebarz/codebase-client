import './styles.scss';

import React from 'react';
import OptionsPanel from '../OptionsPanel';
import EditorExplorer from '../EditorExplorer';
import InvitePanel from '../InvitePanel';
import SandBox from '../SandBox';

function MainView() {
  return (
    <section className="main-view">
      <OptionsPanel />
      <EditorExplorer />
      <SandBox />
      <InvitePanel />
    </section>
  );
}

export default MainView;

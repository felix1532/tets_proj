import React from 'react';
import TopBarNavigation from '../../../core/components/top-nav-bar/top-bar-nav';

export const EditorPage = React.memo(function EditorPage(): JSX.Element {
  return (
    <div className='editor-container'>
      <TopBarNavigation />
      <div className=''>Editropage</div>
    </div>
  );
});

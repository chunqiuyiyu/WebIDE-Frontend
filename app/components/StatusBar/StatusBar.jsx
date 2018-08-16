import React from 'react'
import { GitBranchWidget } from 'components/Git'
import { dispatchCommand } from 'commands'
import { EditorWidgets } from 'components/Editor'
import { observer } from 'mobx-react'
import languageState from 'components/Tab/LanguageClientState'
import configState from '../../config'
import UploadWidgets from './UploadWidgets'
import state from './state'

const StatusBar = observer(({ messages=[] }) => {
  return (
    <div className='status-bar'>
      <div className='status-widget-container left'>
        <div className='status-bar-menu-item toggle-layout fa fa-desktop' onClick={e => dispatchCommand('view:toggle_bars')} ></div>
        <div className='status-bar-space-key'>{configState.spaceKey}</div>
        <div className='status-bar-space-key'>{languageState.message}</div>
      </div>
      <UploadWidgets />
      <div className='status-messages'>
        {messages.map(message => <div className='status-message'>{message}</div>)}
      </div>
      {state.displayBar && <div className='status-progress'>
        <span></span>
      </div>}
      <div className='status-widget-container right'>
        <EditorWidgets />
        <GitBranchWidget ref={ com => window.refs.GitBranchWidget = com}
        /></div>
    </div>
  )
})

export default StatusBar

import React from 'react'
import './Sidebar.scss';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import RightParticipants from '../RightParticipants/RightParticipants';
import SidebarOption from '../SidebarOption/SidebarOption';
import Chat from '../Chat/Chat';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarHeader />
        <RightParticipants />
        <SidebarOption />
        <Chat />
    </div>
  )
}

export default Sidebar
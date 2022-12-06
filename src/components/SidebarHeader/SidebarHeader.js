import React from 'react'
import userIcon from '../../images/userIcon.png'
import appsIcon from '../../images/appsIcon.png'
import './SidebarHeader.scss';


function SidebarHeader() {
  return (
    <div className='sidebarHeader'>
      <div className='sidebarHeaderButtons'>
      <button>
          <img src={userIcon}/>
          <span>Participants</span>
      </button>
        <button>
          <img src={appsIcon}/>
            <span>Apps</span>
            <div className='redDot'></div>
        </button>
      </div>
    </div>
  )
}

export default SidebarHeader
import React from 'react'
import RightParticipant from './RightParticipant'
import Partipicant1 from '../../images/partipicant1.png';
import Partipicant2 from '../../images/partipicant2.png';
import Partipicant3 from '../../images/partipicant3.png';
import Partipicant4 from '../../images/partipicant4.png';
import Partipicant5 from '../../images/partipicant5.png';
import Partipicant6 from '../../images/partipicant6.png';
import './RightParticipants.scss'

function RightParticipants() {
  return (
    <div className='rightParticipants'>
        <RightParticipant imgSrc={Partipicant1} name='Natura' host='Host'  microfon='mute' profession='Project Manager'/>
        <RightParticipant imgSrc={Partipicant2} name='Cecile' host='Co-Host' microfon='speaking' profession='Software Developer'/>
        <RightParticipant imgSrc={Partipicant3} name='Nico'  microfon='opening' profession='UI/UX Designer'/>
        <RightParticipant imgSrc={Partipicant4} name='Bryan'  microfon='mute' profession='Ethical Hacker'/>
        <RightParticipant imgSrc={Partipicant5} name='Azzura'  microfon='mute' profession='Team Leader'/>
        <RightParticipant imgSrc={Partipicant6} name='Ahmed'  microfon='mute' profession='UI/UX Designer'/>
    </div>
  )
}

export default RightParticipants
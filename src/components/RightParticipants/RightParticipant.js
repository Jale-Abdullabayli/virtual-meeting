import React from 'react'
import './RightParticipant.scss';
import mute from '../../images/mute.png'
import speaking from '../../images/speaking.png'
import opening from '../../images/opening.png'
import camera from '../../images/camera.png';

function RightParticipant(props) {
    let microfon;
    if (props.microfon == 'mute') microfon = mute;
    else if (props.microfon == 'speaking') microfon = speaking;
    else if (props.microfon == 'opening') microfon = opening;
    return (
        <div className='rightParticipant'>
            <div className='leftSide'>
                <img src={props.imgSrc} />
                <div className='about'>
                    <span className='name'>{props.name}</span>
                    <span className='profession'>{props.profession}</span>
                </div>
            </div>
            <div className='rightSide'>
                {props?.host ? <div className='host'>{props.host}</div> : ''}
                <img src={microfon} className='microfon'/>
                <img src={camera}/>
            </div>
        </div>
    )
}

export default RightParticipant
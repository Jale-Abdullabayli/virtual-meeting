import React from 'react'
import './ChatMessage.scss';

function ChatMessage(props) {
  return (
    <div className={props.from=='you'?'chatMessage fromYou':'chatMessage'}>
        <img src={props.imgSrc}/>
        <div className='messageContent'>
            <div className='messageContentTitle'>
                <span className='fromTo'>from <span className='from'>{props.from}</span> to <span className='to'>{props.to}</span></span>
                <span className='time'>{props.time}</span>
            </div>
            <div className='messageContentText'>
                {props.children}
            </div>
        </div>
    </div>
  )
}

export default ChatMessage
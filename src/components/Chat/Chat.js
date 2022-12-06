import React from 'react'
import dots from '../../images/3dots.png';
import './Chat.scss';
import ChatMessages from '../ChatMessages/ChatMessages';
import SendMessage from '../SendMessage/SendMessage';

function Chat() {
    return (
        <div className='chat'>
            <div className='chatTitle'>
                <span>Chats (3)</span>
                <img src={dots} />
            </div>
            <ChatMessages/>
            <SendMessage/>
        </div>
    )
}

export default Chat
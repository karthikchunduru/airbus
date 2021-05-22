import React from 'react';
import Chatbot from 'react-chatbot-kit'
import './ChatStyle.css';

import ActionProvider from './chatbotpages/ActionProvider';
import MessageParser from './chatbotpages/MessageParser';
import config from './chatbotpages/Config';

function Chat() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
      {/* </header> */}
    </div>
  );
}
export default Chat;
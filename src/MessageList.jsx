import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
 render() {
  console.log(this.props.messages)
   return (
   <main className="messages">
    {
    	this.props.messages.map(message => { 
    	return (<Message message={message.content} username={message.username} key={message.id}/>);
    	})
    }
        <div className = "message">
      <span className="message-username"> {this.props.username}</span>
      <span className="message-content">{this.props.message}</span>
  
    </div>
  </main>
   );
 }
}
export default MessageList;


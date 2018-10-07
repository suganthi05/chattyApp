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
     </main>
   );
 }
}
export default MessageList;


import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
 render() {
   return (
   <main className="messages">
    {
    	this.props.messags.map(message => {
    		return<Message message={message} key={message.id}/>;
    	})
    }
    <div className="message system">
      Anonymous1 changed their name to nomnom.
    </div>
</main>
   );
 }
}
export default Message;


import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
	  currentUser: {name:'Anonymous'},
	  messages: [],
	  usersOnline : {count:0}
	};
	this.socket=null;
  }

  //Establish WebSocketcommunication between the client and server.
  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3401");
    this.socket.onopen = function(event) {
      console.log(`Connected to server at localhost:3401`);
    };

  // Handle all messages coming from the Websocket server.
    this.socket.onmessage = event => {
    console.log(event);
    const message = JSON.parse(event.data);

    switch(message.type) {
      //Browser receives the incomingNotification message and displays the notification.
      case "incomingNotification":
        const newNotification = [...this.state.messages, message];
        this.setState({ messages: newNotification });
      break;

      //Browser receives the incomingMessage message and displays the messages.
      case "incomingMessage":
        const newMessages = [...this.state.messages, message];
        this.setState({ messages: newMessages,
                        currentUser: message.username });
      break;

      //Browser receives the incomingUserCount message and displays the online users count.
      case "incomingUserCount":
          this.setState({usersOnline:{count:message.count}});
        break;

      default:
          throw new Error("Unknown message type: " + message.type);
      }
    }
  }
  //Send a postNotification message to the server to notify all connected users of the name change.
  sendNotification = (newUserName,oldUserName) => {
    const notification = {
     content:`**${oldUserName}** changed their name to **${newUserName}**`,
    type:"postNotification"
    };
    this.setState({currentUser:{name:newUserName}});
    this.socket.send(JSON.stringify(notification));
  };

//Send a postMessage message to the server to send messages to the server.
  addMessage = newMessage => {
  	const sendMessage = {
      username:this.state.currentUser.name,
      content:newMessage,
      type: "postMessage"
    };
    this.socket.send(JSON.stringify(sendMessage));
  };

  render() {
    return (
      <div>
        <NavBar nav = {this.state.usersOnline.count}/>
    	  <MessageList messages={this.state.messages} />
    	  <footer className="chatbar">
    	  <ChatBar 
    	    currentUser = {this.state.currentUser.name}
    	    addMessage = {this.addMessage}
          sendNotification = {this.sendNotification}
    	  />
    	  </footer>
      </div>
    );  
  }
}
export default App;

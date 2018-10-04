import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.addMessage = this.addMessage.bind(this);
    this.state = {
	  currentUser: {name:'Bob'},
	  messages: []
	};
	this.socket=null;
  }
  
   componentDidMount() {
  	this.socket = new WebSocket("ws://localhost:3401");
  	this.socket.onopen = function (event) {
      console.log("Connected to Server"); 
    };
    this.socket.onmessage = (event)=> {
    	const newMessage = JSON.parse(event.data);
    	console.log(newMessage, "received new");//
         const messages = this.state.messages.concat(newMessage)
         this.setState({messages: messages})//messages
    }
    //setTimeout(() => {
      //console.log("Simulating incoming message");
      //const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      //const messages = this.state.messages.concat(newMessage)
      //this.setState({messages: newMessage})//messages
    //}, 3000);
  }

  addMessage = content => {
  	const newMessage = {
      id:this.state.messages.length + 3,
      username:this.state.currentUser.name,
      content:content
    };
    this.socket.send(JSON.stringify(newMessage));
  };

  render() {
      return (
    	<div>
    	<NavBar />
    	<MessageList messages={this.state.messages} />
    	<ChatBar 
    	currentUser = {this.state.currentUser.name}
    	addMessage = {this.addMessage}
    	/>
    	</div>
      );  
  }
}
export default App;


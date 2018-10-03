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
	  messages: [
	    {
	    id:1,
	      username: "Bob",
	      content: "Has anyone seen my marbles?",
	    },
	    {
	    	id:2,
	      username: "Anonymous",
	      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
	    }
	  ]
	};
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 3000);
  }

  addMessage = content => {
  	const newMessage = {
      id:this.state.messages.length + 3,
      usename:this.state.currentUser.name,
      content:content
    };
    const messages =[...this.state.messages,newMessage];
    this.setState({messages:messages});
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


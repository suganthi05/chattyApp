import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);
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
    addMessage = content => {
    	const message = {
    		id:this.state.messages.length + 3,
    		usename:this.state.currentUser.name,
    		content:content
    	};

    	const messages =this.state.messages.concat(message);
    	this.setState({messages:messages});
    };
  render() {
      return (
    	<div>
    	<NavBar />
    	<MessageList messages={this.state.messages} />
    	<ChatBar 
    	currentUser = {this.state.currentUser}
    	addMessage = {this.addMessage}
    	/>
    	</div>
    	);  
    }
}
export default App;

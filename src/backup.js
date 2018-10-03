import React, {Component} from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
  currentUser: {name: "Bob"},
  messages: [
    {
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    },
    {
      username: "Test",
      content: "Test Message"
    }
  ]
}
  }

  render() {
  	const currentUser = this.state.currentUser.name;

	const chattyUser = this.state.messages.map(obj => {
	   return obj.username;
	});

	const chattyContent = this.state.messages.map(obj =>{
	   return obj.content;
	});

    return (

    	<div>
    		<nav className="navbar">
		  		<a href="/" className="navbar-brand">Chatty</a>
			</nav>
			<main className="messages">
				<div className="message">
					<span className="message-username">{chattyUser}</span>
					<span className="message-content">{chattyContent}</span>
				</div>
				<div className="message system">
					Anonymous1 changed their name to nomnom.
				</div>
			</main>
    		<footer className="chatbar">

  				<input className="chatbar-username" placeholder="Your Name (Optional)" value ={currentUser} />
  				<input className="chatbar-message" placeholder="Type a message and hit ENTER" />
			</footer>
    	</div>    
    );
  }
}
export default App;

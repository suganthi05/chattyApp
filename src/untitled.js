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

    createTable = () => {
	    let table = []
	    for (let i = 0; i < this.state.messages.length; i++) {
	    	let columns = []
	    	for (let j = 0; j < 1; j++) {
	    		columns.push(<td className="message-username">{this.state.messages[i].username}</td>)
	    		columns.push(<td className="message-content">{this.state.messages[i].content}</td>)
	    	}
	    	table.push(<tr>{columns}</tr>)
	    	table.push(<br />)
	    }
	    return table
	  }

  render() {
  	const currentUser = this.state.currentUser.name;

    return (

    	<div>
    		<nav className="navbar">
		  		<a href="/" className="navbar-brand">Chatty</a>
			</nav>
			<main className="messages">
				<div className="message">
					<table>
						{this.createTable()}
					</table>
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

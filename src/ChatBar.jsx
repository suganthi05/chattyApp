import React, {Component} from 'react';
class ChatBar extends Component {
	handleKeyPress = event =>{
		if(event.key == 'Enter' || event.keyCode == 13){
			console.log('Enter here');
			this.props.addMessage(event.target.value);
			event.target.value="";
		}
	};
 render() {
   return (
     <footer className="chatbar">
  	   <input className="chatbar-username" placeholder="Your Name (Optional)" 
  	   value ={this.props.currentUser} />
  	   <input className="chatbar-message" placeholder="Type a message and hit ENTER" 
  	   onKeyPress={this.handleKeyPress} />
     </footer>
   );
  }
}
export default ChatBar;
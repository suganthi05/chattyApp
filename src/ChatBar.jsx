import React, {Component} from 'react';
class ChatBar extends Component {
	handleKeyPress = event =>{
		if(event.key === 'Enter' || event.keyCode === 13){
			console.log('Enter here');
			const newMessage = event.target.value;
			this.props.addMessage(newMessage);
			event.target.value="";
		}
	};

	handleKeyPressUser = event =>{
		if(event.key === 'Enter' || event.keyCode === 13){
			console.log('Enter here');
			const oldUserName = this.props.currentUser;
			const newUserName = event.target.value;
			//rgrthis.props.changeUser(newUserName);
			this.props.sendNotification(newUserName,oldUserName);
		}
	}

 render() {
   return (
     <footer className="chatbar">
  	   <input className="chatbar-username" placeholder="Your Name (Optional)" 
  	   onKeyPress ={this.handleKeyPressUser} />
  	   <input className="chatbar-message" placeholder="Type a message and hit ENTER" 
  	   onKeyPress={this.handleKeyPress} />
     </footer>
   );
  }
}
export default ChatBar;
// server.js
const express = require('express');
const SocketServer = require('ws').Server;
const uuidv1 = require('uuid/v1');
//uuidv1(); 

// Set the port to 3001
const PORT = 3001;
// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback. 
//Broadcast function to send updates to all clients

wss.on('connection', (ws) => {
  console.log('Client connected', wss.clients.size);
  let clientCount = {
    count: wss.clients.size,
    type: "incomingUserCount",
    id: uuidv1()
  }

  wss.clients.forEach(function each(client) {
    client.send(JSON.stringify(clientCount)); 
  });

  // Handle all messages coming from the Client.
  ws.on('message', (data) => {
    const message = JSON.parse(data);
      switch(message.type){
        case "postMessage":
          message.id = uuidv1();
          message.type = "incomingMessage";

        case "postNotification":
          message.id = uuidv1();
          message.type = "incomingNotification";
        break;

        default:
          throw new Error("unknown message type:"+message.type);
      }
      wss.clients.forEach(client => {
        client.send(JSON.stringify(message));
      });
  })
  
  console.log('Client connected');
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', (ws) => {
    console.log('Client disconnected', wss.clients.size);
    let clientCount = {
      count: wss.clients.size,
      type: "incomingUserCount",
      id: uuidv1()
    }

    wss.clients.forEach(function each(client) {
      client.send(JSON.stringify(clientCount));
    });
  });
});

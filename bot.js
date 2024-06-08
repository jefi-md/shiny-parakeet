/*
    File: bot.js
    Author: jefi
    Description: Jefi-md is a WhatsApp bot created with love by Jefi
*/

// Import required modules
const { Client } = require('whatsapp-web.js');

// Create a new WhatsApp client
const client = new Client();

// Replace the placeholders with your actual phone number and message
const ownerNumber = '0722416548';
const defaultMessage = 'Hello, I am Jefi-md, your WhatsApp bot!';

// Event: QR Code Generated
client.on('qr', qr => {
    // Display the QR code for logging in
    console.log('Scan the QR code to log in.');
});

// Event: Ready
client.on('ready', () => {
    console.log('WhatsApp bot is ready.');
});

// Event: Message Received
client.on('message', message => {
    console.log(`Received message: ${message.body}`);
    
    // Check if the message is from the owner
    if (message.from === `${ownerNumber}@c.us`) {
        // Respond to the owner
        client.sendMessage(message.from, 'Hello Owner! How can I assist you?');
    } else {
        // Respond to other users with the default message
        client.sendMessage(message.from, defaultMessage);
    }
});

// Event: Error
client.on('error', error => {
    console.error('An error occurred:', error);
});

// Log in to WhatsApp
client.initialize();

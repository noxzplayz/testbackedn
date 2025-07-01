import React, { useEffect, useState } from 'react';
import { fetchMessages, sendMessage } from '../utils/api';

const ChatWindow: React.FC = () => {
    const [messages, setMessages] = useState<{ id: number; sender: string; content: string; timestamp: string }[]>([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const loadMessages = async () => {
            const fetchedMessages = await fetchMessages();
            setMessages(fetchedMessages);
        };

        loadMessages();
    }, []);

    const handleSendMessage = async () => {
        if (input.trim()) {
            const newMessage = {
                sender: 'User', // Replace with actual user data
                content: input,
                timestamp: new Date().toISOString(),
            };

            await sendMessage(newMessage);
            setMessages([...messages, newMessage]);
            setInput('');
        }
    };

    return (
        <div className="chat-window">
            <div className="messages">
                {messages.map((msg) => (
                    <div key={msg.id} className="message">
                        <strong>{msg.sender}:</strong> {msg.content}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default ChatWindow;
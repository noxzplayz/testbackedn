import { Request, Response } from 'express';
import { Message } from '../models/message';

export class MessageController {
    private messages: Message[] = [];

    public sendMessage(req: Request, res: Response): void {
        const { sender, receiver, content } = req.body;
        const newMessage: Message = {
            id: this.messages.length + 1,
            sender,
            receiver,
            content,
            timestamp: new Date().toISOString(),
        };
        this.messages.push(newMessage);
        res.status(201).json(newMessage);
    }

    public getMessages(req: Request, res: Response): void {
        const { sender, receiver } = req.query;
        const filteredMessages = this.messages.filter(message =>
            (message.sender === sender && message.receiver === receiver) ||
            (message.sender === receiver && message.receiver === sender)
        );
        res.status(200).json(filteredMessages);
    }
}
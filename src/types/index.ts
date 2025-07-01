export interface Message {
    id: string;
    sender: string;
    receiver: string;
    content: string;
    timestamp: Date;
}

export interface User {
    id: string;
    username: string;
    email: string;
}
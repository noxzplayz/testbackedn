import { Router } from 'express';
import MessageController from '../controllers/messageController';

const router = Router();
const messageController = new MessageController();

export const setMessageRoutes = (app) => {
    app.use('/api/messages', router);
    router.post('/', messageController.sendMessage);
    router.get('/', messageController.getMessages);
};
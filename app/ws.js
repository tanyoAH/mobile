import { WS_URL } from './constants';
import uuid from 'uuid';

const ws = new WebSocket(WS_URL);

export const sendChat = (activityId, message) =>
    ws.send({
        id: uuid.v4(),
        method: 'activity.chat',
        data: {
            text: message,
            activityId,
        },
    });

export default ws;

import { Timestamp } from '../src/db/firestore';
import moment from 'moment';

export const createTimestamp = () =>
    Timestamp.now().toMillis().toString();

export const formatTimeAgo = timestamp =>
    moment(parseInt(timestamp, 10)).fromNow();

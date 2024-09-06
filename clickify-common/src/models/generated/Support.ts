import { DateTime } from 'luxon';
import { ObjectId } from 'mongodb';

import { GeneratedSupportTopics, MainSupportStatuses } from '../../enums';

export interface Support {
    id: ObjectId;
    user: ObjectId; // User.id
    openedOn: DateTime;
    updatedOn: DateTime;
    topic: GeneratedSupportTopics;
    content: string;
    details: string;
    status: MainSupportStatuses;
}
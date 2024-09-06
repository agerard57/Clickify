import { DateTime } from 'luxon';
import { ObjectId } from 'mongodb';

import { MainSupportTopics, WebsiteStatuses } from '../../enums';

export interface Support {
  id: ObjectId;
  companyName: string;
  email: string;
  topic: MainSupportTopics;
  updatedOn: DateTime;
  openedOn: DateTime;
  subject: string;
  details: string;
  status: WebsiteStatuses;
}

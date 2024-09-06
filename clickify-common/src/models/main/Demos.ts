import { DateTime } from 'luxon';
import { ObjectId } from 'mongodb';

import { DemosStatuses } from '../../enums';

export interface Demos {
  id: ObjectId;
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  details: string;
  openedOn: DateTime;
  updatedOn: DateTime;
  status: DemosStatuses;
}

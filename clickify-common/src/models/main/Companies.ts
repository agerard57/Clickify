import { DateTime } from 'luxon';
import { ObjectId } from 'mongodb';

import {
  MainSupportStatuses,
  PlanTypes
} from '../../enums';

export interface BillingAddress {
  number: string;
  streetName: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface PlanHistory {
  current: boolean;
  plan: PlanTypes;
  since: DateTime;
  exp?: DateTime;
  price?: number;
}

export interface Companies {
  id: ObjectId;
  legalName: string;
  tradingName: string;
  email: string;
  password: string;
  lastPasswordGen: DateTime;
  billingAddress?: BillingAddress;
  planHistory?: PlanHistory[];
  stripeId?: string;
  registeredOn: DateTime;
  updatedOn: DateTime;
  refreshTokens?: string[];
  recoveryCode?: string;
  status: MainSupportStatuses;
}

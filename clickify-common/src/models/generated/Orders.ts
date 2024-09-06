import { DateTime } from 'luxon';
import { ObjectId } from 'mongodb';

import { OrdersStatuses } from '../../enums';

export interface Products {
  id: ObjectId;
  quantity: number;
  savedPrice: string; // String because of the currency
}

/**
 * @param {type} ObjectId   Store ID.
 * @param {type} client     Gets the address from the client.
 */
export type ShippedToType = ObjectId | "client";

/**
 * @param {type} user       User ID.
 */
export interface Orders {
  id: ObjectId;
  user: ObjectId; // User.id
  date: DateTime;
  products: Products[];
  total: number;
  currency: string;
  discount?: number;
  status: OrdersStatuses;
  shippedTo: {
    shippingAddress: ObjectId; // User.addressInfos.address.id
    destination: ShippedToType;
  };
}

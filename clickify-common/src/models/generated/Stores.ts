import { DateTime } from "luxon";
import { ObjectId } from "mongodb";
import { BaseAddress } from "./BaseAddress";

export interface Stores {
  id: ObjectId;
  address: BaseAddress;
  active: boolean;
  registeredOn: DateTime;
  storeIdentifier?: string;
  storePhoneNumber?: string;
}

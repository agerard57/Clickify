import { DateTime } from "luxon";
import { ObjectId } from "mongodb";
import { UserCategories, UserStatuses } from "../../enums";
import { BaseAddress } from "./BaseAddress";

export interface Users {
  id: ObjectId;
  name: string;
  password: string;
  lastPasswordGen: DateTime;
  phoneNumber?: string;
  email: {
    confirmed: boolean;
    emailAddress: string;
  };
  gender?: string;
  dateOfBirth?: DateTime;
  addressInfos?: {
    residentName: string;
    shippable: boolean;
    address: BaseAddress;
  }[];
  photoPath: string; // | default
  favoriteProducts?: ObjectId[]; // Products.id
  favoriteStore?: ObjectId; // Stores.id
  registeredOn: DateTime;
  updatedOn: DateTime;
  status?: UserStatuses;
  category: UserCategories;
  notifications?: {
    content: string;
    timestamp: DateTime;
    read: boolean;
  }[];
  stripeId?: string;
  refreshTokens?: string[];
}

import { DateTime } from "luxon";
import { ObjectId } from "mongodb";

export interface Traffic {
  day: DateTime;
  number: string;
}

export interface Analytics {
  id: ObjectId;
  traffic: Traffic[];
}

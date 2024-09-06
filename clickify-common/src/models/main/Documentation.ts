import { DateTime } from "luxon";
import { ObjectId } from "mongodb";

export interface Documentation {
  id: ObjectId;
  public: boolean;
  title: string;
  content: string;
  updatedOn: DateTime;
}

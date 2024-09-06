import { ObjectId } from "mongodb";

export interface AdditionalInfos {
  id: ObjectId;
  name: string;
  type: string;
  value: string;
  additionalValues?: string[];
}

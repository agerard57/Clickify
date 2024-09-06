import { ObjectId } from "mongodb";
import { DateTime } from "luxon";

export interface SessionAnalytics {
  id: ObjectId;
  user?: ObjectId; // User.id
  timestamp: DateTime;
  pageViews: number;
  duration: number;
  sessionId: string; // UUID
}

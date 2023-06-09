import { RoommateChoreItem } from "./roommate-chore-item";

export interface WeekDisplayItem {
  roommateChores: Array<RoommateChoreItem>;
  weekNumber: number;
}

import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type ChaosSculptorUserWhereInput = {
  CompletedTasks?: IntFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  lastUsed?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
};

import { SortOrder } from "../../util/SortOrder";

export type ChaosSculptorUserOrderByInput = {
  CompletedTasks?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lastUsed?: SortOrder;
  updatedAt?: SortOrder;
};

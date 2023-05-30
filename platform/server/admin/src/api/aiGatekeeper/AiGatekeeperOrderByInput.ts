import { SortOrder } from "../../util/SortOrder";

export type AiGatekeeperOrderByInput = {
  AIStatus?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  roles?: SortOrder;
  TasksCompleted?: SortOrder;
  updatedAt?: SortOrder;
};

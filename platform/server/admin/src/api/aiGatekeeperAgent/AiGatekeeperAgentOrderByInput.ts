import { SortOrder } from "../../util/SortOrder";

export type AiGatekeeperAgentOrderByInput = {
  AIStatus?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  roles?: SortOrder;
  TasksCompleted?: SortOrder;
  updatedAt?: SortOrder;
};

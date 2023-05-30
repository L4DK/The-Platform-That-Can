import { SortOrder } from "../../util/SortOrder";

export type DigitalCustodianAgentOrderByInput = {
  agentStatus?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lastActiveTime?: SortOrder;
  lastError?: SortOrder;
  MyAiGatekeeperId?: SortOrder;
  tasksCompleted?: SortOrder;
  updatedAt?: SortOrder;
};

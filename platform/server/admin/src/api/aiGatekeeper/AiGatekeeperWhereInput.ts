import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DigitalCustodianAgentListRelationFilter } from "../digitalCustodianAgent/DigitalCustodianAgentListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type AiGatekeeperWhereInput = {
  AIStatus?:
    | "IDLE"
    | "THINKING"
    | "BREAK"
    | "CLEANING"
    | "TRAINING"
    | "FETCHING_DATA"
    | "DEBUGGING"
    | "ACTIVE"
    | "PROCESSING_IN_CLOUD"
    | "MANAGING_LARGE_DATA";
  createdAt?: DateTimeFilter;
  createdBy?: UserWhereUniqueInput;
  id?: StringFilter;
  myAgents?: DigitalCustodianAgentListRelationFilter;
  roles?: StringFilter;
  TasksCompleted?: IntFilter;
  updatedAt?: DateTimeFilter;
};

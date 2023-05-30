import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DigitalCustodianAgentCreateNestedManyWithoutAiGatekeepersInput } from "./DigitalCustodianAgentCreateNestedManyWithoutAiGatekeepersInput";

export type AiGatekeeperCreateInput = {
  AIStatus:
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
  createdBy: UserWhereUniqueInput;
  myAgents?: DigitalCustodianAgentCreateNestedManyWithoutAiGatekeepersInput;
  roles: string;
  TasksCompleted: number;
};

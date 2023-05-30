import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DigitalCustodianAgentUpdateManyWithoutAiGatekeepersInput } from "./DigitalCustodianAgentUpdateManyWithoutAiGatekeepersInput";

export type AiGatekeeperUpdateInput = {
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
  createdBy?: UserWhereUniqueInput;
  myAgents?: DigitalCustodianAgentUpdateManyWithoutAiGatekeepersInput;
  roles?: string;
  TasksCompleted?: number;
};

import { AiGatekeeperWhereUniqueInput } from "../aiGatekeeper/AiGatekeeperWhereUniqueInput";

export type DigitalCustodianAgentCreateInput = {
  agentStatus:
    | "IDLE"
    | "WORKING"
    | "LEARNING"
    | "BREAK"
    | "FETCHING_DATA"
    | "PROCESSING_DATA"
    | "DEBUGGING"
    | "OBSERVING"
    | "TRAINING"
    | "HELPING";
  lastActiveTime: Date;
  lastError?: string | null;
  MyAiGatekeeper?: AiGatekeeperWhereUniqueInput | null;
  tasksCompleted: number;
};

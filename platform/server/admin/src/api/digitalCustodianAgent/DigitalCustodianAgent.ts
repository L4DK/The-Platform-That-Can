import { AiGatekeeper } from "../aiGatekeeper/AiGatekeeper";

export type DigitalCustodianAgent = {
  agentStatus?:
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
  createdAt: Date;
  id: string;
  lastActiveTime: Date;
  lastError: string | null;
  MyAiGatekeeper?: AiGatekeeper | null;
  tasksCompleted: number;
  updatedAt: Date;
};

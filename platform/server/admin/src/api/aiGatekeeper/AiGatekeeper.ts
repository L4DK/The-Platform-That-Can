import { User } from "../user/User";
import { DigitalCustodianAgent } from "../digitalCustodianAgent/DigitalCustodianAgent";

export type AiGatekeeper = {
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
  createdAt: Date;
  createdBy?: User;
  id: string;
  myAgents?: Array<DigitalCustodianAgent>;
  roles: string;
  TasksCompleted: number;
  updatedAt: Date;
};

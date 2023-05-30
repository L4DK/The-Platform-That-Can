export type AiGatekeeperAgent = {
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
  id: string;
  roles: string | null;
  TasksCompleted: number;
  updatedAt: Date;
};

import { AiGatekeeperAgent as TAiGatekeeperAgent } from "../api/aiGatekeeperAgent/AiGatekeeperAgent";

export const AIGATEKEEPERAGENT_TITLE_FIELD = "roles";

export const AiGatekeeperAgentTitle = (record: TAiGatekeeperAgent): string => {
  return record.roles || String(record.id);
};

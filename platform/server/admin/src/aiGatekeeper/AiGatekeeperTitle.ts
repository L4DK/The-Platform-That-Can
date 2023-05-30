import { AiGatekeeper as TAiGatekeeper } from "../api/aiGatekeeper/AiGatekeeper";

export const AIGATEKEEPER_TITLE_FIELD = "roles";

export const AiGatekeeperTitle = (record: TAiGatekeeper): string => {
  return record.roles || String(record.id);
};

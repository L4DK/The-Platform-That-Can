import { DigitalCustodianAgent as TDigitalCustodianAgent } from "../api/digitalCustodianAgent/DigitalCustodianAgent";

export const DIGITALCUSTODIANAGENT_TITLE_FIELD = "lastError";

export const DigitalCustodianAgentTitle = (
  record: TDigitalCustodianAgent
): string => {
  return record.lastError || String(record.id);
};

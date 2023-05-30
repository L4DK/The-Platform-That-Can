import { DigitalCustodianAgent as TDigitalCustodianAgent } from "../api/digitalCustodianAgent/DigitalCustodianAgent";

export const DIGITALCUSTODIANAGENT_TITLE_FIELD = "id";

export const DigitalCustodianAgentTitle = (
  record: TDigitalCustodianAgent
): string => {
  return record.id || String(record.id);
};

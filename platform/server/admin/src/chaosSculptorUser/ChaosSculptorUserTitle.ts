import { ChaosSculptorUser as TChaosSculptorUser } from "../api/chaosSculptorUser/ChaosSculptorUser";

export const CHAOSSCULPTORUSER_TITLE_FIELD = "id";

export const ChaosSculptorUserTitle = (record: TChaosSculptorUser): string => {
  return record.id || String(record.id);
};

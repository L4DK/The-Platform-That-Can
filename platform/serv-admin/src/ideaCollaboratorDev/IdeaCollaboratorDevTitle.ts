import { IdeaCollaboratorDev as TIdeaCollaboratorDev } from "../api/ideaCollaboratorDev/IdeaCollaboratorDev";

export const IDEACOLLABORATORDEV_TITLE_FIELD = "id";

export const IdeaCollaboratorDevTitle = (
  record: TIdeaCollaboratorDev
): string => {
  return record.id || String(record.id);
};

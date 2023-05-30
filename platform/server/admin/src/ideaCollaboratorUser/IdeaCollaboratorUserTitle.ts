import { IdeaCollaboratorUser as TIdeaCollaboratorUser } from "../api/ideaCollaboratorUser/IdeaCollaboratorUser";

export const IDEACOLLABORATORUSER_TITLE_FIELD = "id";

export const IdeaCollaboratorUserTitle = (
  record: TIdeaCollaboratorUser
): string => {
  return record.id || String(record.id);
};

import { IdeaSprouterOwner as TIdeaSprouterOwner } from "../api/ideaSprouterOwner/IdeaSprouterOwner";

export const IDEASPROUTEROWNER_TITLE_FIELD = "id";

export const IdeaSprouterOwnerTitle = (record: TIdeaSprouterOwner): string => {
  return record.id || String(record.id);
};

import { IdeaViewerGuest as TIdeaViewerGuest } from "../api/ideaViewerGuest/IdeaViewerGuest";

export const IDEAVIEWERGUEST_TITLE_FIELD = "company";

export const IdeaViewerGuestTitle = (record: TIdeaViewerGuest): string => {
  return record.company || String(record.id);
};

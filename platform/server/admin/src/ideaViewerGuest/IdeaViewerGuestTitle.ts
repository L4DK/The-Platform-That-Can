import { IdeaViewerGuest as TIdeaViewerGuest } from "../api/ideaViewerGuest/IdeaViewerGuest";

export const IDEAVIEWERGUEST_TITLE_FIELD = "id";

export const IdeaViewerGuestTitle = (record: TIdeaViewerGuest): string => {
  return record.id || String(record.id);
};

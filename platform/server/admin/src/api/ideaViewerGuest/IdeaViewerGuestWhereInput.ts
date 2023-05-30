import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type IdeaViewerGuestWhereInput = {
  company?: StringFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  Location?: StringFilter;
};

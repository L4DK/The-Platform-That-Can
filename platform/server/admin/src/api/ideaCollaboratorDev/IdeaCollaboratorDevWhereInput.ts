import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IdeaCollaboratorDevWhereInput = {
  email?: StringFilter;
  id?: StringFilter;
  inATeam?: UserWhereUniqueInput;
  location?: StringFilter;
};

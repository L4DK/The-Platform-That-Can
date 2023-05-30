import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IdeaCollaboratorDevUpdateInput = {
  email?: string;
  inATeam?: UserWhereUniqueInput | null;
  location?: string;
};

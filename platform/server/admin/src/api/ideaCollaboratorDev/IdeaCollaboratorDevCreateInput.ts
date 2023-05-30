import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IdeaCollaboratorDevCreateInput = {
  email: string;
  inATeam?: UserWhereUniqueInput | null;
  location: string;
};

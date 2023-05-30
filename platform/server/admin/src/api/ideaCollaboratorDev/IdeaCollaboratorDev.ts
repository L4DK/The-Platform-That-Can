import { User } from "../user/User";

export type IdeaCollaboratorDev = {
  createdAt: Date;
  email: string;
  id: string;
  inATeam?: User | null;
  location: string;
  updatedAt: Date;
};

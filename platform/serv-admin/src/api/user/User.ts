import { AiGatekeeper } from "../aiGatekeeper/AiGatekeeper";
import { JsonValue } from "type-fest";
import { IdeaCollaboratorDev } from "../ideaCollaboratorDev/IdeaCollaboratorDev";

export type User = {
  company: string;
  createdAt: Date;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  location: string;
  ownership?: Array<AiGatekeeper>;
  roles: JsonValue;
  teamOwner?: Array<IdeaCollaboratorDev>;
  updatedAt: Date;
  username: string;
};

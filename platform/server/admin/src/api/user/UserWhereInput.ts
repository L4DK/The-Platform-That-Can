import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { AiGatekeeperListRelationFilter } from "../aiGatekeeper/AiGatekeeperListRelationFilter";
import { IdeaCollaboratorDevListRelationFilter } from "../ideaCollaboratorDev/IdeaCollaboratorDevListRelationFilter";

export type UserWhereInput = {
  company?: StringFilter;
  createdAt?: DateTimeFilter;
  email?: StringFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  location?: StringFilter;
  ownership?: AiGatekeeperListRelationFilter;
  teamOwner?: IdeaCollaboratorDevListRelationFilter;
  updatedAt?: DateTimeFilter;
  username?: StringFilter;
};

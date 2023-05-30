import { AiGatekeeperUpdateManyWithoutUsersInput } from "./AiGatekeeperUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { IdeaCollaboratorDevUpdateManyWithoutUsersInput } from "./IdeaCollaboratorDevUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  company?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  location?: string;
  ownership?: AiGatekeeperUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  teamOwner?: IdeaCollaboratorDevUpdateManyWithoutUsersInput;
  username?: string;
};

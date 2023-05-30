import { AiGatekeeperCreateNestedManyWithoutUsersInput } from "./AiGatekeeperCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { IdeaCollaboratorDevCreateNestedManyWithoutUsersInput } from "./IdeaCollaboratorDevCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  company: string;
  email: string;
  firstName: string;
  lastName: string;
  location: string;
  ownership?: AiGatekeeperCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  teamOwner?: IdeaCollaboratorDevCreateNestedManyWithoutUsersInput;
  username: string;
};

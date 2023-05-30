import { IdeaCollaboratorUserWhereInput } from "./IdeaCollaboratorUserWhereInput";
import { IdeaCollaboratorUserOrderByInput } from "./IdeaCollaboratorUserOrderByInput";

export type IdeaCollaboratorUserFindManyArgs = {
  where?: IdeaCollaboratorUserWhereInput;
  orderBy?: Array<IdeaCollaboratorUserOrderByInput>;
  skip?: number;
  take?: number;
};

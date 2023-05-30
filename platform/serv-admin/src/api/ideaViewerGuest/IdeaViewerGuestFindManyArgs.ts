import { IdeaViewerGuestWhereInput } from "./IdeaViewerGuestWhereInput";
import { IdeaViewerGuestOrderByInput } from "./IdeaViewerGuestOrderByInput";

export type IdeaViewerGuestFindManyArgs = {
  where?: IdeaViewerGuestWhereInput;
  orderBy?: Array<IdeaViewerGuestOrderByInput>;
  skip?: number;
  take?: number;
};

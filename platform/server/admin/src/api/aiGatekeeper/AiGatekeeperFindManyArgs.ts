import { AiGatekeeperWhereInput } from "./AiGatekeeperWhereInput";
import { AiGatekeeperOrderByInput } from "./AiGatekeeperOrderByInput";

export type AiGatekeeperFindManyArgs = {
  where?: AiGatekeeperWhereInput;
  orderBy?: Array<AiGatekeeperOrderByInput>;
  skip?: number;
  take?: number;
};

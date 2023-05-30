import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AiGatekeeperWhereUniqueInput } from "../aiGatekeeper/AiGatekeeperWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type DigitalCustodianAgentWhereInput = {
  agentStatus?:
    | "IDLE"
    | "WORKING"
    | "LEARNING"
    | "BREAK"
    | "FETCHING_DATA"
    | "PROCESSING_DATA"
    | "DEBUGGING"
    | "OBSERVING"
    | "TRAINING"
    | "HELPING";
  id?: StringFilter;
  lastActiveTime?: DateTimeFilter;
  lastError?: StringNullableFilter;
  MyAiGatekeeper?: AiGatekeeperWhereUniqueInput;
  tasksCompleted?: IntFilter;
};

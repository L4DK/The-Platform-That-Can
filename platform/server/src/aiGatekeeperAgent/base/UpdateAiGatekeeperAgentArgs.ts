/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { AiGatekeeperAgentWhereUniqueInput } from "./AiGatekeeperAgentWhereUniqueInput";
import { AiGatekeeperAgentUpdateInput } from "./AiGatekeeperAgentUpdateInput";

@ArgsType()
class UpdateAiGatekeeperAgentArgs {
  @Field(() => AiGatekeeperAgentWhereUniqueInput, { nullable: false })
  where!: AiGatekeeperAgentWhereUniqueInput;
  @Field(() => AiGatekeeperAgentUpdateInput, { nullable: false })
  data!: AiGatekeeperAgentUpdateInput;
}

export { UpdateAiGatekeeperAgentArgs as UpdateAiGatekeeperAgentArgs };

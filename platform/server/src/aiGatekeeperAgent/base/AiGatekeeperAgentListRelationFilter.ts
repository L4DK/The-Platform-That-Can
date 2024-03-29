/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AiGatekeeperAgentWhereInput } from "./AiGatekeeperAgentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AiGatekeeperAgentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AiGatekeeperAgentWhereInput,
  })
  @ValidateNested()
  @Type(() => AiGatekeeperAgentWhereInput)
  @IsOptional()
  @Field(() => AiGatekeeperAgentWhereInput, {
    nullable: true,
  })
  every?: AiGatekeeperAgentWhereInput;

  @ApiProperty({
    required: false,
    type: () => AiGatekeeperAgentWhereInput,
  })
  @ValidateNested()
  @Type(() => AiGatekeeperAgentWhereInput)
  @IsOptional()
  @Field(() => AiGatekeeperAgentWhereInput, {
    nullable: true,
  })
  some?: AiGatekeeperAgentWhereInput;

  @ApiProperty({
    required: false,
    type: () => AiGatekeeperAgentWhereInput,
  })
  @ValidateNested()
  @Type(() => AiGatekeeperAgentWhereInput)
  @IsOptional()
  @Field(() => AiGatekeeperAgentWhereInput, {
    nullable: true,
  })
  none?: AiGatekeeperAgentWhereInput;
}
export { AiGatekeeperAgentListRelationFilter as AiGatekeeperAgentListRelationFilter };

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
import { EnumAiGatekeeperAiStatus } from "./EnumAiGatekeeperAiStatus";
import {
  IsEnum,
  ValidateNested,
  IsOptional,
  IsString,
  IsInt,
} from "class-validator";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";
import { DigitalCustodianAgentCreateNestedManyWithoutAiGatekeepersInput } from "./DigitalCustodianAgentCreateNestedManyWithoutAiGatekeepersInput";

@InputType()
class AiGatekeeperCreateInput {
  @ApiProperty({
    required: true,
    enum: EnumAiGatekeeperAiStatus,
  })
  @IsEnum(EnumAiGatekeeperAiStatus)
  @Field(() => EnumAiGatekeeperAiStatus)
  AIStatus!:
    | "IDLE"
    | "THINKING"
    | "BREAK"
    | "CLEANING"
    | "TRAINING"
    | "FETCHING_DATA"
    | "DEBUGGING"
    | "ACTIVE"
    | "PROCESSING_IN_CLOUD"
    | "MANAGING_LARGE_DATA";

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  createdBy!: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => DigitalCustodianAgentCreateNestedManyWithoutAiGatekeepersInput,
  })
  @ValidateNested()
  @Type(() => DigitalCustodianAgentCreateNestedManyWithoutAiGatekeepersInput)
  @IsOptional()
  @Field(() => DigitalCustodianAgentCreateNestedManyWithoutAiGatekeepersInput, {
    nullable: true,
  })
  myAgents?: DigitalCustodianAgentCreateNestedManyWithoutAiGatekeepersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  roles!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  TasksCompleted!: number;
}

export { AiGatekeeperCreateInput as AiGatekeeperCreateInput };

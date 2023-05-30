/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumAiGatekeeperAiStatus } from "./EnumAiGatekeeperAiStatus";
import {
  IsEnum,
  IsDate,
  ValidateNested,
  IsString,
  IsOptional,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { User } from "../../user/base/User";
import { DigitalCustodianAgent } from "../../digitalCustodianAgent/base/DigitalCustodianAgent";

@ObjectType()
class AiGatekeeper {
  @ApiProperty({
    required: true,
    enum: EnumAiGatekeeperAiStatus,
  })
  @IsEnum(EnumAiGatekeeperAiStatus)
  @Field(() => EnumAiGatekeeperAiStatus, {
    nullable: true,
  })
  AIStatus?:
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
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  createdBy?: User;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [DigitalCustodianAgent],
  })
  @ValidateNested()
  @Type(() => DigitalCustodianAgent)
  @IsOptional()
  myAgents?: Array<DigitalCustodianAgent>;

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

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { AiGatekeeper as AiGatekeeper };

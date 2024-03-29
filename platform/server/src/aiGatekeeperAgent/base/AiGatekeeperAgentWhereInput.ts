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
import { EnumAiGatekeeperAgentAiStatus } from "./EnumAiGatekeeperAgentAiStatus";
import { IsEnum, IsOptional } from "class-validator";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

@InputType()
class AiGatekeeperAgentWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumAiGatekeeperAgentAiStatus,
  })
  @IsEnum(EnumAiGatekeeperAgentAiStatus)
  @IsOptional()
  @Field(() => EnumAiGatekeeperAgentAiStatus, {
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
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  roles?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  TasksCompleted?: IntFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;
}

export { AiGatekeeperAgentWhereInput as AiGatekeeperAgentWhereInput };

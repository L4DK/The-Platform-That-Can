/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IdeaCollaboratorUserWhereInput } from "./IdeaCollaboratorUserWhereInput";
import { Type } from "class-transformer";
import { IdeaCollaboratorUserOrderByInput } from "./IdeaCollaboratorUserOrderByInput";

@ArgsType()
class IdeaCollaboratorUserFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => IdeaCollaboratorUserWhereInput,
  })
  @Field(() => IdeaCollaboratorUserWhereInput, { nullable: true })
  @Type(() => IdeaCollaboratorUserWhereInput)
  where?: IdeaCollaboratorUserWhereInput;

  @ApiProperty({
    required: false,
    type: [IdeaCollaboratorUserOrderByInput],
  })
  @Field(() => [IdeaCollaboratorUserOrderByInput], { nullable: true })
  @Type(() => IdeaCollaboratorUserOrderByInput)
  orderBy?: Array<IdeaCollaboratorUserOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { IdeaCollaboratorUserFindManyArgs as IdeaCollaboratorUserFindManyArgs };

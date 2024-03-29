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
import { IdeaSprouterOwnerWhereInput } from "./IdeaSprouterOwnerWhereInput";
import { Type } from "class-transformer";
import { IdeaSprouterOwnerOrderByInput } from "./IdeaSprouterOwnerOrderByInput";

@ArgsType()
class IdeaSprouterOwnerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => IdeaSprouterOwnerWhereInput,
  })
  @Field(() => IdeaSprouterOwnerWhereInput, { nullable: true })
  @Type(() => IdeaSprouterOwnerWhereInput)
  where?: IdeaSprouterOwnerWhereInput;

  @ApiProperty({
    required: false,
    type: [IdeaSprouterOwnerOrderByInput],
  })
  @Field(() => [IdeaSprouterOwnerOrderByInput], { nullable: true })
  @Type(() => IdeaSprouterOwnerOrderByInput)
  orderBy?: Array<IdeaSprouterOwnerOrderByInput>;

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

export { IdeaSprouterOwnerFindManyArgs as IdeaSprouterOwnerFindManyArgs };

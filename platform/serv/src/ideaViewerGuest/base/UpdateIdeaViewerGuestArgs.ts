/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { IdeaViewerGuestWhereUniqueInput } from "./IdeaViewerGuestWhereUniqueInput";
import { IdeaViewerGuestUpdateInput } from "./IdeaViewerGuestUpdateInput";

@ArgsType()
class UpdateIdeaViewerGuestArgs {
  @Field(() => IdeaViewerGuestWhereUniqueInput, { nullable: false })
  where!: IdeaViewerGuestWhereUniqueInput;
  @Field(() => IdeaViewerGuestUpdateInput, { nullable: false })
  data!: IdeaViewerGuestUpdateInput;
}

export { UpdateIdeaViewerGuestArgs as UpdateIdeaViewerGuestArgs };
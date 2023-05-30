import { Module } from "@nestjs/common";
import { IdeaCollaboratorUserModuleBase } from "./base/ideaCollaboratorUser.module.base";
import { IdeaCollaboratorUserService } from "./ideaCollaboratorUser.service";
import { IdeaCollaboratorUserController } from "./ideaCollaboratorUser.controller";
import { IdeaCollaboratorUserResolver } from "./ideaCollaboratorUser.resolver";

@Module({
  imports: [IdeaCollaboratorUserModuleBase],
  controllers: [IdeaCollaboratorUserController],
  providers: [IdeaCollaboratorUserService, IdeaCollaboratorUserResolver],
  exports: [IdeaCollaboratorUserService],
})
export class IdeaCollaboratorUserModule {}

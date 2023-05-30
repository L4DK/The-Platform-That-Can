import { Module } from "@nestjs/common";
import { IdeaCollaboratorDevModuleBase } from "./base/ideaCollaboratorDev.module.base";
import { IdeaCollaboratorDevService } from "./ideaCollaboratorDev.service";
import { IdeaCollaboratorDevController } from "./ideaCollaboratorDev.controller";
import { IdeaCollaboratorDevResolver } from "./ideaCollaboratorDev.resolver";

@Module({
  imports: [IdeaCollaboratorDevModuleBase],
  controllers: [IdeaCollaboratorDevController],
  providers: [IdeaCollaboratorDevService, IdeaCollaboratorDevResolver],
  exports: [IdeaCollaboratorDevService],
})
export class IdeaCollaboratorDevModule {}

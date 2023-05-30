import { Module } from "@nestjs/common";
import { IdeaViewerGuestModuleBase } from "./base/ideaViewerGuest.module.base";
import { IdeaViewerGuestService } from "./ideaViewerGuest.service";
import { IdeaViewerGuestController } from "./ideaViewerGuest.controller";
import { IdeaViewerGuestResolver } from "./ideaViewerGuest.resolver";

@Module({
  imports: [IdeaViewerGuestModuleBase],
  controllers: [IdeaViewerGuestController],
  providers: [IdeaViewerGuestService, IdeaViewerGuestResolver],
  exports: [IdeaViewerGuestService],
})
export class IdeaViewerGuestModule {}

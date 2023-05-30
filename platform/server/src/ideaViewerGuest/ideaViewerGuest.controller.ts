import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IdeaViewerGuestService } from "./ideaViewerGuest.service";
import { IdeaViewerGuestControllerBase } from "./base/ideaViewerGuest.controller.base";

@swagger.ApiTags("ideaViewerGuests")
@common.Controller("ideaViewerGuests")
export class IdeaViewerGuestController extends IdeaViewerGuestControllerBase {
  constructor(
    protected readonly service: IdeaViewerGuestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

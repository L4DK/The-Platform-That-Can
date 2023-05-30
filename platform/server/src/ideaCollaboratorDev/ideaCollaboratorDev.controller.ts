import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IdeaCollaboratorDevService } from "./ideaCollaboratorDev.service";
import { IdeaCollaboratorDevControllerBase } from "./base/ideaCollaboratorDev.controller.base";

@swagger.ApiTags("ideaCollaboratorDevs")
@common.Controller("ideaCollaboratorDevs")
export class IdeaCollaboratorDevController extends IdeaCollaboratorDevControllerBase {
  constructor(
    protected readonly service: IdeaCollaboratorDevService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IdeaCollaboratorUserService } from "./ideaCollaboratorUser.service";
import { IdeaCollaboratorUserControllerBase } from "./base/ideaCollaboratorUser.controller.base";

@swagger.ApiTags("ideaCollaboratorUsers")
@common.Controller("ideaCollaboratorUsers")
export class IdeaCollaboratorUserController extends IdeaCollaboratorUserControllerBase {
  constructor(
    protected readonly service: IdeaCollaboratorUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

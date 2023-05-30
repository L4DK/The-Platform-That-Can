import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IdeaSprouterOwnerService } from "./ideaSprouterOwner.service";
import { IdeaSprouterOwnerControllerBase } from "./base/ideaSprouterOwner.controller.base";

@swagger.ApiTags("ideaSprouterOwners")
@common.Controller("ideaSprouterOwners")
export class IdeaSprouterOwnerController extends IdeaSprouterOwnerControllerBase {
  constructor(
    protected readonly service: IdeaSprouterOwnerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

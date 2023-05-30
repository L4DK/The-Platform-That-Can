import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AiGatekeeperService } from "./aiGatekeeper.service";
import { AiGatekeeperControllerBase } from "./base/aiGatekeeper.controller.base";

@swagger.ApiTags("aiGatekeepers")
@common.Controller("aiGatekeepers")
export class AiGatekeeperController extends AiGatekeeperControllerBase {
  constructor(
    protected readonly service: AiGatekeeperService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

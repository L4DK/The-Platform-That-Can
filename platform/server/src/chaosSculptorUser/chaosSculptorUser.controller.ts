import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChaosSculptorUserService } from "./chaosSculptorUser.service";
import { ChaosSculptorUserControllerBase } from "./base/chaosSculptorUser.controller.base";

@swagger.ApiTags("chaosSculptorUsers")
@common.Controller("chaosSculptorUsers")
export class ChaosSculptorUserController extends ChaosSculptorUserControllerBase {
  constructor(
    protected readonly service: ChaosSculptorUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

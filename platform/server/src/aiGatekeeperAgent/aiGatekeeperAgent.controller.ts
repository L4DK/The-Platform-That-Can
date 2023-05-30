import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AiGatekeeperAgentService } from "./aiGatekeeperAgent.service";
import { AiGatekeeperAgentControllerBase } from "./base/aiGatekeeperAgent.controller.base";

@swagger.ApiTags("aiGatekeeperAgents")
@common.Controller("aiGatekeeperAgents")
export class AiGatekeeperAgentController extends AiGatekeeperAgentControllerBase {
  constructor(
    protected readonly service: AiGatekeeperAgentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
